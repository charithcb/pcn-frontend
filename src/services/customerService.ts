import { apiRequest } from "../utils/helpers";
import { Appointment } from "../types/Appointment";
import { CustomerProfile } from "../types/Customer";

export async function fetchCustomerProfile(token?: string): Promise<CustomerProfile> {
    return apiRequest<CustomerProfile>("/customer/profile", { method: "GET" }, token);
}

export async function submitInquiry(payload: { subject: string; message: string }, token?: string) {
    return apiRequest<{ success: boolean }>("/customer/inquiries", {
        method: "POST",
        body: JSON.stringify(payload),
    }, token);
}

export async function scheduleAppointment(payload: {
    date: string;
    time: string;
    notes?: string;
}, token?: string): Promise<Appointment> {
    return apiRequest<Appointment>("/customer/appointments", {
        method: "POST",
        body: JSON.stringify(payload),
    }, token);
}

export async function fetchAppointments(token?: string): Promise<Appointment[]> {
    return apiRequest<Appointment[]>("/customer/appointments", { method: "GET" }, token);
}
