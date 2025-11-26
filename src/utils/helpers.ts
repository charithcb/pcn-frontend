import { API_BASE_URL } from "./constants";

export type ApiError = {
    message: string;
    status?: number;
};

export async function apiRequest<T>(
    endpoint: string,
    options: RequestInit = {},
    token?: string
): Promise<T> {
    const headers: HeadersInit = {
        "Content-Type": "application/json",
        ...(options.headers || {}),
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

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
