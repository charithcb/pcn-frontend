import { API_BASE_URL } from "../config/api";
import { ApiError } from "../utils/helpers";

export async function uploadDocument(file: File, token?: string) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/documents`, {
        method: "POST",
        body: formData,
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        credentials: "include",
    });

    if (!response.ok) {
        const message = response.statusText || "Upload failed";
        const error: ApiError = { message, status: response.status };
        throw error;
    }

    return response.json();
}
