import CustomerLayout from "../../../layouts/CustomerLayout";

export default function Tracking() {
    return (
        <CustomerLayout>
            {/* TOP BAR */}
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">
                    Track Order
                </h1>
            </div>

            {/* CONTENT */}
            <div className="px-4 py-4 flex flex-col gap-4 max-w-xl">
                {/* SEARCH BY ORDER ID */}
                <div className="flex gap-2">
                    <input
                        className="flex-1 bg-dark-800 border border-dark-600 text-textc-primary
                       placeholder-textc-muted rounded-full px-4 py-2 text-[14px]
                       focus:border-gold outline-none"
                        placeholder="Enter order ID..."
                    />
                    <button
                        className="bg-gold text-black font-semibold px-5 py-2 rounded-full
                       hover:bg-gold-dark transition text-[14px]"
                    >
                        Search
                    </button>
                </div>

                {/* SAMPLE TIMELINE CARD */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <div className="text-[14px] text-textc-muted">Order ID</div>
                            <div className="text-[16px] font-semibold">PCN-0001</div>
                        </div>
                        <div className="text-[13px] px-3 py-1 rounded-full bg-gold/15 text-gold font-medium">
                            In Transit
                        </div>
                    </div>

                    <div className="text-[14px] text-textc-secondary mb-3">
                        Toyota Aqua 2018 · Hybrid
                    </div>

                    {/* STATUS STEPS (Twitter-like vertical list) */}
                    <div className="space-y-2 text-[13px] text-textc-secondary">
                        <div className="flex gap-2 items-start">
                            <div className="w-2 h-2 rounded-full bg-gold mt-1" />
                            <div>Ordered</div>
                        </div>
                        <div className="flex gap-2 items-start">
                            <div className="w-2 h-2 rounded-full bg-gold mt-1" />
                            <div>Auction won</div>
                        </div>
                        <div className="flex gap-2 items-start">
                            <div className="w-2 h-2 rounded-full bg-gold mt-1" />
                            <div>Shipped from Japan</div>
                        </div>
                        <div className="flex gap-2 items-start">
                            <div className="w-2 h-2 rounded-full bg-textc-muted mt-1" />
                            <div>Customs clearance (pending)</div>
                        </div>
                        <div className="flex gap-2 items-start">
                            <div className="w-2 h-2 rounded-full bg-textc-muted mt-1" />
                            <div>Ready for delivery</div>
                        </div>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
}
