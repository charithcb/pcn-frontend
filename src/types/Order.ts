export type OrderStatus = "draft" | "confirmed" | "in_transit" | "delivered" | "cancelled";

export interface Order {
    id: string;
    vehicleId: string;
    status: OrderStatus;
    placedAt: string;
    expectedDelivery?: string;
}
