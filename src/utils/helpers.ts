import { API_BASE_URL } from "./constants";

export type ApiError = {
    message: string;
    status?: number;
};

function buildHeaders(options: RequestInit, token?: string) {
    const headers = new Headers(options.headers);

    const isFormData = options.body instanceof FormData;
    if (!headers.has("Content-Type") && !isFormData) {
        headers.set("Content-Type", "application/json");
    }

    if (token) {
        headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
}

export async function apiRequest<T>(
    endpoint: string,
    options: RequestInit = {},
    token?: string
): Promise<T> {
    const headers = buildHeaders(options, token);

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
        credentials: "include",
    });

    if (!response.ok) {
        const message = await extractErrorMessage(response);
        const error: ApiError = { message, status: response.status };
        throw error;
    }

    if (response.status === 204) {
        return {} as T;
    }

    return (await response.json()) as T;
}

async function extractErrorMessage(response: Response) {
    try {
        const data = await response.json();
        if (data?.message) return data.message as string;
        if (typeof data === "string") return data;
    } catch (error) {
        // ignore and fall back to status text
    }
    return response.statusText || "Something went wrong";
}

export function formatCurrency(value?: number) {
    if (value === undefined || value === null) return "-";
    return new Intl.NumberFormat("en-LK", { style: "currency", currency: "LKR" }).format(value);
}

export function formatDate(value?: string) {
    if (!value) return "-";
    return new Date(value).toLocaleDateString();
}
