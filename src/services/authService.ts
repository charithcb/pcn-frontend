import { User } from "../types/User";

const NETWORK_DELAY = 200;

const mockUser: User = {
    id: "user-001",
    name: "Demo Customer",
    email: "demo@pcn.local",
    role: "customer",
    phone: "+94 77 000 0000",
};

export const authService = {
    async login(email: string, _password: string): Promise<User> {
        return new Promise((resolve) => setTimeout(() => resolve({ ...mockUser, email }), NETWORK_DELAY));
    },

    async register(name: string, email: string): Promise<User> {
        return new Promise((resolve) =>
            setTimeout(() => resolve({ ...mockUser, id: crypto.randomUUID(), name, email }), NETWORK_DELAY),
        );
    },
};
