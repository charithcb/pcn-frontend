import { Appointment } from "./Appointment";
import { Order } from "./Order";
import { Vehicle } from "./Vehicle";

export interface CustomerProfile {
    id: string;
    name: string;
    email: string;
    phone?: string;
    preferredContactMethod?: string;
    vehicles?: Vehicle[];
    orders?: Order[];
    appointments?: Appointment[];
}
