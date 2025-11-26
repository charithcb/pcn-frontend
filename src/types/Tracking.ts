export interface TrackingStep {
    label: string;
    completed: boolean;
    timestamp?: string;
}

export interface TrackingRecord {
    orderId: string;
    vehicleLabel: string;
    status: "Ordered" | "In Transit" | "Customs" | "Delivering" | "Delivered";
    steps: TrackingStep[];
    estimatedArrival?: string;
}
