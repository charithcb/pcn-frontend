import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomerLayout from "../../../layouts/CustomerLayout";
import { Vehicle } from "../../../types/Vehicle";
import { fetchVehicleById } from "../../../services/vehicleService";
import Spinner from "../../../components/common/Spinner";
import { useAuth } from "../../../hooks/useAuth";
import { formatCurrency } from "../../../utils/helpers";
import Button from "../../../components/common/Button";
import Toast from "../../../components/common/Toast";

export default function VehicleDetails() {
    const { id } = useParams<{ id: string }>();
    const { token } = useAuth();
    const [vehicle, setVehicle] = useState<Vehicle | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const load = async () => {
            setLoading(true);
            try {
                const response = await fetchVehicleById(id, token || undefined);
                setVehicle(response);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [id, token]);

    const handleInterest = () => {
        setMessage("Your interest has been shared with our consultants.");
        setTimeout(() => setMessage(null), 2500);
    };

    return (
        <CustomerLayout>
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">Vehicle details</h1>
            </div>

            <div className="px-4 py-4 flex flex-col gap-4">
                {loading ? (
                    <Spinner />
                ) : vehicle ? (
                    <>
                        <div className="border border-dark-600 rounded-2xl overflow-hidden">
                            <div className="h-64 bg-dark-800 flex items-center justify-center">
                                {vehicle.imageUrl ? (
                                    <img
                                        src={vehicle.imageUrl}
                                        alt={`${vehicle.make} ${vehicle.model}`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-textc-muted">No image available</span>
                                )}
                            </div>
                            <div className="p-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-[20px] font-bold">
                                        {vehicle.make} {vehicle.model}
                                    </h2>
                                    <span className="text-gold font-semibold text-[16px]">
                                        {formatCurrency(vehicle.price)}
                                    </span>
                                </div>
                                <p className="text-[14px] text-textc-muted">{vehicle.description || "Detailed specs coming soon."}</p>
                                <div className="text-[14px] text-textc-secondary">
                                    {vehicle.year ? `Year: ${vehicle.year}` : null} {vehicle.mileage ? `· ${vehicle.mileage.toLocaleString()} km` : ""}
                                </div>
                                <div className="text-[14px] text-textc-secondary">
                                    Fuel: {vehicle.fuelType || "-"} · Transmission: {vehicle.transmission || "-"}
                                </div>
                            </div>
                        </div>

                        <Button onClick={handleInterest}>I'm interested</Button>
                        {message ? <Toast message={message} /> : null}
                    </>
                ) : (
                    <p className="text-textc-muted">Vehicle not found.</p>
                )}
            </div>
        </CustomerLayout>
    );
}
