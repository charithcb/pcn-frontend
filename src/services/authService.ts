import { apiRequest } from "../utils/helpers";
import { AuthResponse, User } from "../types/User";

export async function login(email: string, password: string): Promise<AuthResponse> {
    return apiRequest<AuthResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });
}

export async function register(name: string, email: string, password: string): Promise<AuthResponse> {
    return apiRequest<AuthResponse>("/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
    });
}

export async function fetchProfile(token: string): Promise<User> {
    return apiRequest<User>("/auth/profile", { method: "GET" }, token);
}
