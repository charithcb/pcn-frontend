export interface User {
    id: string;
    name: string;
    email: string;
    role?: string;
    phone?: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}
