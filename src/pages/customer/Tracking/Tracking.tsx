import { useState } from "react";
import CustomerLayout from "../../../layouts/CustomerLayout";
import { trackingService } from "../../../services/trackingService";
import { TrackingRecord } from "../../../types/Tracking";

export default function Tracking() {
    const [orderId, setOrderId] = useState("");
    const [tracking, setTracking] = useState<TrackingRecord | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        setTracking(null);

        const record = await trackingService.getTrackingByOrderId(orderId);

        if (!record) {
            setError("We could not find a tracking record for that order ID yet.");
        } else {
            setTracking(record);
        }

        setLoading(false);
    };

    return (
        <CustomerLayout>
            {/* TOP BAR */}
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">Track Order</h1>
            </div>

            {/* CONTENT */}
            <div className="px-4 py-4 flex flex-col gap-4 max-w-xl">
                {/* SEARCH BY ORDER ID */}
                <div className="flex gap-2">
                    <input
                        className="flex-1 bg-dark-800 border border-dark-600 text-textc-primary placeholder-textc-muted rounded-full px-4 py-2 text-[14px] focus:border-gold outline-none"
                        placeholder="Enter order ID..."
                        value={orderId}
                        onChange={(event) => setOrderId(event.target.value)}
                    />
                    <button
                        className="bg-gold text-black font-semibold px-5 py-2 rounded-full hover:bg-gold-dark transition text-[14px]"
                        onClick={handleSearch}
                        disabled={loading}
                    >
                        {loading ? "Searching..." : "Search"}
                    </button>
                </div>

                {error && <div className="text-[14px] text-red-400">{error}</div>}

                {/* TIMELINE CARD */}
                {tracking && (
                    <div className="border border-dark-600 rounded-2xl p-4">
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <div className="text-[14px] text-textc-muted">Order ID</div>
                                <div className="text-[16px] font-semibold">{tracking.orderId}</div>
                            </div>
                            <div className="text-[13px] px-3 py-1 rounded-full bg-gold/15 text-gold font-medium">
                                {tracking.status}
                            </div>
                        </div>

                        <div className="text-[14px] text-textc-secondary mb-3">{tracking.vehicleLabel}</div>
                        {tracking.estimatedArrival && (
                            <div className="text-[13px] text-textc-muted mb-3">ETA: {tracking.estimatedArrival}</div>
                        )}

                        {/* STATUS STEPS */}
                        <div className="space-y-2 text-[13px] text-textc-secondary">
                            {tracking.steps.map((step, index) => (
                                <div key={index} className="flex gap-2 items-start">
                                    <div
                                        className={`w-2 h-2 rounded-full mt-1 ${step.completed ? "bg-gold" : "bg-textc-muted"}`}
                                    />
                                    <div>
                                        <div>{step.label}</div>
                                        {step.timestamp && <div className="text-[12px] text-textc-muted">{step.timestamp}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </CustomerLayout>
    );
}
