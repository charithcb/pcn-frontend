import CustomerLayout from "../../../layouts/CustomerLayout";
import useFetch from "../../../hooks/useFetch";
import Spinner from "../../../components/common/Spinner";
import { useAuth } from "../../../hooks/useAuth";

interface DashboardSummary {
    activeOrders: number;
    preorders: number;
    delivered: number;
    recent?: { title: string; description: string; createdAt?: string }[];
}

export default function CustomerDashboard() {
    const { token } = useAuth();
    const { data, loading } = useFetch<DashboardSummary>("/customer/summary", token || undefined);

    return (
        <CustomerLayout>
            {/* TOP BAR */}
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">Dashboard</h1>
            </div>

            {/* PAGE CONTENT */}
            <div className="px-4 py-4 flex flex-col gap-4">
                {/* WELCOME CARD */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h2 className="text-[18px] font-semibold mb-1">Welcome back</h2>
                    <p className="text-[14px] text-textc-secondary">
                        View your vehicle orders, track shipments, and manage your pre-orders here.
                    </p>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <StatCard label="Active Orders" value={data?.activeOrders ?? 0} />
                    <StatCard label="Pre-orders" value={data?.preorders ?? 0} />
                    <StatCard label="Delivered" value={data?.delivered ?? 0} />
                </div>

                {/* RECENT ACTIVITY */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h3 className="text-[16px] font-semibold mb-2">Recent activity</h3>
                    {loading ? (
                        <Spinner />
                    ) : data?.recent?.length ? (
                        <div className="flex flex-col gap-3">
                            {data.recent.map((item, index) => (
                                <div key={index} className="border border-dark-700 rounded-xl p-3">
                                    <div className="text-[15px] font-semibold">{item.title}</div>
                                    <div className="text-[13px] text-textc-muted">{item.description}</div>
                                    {item.createdAt ? (
                                        <div className="text-[12px] text-textc-muted mt-1">{new Date(item.createdAt).toLocaleString()}</div>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-[14px] text-textc-muted">
                            You don’t have any activity yet. Place an order or pre-order a vehicle to see updates here.
                        </p>
                    )}
                </div>
            </div>
        </CustomerLayout>
    );
}

function StatCard({ label, value }: { label: string; value: number }) {
    return (
        <div className="border border-dark-600 rounded-2xl p-3">
            <div className="text-[12px] text-textc-muted mb-1">{label}</div>
            <div className="text-[20px] font-bold">{value}</div>
        </div>
    );
}
