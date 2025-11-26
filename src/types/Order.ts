import { Vehicle } from "./Vehicle";

export interface Order {
    id: string;
    status: string;
    vehicleId?: string;
    vehicle?: Vehicle;
    expectedArrival?: string;
    createdAt?: string;
}
