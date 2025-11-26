import { Link } from "react-router-dom";
import CustomerLayout from "../../../layouts/CustomerLayout";

export default function VehicleList() {
    return (
        <CustomerLayout>
            {/* TOP BAR */}
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">
                    Browse Vehicles
                </h1>
            </div>

            {/* CONTENT */}
            <div className="px-4 py-4 flex flex-col gap-4">
                {/* SEARCH */}
                <input
                    className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                     placeholder-textc-muted rounded-full px-4 py-2 text-[14px]
                     focus:border-gold outline-none"
                    placeholder="Search by make, model, year..."
                />

                {/* GRID — static placeholders for now */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="border border-dark-600 rounded-2xl overflow-hidden bg-dark-800"
                        >
                            <div className="h-40 bg-dark-700"></div>

                            <div className="p-4">
                                <h2 className="text-[16px] font-semibold">
                                    Toyota Aqua 2018
                                </h2>

                                <p className="text-[14px] text-textc-muted mt-1">
                                    52,000 km · Hybrid
                                </p>

                                <p className="text-[15px] font-bold text-gold mt-2">
                                    LKR 6,500,000
                                </p>

                                <Link to={`/customer/vehicles/1`}>
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
            </div>
        </CustomerLayout>
    );
}

