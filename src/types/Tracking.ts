export interface TrackingHistory {
    status: string;
    location?: string;
    updatedAt?: string;
    note?: string;
}

export interface Tracking {
    trackingNumber: string;
    status: string;
    location?: string;
    estimatedArrival?: string;
    history?: TrackingHistory[];
}
