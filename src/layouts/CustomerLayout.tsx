import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-dark-900 flex justify-center">
            <div className="flex w-full max-w-5xl">
                {/* LEFT SIDEBAR */}
                <aside className="hidden md:flex flex-col w-56 border-r border-dark-600 px-4 py-4 gap-4">
                    <div className="text-[22px] font-extrabold text-gold mb-4">PCN</div>

                    <Link to="/customer/dashboard" className="text-[15px] font-semibold text-textc-primary">
                        Dashboard
                    </Link>

                    <Link to="/customer/vehicles" className="text-[15px] text-textc-secondary">
                        Vehicles
                    </Link>

                    <Link to="/customer/preorder" className="text-[15px] text-textc-secondary">
                        Pre-orders
                    </Link>

                    <Link to="/customer/tracking" className="text-[15px] text-textc-secondary">
                        Track Order
                    </Link>

                    <Link to="/customer/inquiries" className="text-[15px] text-textc-secondary">
                        Inquiries
                    </Link>

                    <Link to="/customer/appointments" className="text-[15px] text-textc-secondary">
                        Appointments
                    </Link>

                    <Link to="/customer/profile" className="text-[15px] text-textc-secondary">
                        Profile
                    </Link>

                    <button
                        className="mt-auto text-left text-[14px] text-red-400 hover:text-red-300"
                        onClick={handleLogout}
                    >
                        Log out
                    </button>
                </aside>

                {/* MAIN CONTENT */}
                <main className="flex-1 max-w-[600px] border-r border-dark-600">{children}</main>

                {/* RIGHT SIDEBAR */}
                <aside className="hidden lg:block w-80 px-4 py-4">
                    <input
                        className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                       placeholder-textc-muted rounded-full px-4 py-2 text-[14px]
                       focus:border-gold outline-none"
                        placeholder="Search"
                    />

                    {user ? (
                        <div className="mt-6 border border-dark-600 rounded-2xl p-4">
                            <div className="text-[12px] text-textc-muted">Signed in as</div>
                            <div className="text-[16px] font-semibold">{user.name}</div>
                            <div className="text-[14px] text-textc-secondary">{user.email}</div>
                        </div>
                    ) : null}
                </aside>
            </div>
        </div>
    );
}
