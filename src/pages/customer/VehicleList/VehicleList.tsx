import { Link } from "react-router-dom";
import CustomerLayout from "../../../layouts/CustomerLayout";
import { useEffect, useMemo, useState } from "react";
import { Vehicle } from "../../../types/Vehicle";
import { fetchVehicles } from "../../../services/vehicleService";
import Spinner from "../../../components/common/Spinner";
import { useAuth } from "../../../hooks/useAuth";
import { formatCurrency } from "../../../utils/helpers";

export default function VehicleList() {
    const { token } = useAuth();
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                const response = await fetchVehicles(token || undefined);
                setVehicles(response);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [token]);

    const filtered = useMemo(() => {
        const lower = query.toLowerCase();
        return vehicles.filter(
            (vehicle) =>
                vehicle.make.toLowerCase().includes(lower) ||
                vehicle.model.toLowerCase().includes(lower) ||
                (vehicle.year ? vehicle.year.toString().includes(lower) : false)
        );
    }, [query, vehicles]);

    return (
        <CustomerLayout>
            {/* TOP BAR */}
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">Browse Vehicles</h1>
            </div>

            {/* CONTENT */}
            <div className="px-4 py-4 flex flex-col gap-4">
                {/* SEARCH */}
                <input
                    className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                     placeholder-textc-muted rounded-full px-4 py-2 text-[14px]
                     focus:border-gold outline-none"
                    placeholder="Search by make, model, year..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                {loading ? (
                    <Spinner />
                ) : filtered.length === 0 ? (
                    <p className="text-textc-muted text-[14px]">No vehicles found</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {filtered.map((vehicle) => (
                            <div key={vehicle.id} className="border border-dark-600 rounded-2xl overflow-hidden bg-dark-800">
                                <div className="h-40 bg-dark-700 flex items-center justify-center text-textc-muted">
                                    {vehicle.imageUrl ? (
                                        <img src={vehicle.imageUrl} alt={`${vehicle.make} ${vehicle.model}`} className="object-cover w-full h-full" />
                                    ) : (
                                        <span>No image</span>
                                    )}
                                </div>

                                <div className="p-4 flex flex-col gap-1">
                                    <h2 className="text-[16px] font-semibold">
                                        {vehicle.make} {vehicle.model} {vehicle.year ? `· ${vehicle.year}` : ""}
                                    </h2>
                                    <p className="text-[14px] text-textc-muted">
                                        {vehicle.mileage ? `${vehicle.mileage.toLocaleString()} km` : "Mileage on request"} · {vehicle.fuelType || "-"}
                                    </p>
                                    <p className="text-[15px] font-bold text-gold mt-1">{formatCurrency(vehicle.price)}</p>

                                    <Link to={`/customer/vehicles/${vehicle.id}`}>
                                        <button
                                            className="w-full bg-gold text-black font-semibold py-2 rounded-full mt-3
                               hover:bg-gold-dark transition"
                                        >
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </CustomerLayout>
    );
}
