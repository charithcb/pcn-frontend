import { FormEvent, useState } from "react";
import CustomerLayout from "../../../layouts/CustomerLayout";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import { fetchTracking } from "../../../services/trackingService";
import { Tracking as TrackingType } from "../../../types/Tracking";
import Spinner from "../../../components/common/Spinner";
import { useAuth } from "../../../hooks/useAuth";
import { formatDate } from "../../../utils/helpers";

export default function Tracking() {
    const { token } = useAuth();
    const [trackingNumber, setTrackingNumber] = useState("");
    const [tracking, setTracking] = useState<TrackingType | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const data = await fetchTracking(trackingNumber, token || undefined);
            setTracking(data);
        } catch (err) {
            setError((err as { message?: string }).message || "Unable to fetch tracking info");
            setTracking(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <CustomerLayout>
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">Track your order</h1>
            </div>

            <div className="px-4 py-4 flex flex-col gap-4">
                <form className="flex gap-2" onSubmit={handleSubmit}>
                    <Input
                        placeholder="Enter tracking number"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        required
                    />
                    <div className="min-w-[120px]">
                        <Button type="submit">{loading ? <Spinner /> : "Track"}</Button>
                    </div>
                </form>
                {error ? <p className="text-red-400 text-[14px]">{error}</p> : null}

                {loading ? (
                    <Spinner />
                ) : tracking ? (
                    <div className="border border-dark-600 rounded-2xl p-4 space-y-2">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="text-[14px] text-textc-muted">Tracking</div>
                                <div className="text-[18px] font-semibold">{tracking.trackingNumber}</div>
                            </div>
                            <div className="text-gold font-semibold">{tracking.status}</div>
                        </div>
                        <div className="text-[14px] text-textc-secondary">Location: {tracking.location || "-"}</div>
                        <div className="text-[14px] text-textc-secondary">
                            Estimated arrival: {formatDate(tracking.estimatedArrival)}
                        </div>

                        <div className="mt-4">
                            <div className="text-[13px] font-semibold mb-2">History</div>
                            {tracking.history?.length ? (
                                <div className="flex flex-col gap-2">
                                    {tracking.history.map((entry, index) => (
                                        <div key={index} className="border border-dark-700 rounded-xl p-3">
                                            <div className="flex justify-between">
                                                <div className="text-[14px] font-semibold">{entry.status}</div>
                                                <div className="text-[12px] text-textc-muted">
                                                    {entry.updatedAt ? new Date(entry.updatedAt).toLocaleString() : ""}
                                                </div>
                                            </div>
                                            <div className="text-[13px] text-textc-secondary">{entry.location}</div>
                                            {entry.note ? <div className="text-[12px] text-textc-muted">{entry.note}</div> : null}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-[13px] text-textc-muted">No updates yet.</p>
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        </CustomerLayout>
    );
}
