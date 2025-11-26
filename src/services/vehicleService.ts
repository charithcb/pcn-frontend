import { apiRequest } from "../utils/helpers";
import { Vehicle } from "../types/Vehicle";

export async function fetchVehicles(token?: string): Promise<Vehicle[]> {
    return apiRequest<Vehicle[]>("/vehicles", { method: "GET" }, token);
}

export async function fetchVehicleById(id: string, token?: string): Promise<Vehicle> {
    return apiRequest<Vehicle>(`/vehicles/${id}` as const, { method: "GET" }, token);
}
