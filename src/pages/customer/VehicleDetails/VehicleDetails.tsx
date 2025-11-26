import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomerLayout from "../../../layouts/CustomerLayout";
import { vehicleService } from "../../../services/vehicleService";
import { Vehicle } from "../../../types/Vehicle";

export default function VehicleDetails() {
    const { id } = useParams<{ id: string }>();
    const [vehicle, setVehicle] = useState<Vehicle | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        vehicleService
            .getVehicleById(id)
            .then((result) => setVehicle(result ?? null))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <CustomerLayout>
                <div className="px-4 py-6 text-textc-secondary">Loading vehicle details...</div>
            </CustomerLayout>
        );
    }

    if (!vehicle) {
        return (
            <CustomerLayout>
                <div className="px-4 py-6 text-textc-secondary">Vehicle not found.</div>
            </CustomerLayout>
        );
    }

    return (
        <CustomerLayout>
            {/* TOP BAR */}
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">Vehicle Details</h1>
            </div>

            {/* CONTENT */}
            <div className="px-4 py-4 flex flex-col gap-4">
                {/* IMAGE */}
                <div
                    className="w-full h-56 bg-dark-700 rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${vehicle.imageUrl})` }}
                />

                {/* TITLE + PRICE */}
                <div>
                    <h2 className="text-[22px] font-bold text-textc-primary">
                        {vehicle.make} {vehicle.model} {vehicle.year}
                    </h2>

                    <p className="text-[16px] font-bold text-gold mt-1">LKR {vehicle.priceLkr.toLocaleString()}</p>
                </div>

                {/* SPECS */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h3 className="text-[16px] font-semibold mb-3">Specifications</h3>

                    <ul className="text-[14px] text-textc-secondary space-y-1">
                        <li>• Mileage: {vehicle.mileageKm.toLocaleString()} km</li>
                        <li>• Fuel Type: {vehicle.fuelType}</li>
                        <li>• Transmission: {vehicle.transmission}</li>
                        <li>• Engine Capacity: {vehicle.engineCc}cc</li>
                        <li>• Year: {vehicle.year}</li>
                    </ul>
                </div>

                {/* DESCRIPTION */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h3 className="text-[16px] font-semibold mb-2">Description</h3>
                    <p className="text-[14px] text-textc-muted leading-relaxed">{vehicle.description}</p>
                </div>

                {/* CTA BUTTONS */}
                <div className="flex flex-col gap-3">
                    <button className="w-full bg-gold text-black font-semibold py-2 rounded-full hover:bg-gold-dark transition">
                        Place Order
                    </button>

                    <button className="w-full border border-gold text-gold font-semibold py-2 rounded-full hover:bg-gold/10 transition">
                        Pre-order Instead
                    </button>
                </div>
            </div>
        </CustomerLayout>
    );
}
