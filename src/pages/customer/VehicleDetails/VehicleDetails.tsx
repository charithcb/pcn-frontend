import CustomerLayout from "../../../layouts/CustomerLayout";

export default function VehicleDetails() {
    return (
        <CustomerLayout>
            {/* TOP BAR */}
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">
                    Vehicle Details
                </h1>
            </div>

            {/* CONTENT */}
            <div className="px-4 py-4 flex flex-col gap-4">

                {/* IMAGE */}
                <div className="w-full h-56 bg-dark-700 rounded-2xl"></div>

                {/* TITLE + PRICE */}
                <div>
                    <h2 className="text-[22px] font-bold text-textc-primary">
                        Toyota Aqua 2018
                    </h2>

                    <p className="text-[16px] font-bold text-gold mt-1">
                        LKR 6,500,000
                    </p>
                </div>

                {/* SPECS */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h3 className="text-[16px] font-semibold mb-3">Specifications</h3>

                    <ul className="text-[14px] text-textc-secondary space-y-1">
                        <li>• Mileage: 52,000 km</li>
                        <li>• Fuel Type: Hybrid</li>
                        <li>• Transmission: Automatic</li>
                        <li>• Engine Capacity: 1500cc</li>
                        <li>• Year: 2018</li>
                    </ul>
                </div>

                {/* DESCRIPTION */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h3 className="text-[16px] font-semibold mb-2">Description</h3>
                    <p className="text-[14px] text-textc-muted leading-relaxed">
                        A well-maintained Toyota Aqua with excellent fuel economy, perfect
                        for daily commuting. Smooth driving experience and reliable hybrid
                        system.
                    </p>
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
