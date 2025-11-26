import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomerLayout from "../../../layouts/CustomerLayout";
import { vehicleService } from "../../../services/vehicleService";
import { Vehicle } from "../../../types/Vehicle";

export default function VehicleList() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        vehicleService
            .getVehicles()
            .then(setVehicles)
            .finally(() => setLoading(false));
    }, []);

    const handleSearch = async (value: string) => {
        setQuery(value);
        setLoading(true);
        const results = await vehicleService.searchVehicles(value);
        setVehicles(results);
        setLoading(false);
    };

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
                    className="w-full bg-dark-800 border border-dark-600 text-textc-primary placeholder-textc-muted rounded-full px-4 py-2 text-[14px] focus:border-gold outline-none"
                    placeholder="Search by make, model, year..."
                    value={query}
                    onChange={(event) => handleSearch(event.target.value)}
                />

                {/* GRID */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="border border-dark-600 rounded-2xl overflow-hidden bg-dark-800 animate-pulse">
                                <div className="h-40 bg-dark-700" />
                                <div className="p-4 space-y-2">
                                    <div className="h-4 bg-dark-700 rounded w-3/4" />
                                    <div className="h-3 bg-dark-700 rounded w-1/2" />
                                    <div className="h-3 bg-dark-700 rounded w-1/3" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : vehicles.length === 0 ? (
                    <div className="text-center text-textc-muted text-sm border border-dark-600 rounded-2xl py-12">
                        No vehicles match "{query}" yet. Try a different search.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {vehicles.map((vehicle) => (
                            <div key={vehicle.id} className="border border-dark-600 rounded-2xl overflow-hidden bg-dark-800">
                                <div
                                    className="h-40 bg-dark-700 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${vehicle.imageUrl})` }}
                                />

                                <div className="p-4">
                                    <h2 className="text-[16px] font-semibold">
                                        {vehicle.make} {vehicle.model} {vehicle.year}
                                    </h2>

                                    <p className="text-[14px] text-textc-muted mt-1">
                                        {vehicle.mileageKm.toLocaleString()} km · {vehicle.fuelType}
                                    </p>

                                    <p className="text-[15px] font-bold text-gold mt-2">
                                        LKR {vehicle.priceLkr.toLocaleString()}
                                    </p>

                                    <Link to={`/customer/vehicles/${vehicle.id}`}>
                                        <button className="w-full bg-gold text-black font-semibold py-2 rounded-full mt-3 hover:bg-gold-dark transition">
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
