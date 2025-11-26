import { mockTracking } from "../utils/mockData";
import { TrackingRecord } from "../types/Tracking";

const NETWORK_DELAY = 200;

export const trackingService = {
    async getTrackingByOrderId(orderId: string): Promise<TrackingRecord | undefined> {
        const normalized = orderId.trim().toUpperCase();

        return new Promise((resolve) =>
            setTimeout(
                () => resolve(mockTracking.find((record) => record.orderId.toUpperCase() === normalized)),
                NETWORK_DELAY,
            ),
        );
    },
};
