import { apiRequest } from "../utils/helpers";
import { Vehicle } from "../types/Vehicle";
import { Order } from "../types/Order";

export async function createPreorder(payload: {
    vehiclePreferences: Partial<Vehicle>;
    budget?: number;
    notes?: string;
}, token?: string): Promise<Order> {
    return apiRequest<Order>("/preorders", {
        method: "POST",
        body: JSON.stringify(payload),
    }, token);
}

export async function fetchPreorders(token?: string): Promise<Order[]> {
    return apiRequest<Order[]>("/preorders", { method: "GET" }, token);
}
