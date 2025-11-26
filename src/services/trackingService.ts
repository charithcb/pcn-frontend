import { apiRequest } from "../utils/helpers";
import { Tracking } from "../types/Tracking";

export async function fetchTracking(trackingNumber: string, token?: string): Promise<Tracking> {
    return apiRequest<Tracking>(`/tracking/${trackingNumber}`, { method: "GET" }, token);
}
