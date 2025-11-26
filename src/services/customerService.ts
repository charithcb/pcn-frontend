import { Customer } from "../types/Customer";
import { Order } from "../types/Order";

const NETWORK_DELAY = 200;

const mockOrders: Order[] = [
    {
        id: "PCN-0001",
        vehicleId: "pcn-0001",
        placedAt: "2025-01-10",
        status: "in_transit",
        expectedDelivery: "2025-02-18",
    },
];

const mockCustomer: Customer = {
    id: "cust-001",
    name: "Demo Customer",
    email: "demo@pcn.local",
    role: "customer",
    loyaltyTier: "gold",
    phone: "+94 77 000 0000",
    orders: mockOrders,
};

export const customerService = {
    async getProfile(): Promise<Customer> {
        return new Promise((resolve) => setTimeout(() => resolve(mockCustomer), NETWORK_DELAY));
    },
};
