import CustomerLayout from "../../../layouts/CustomerLayout";

export default function CustomerDashboard() {
    return (
        <CustomerLayout>
            {/* TOP BAR */}
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">
                    Dashboard
                </h1>
            </div>

            {/* PAGE CONTENT */}
            <div className="px-4 py-4 flex flex-col gap-4">

                {/* WELCOME CARD */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h2 className="text-[18px] font-semibold mb-1">
                        Welcome back
                    </h2>
                    <p className="text-[14px] text-textc-secondary">
                        View your vehicle orders, track shipments, and manage your pre-orders here.
                    </p>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="border border-dark-600 rounded-2xl p-3">
                        <div className="text-[12px] text-textc-muted mb-1">
                            Active Orders
                        </div>
                        <div className="text-[20px] font-bold">0</div>
                    </div>

                    <div className="border border-dark-600 rounded-2xl p-3">
                        <div className="text-[12px] text-textc-muted mb-1">
                            Pre-orders
                        </div>
                        <div className="text-[20px] font-bold">0</div>
                    </div>

                    <div className="border border-dark-600 rounded-2xl p-3">
                        <div className="text-[12px] text-textc-muted mb-1">
                            Delivered
                        </div>
                        <div className="text-[20px] font-bold">0</div>
                    </div>
                </div>

                {/* RECENT ACTIVITY */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h3 className="text-[16px] font-semibold mb-2">
                        Recent activity
                    </h3>
                    <p className="text-[14px] text-textc-muted">
                        You don’t have any activity yet. Place an order or pre-order a vehicle to see updates here.
                    </p>
                </div>

            </div>
        </CustomerLayout>
    );
}

