import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Avatar from "../components/common/Avatar";
import Button from "../components/common/Button";
import SearchInput from "../components/common/SearchInput";
import { useAuth } from "../hooks/useAuth";

const navItems = [
    { label: "Overview", path: "/admin" },
    { label: "Orders", path: "/admin/orders" },
    { label: "Inventory", path: "/admin/inventory" },
];

export default function AdminLayout() {
    const { user, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-dark-900 text-textc-primary">
            <header className="border-b border-dark-700 bg-dark-800/70 backdrop-blur px-6 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="text-[22px] font-extrabold text-gold">PCN</div>
                    <div className="h-8 w-px bg-dark-700" />
                    <div className="text-textc-secondary text-[14px]">Admin Console</div>
                </div>

                <div className="flex items-center gap-3">
                    <SearchInput placeholder="Search orders, vehicles, customers" />
                    {user ? (
                        <div className="flex items-center gap-3 px-3 py-2 bg-dark-700 rounded-full border border-dark-600">
                            <Avatar size={36} />
                            <div>
                                <div className="text-[14px] font-semibold">{user.name}</div>
                                <div className="text-[12px] text-textc-muted">{user.role || "Administrator"}</div>
                            </div>
                            <div className="h-6 w-px bg-dark-600" />
                            <Button size="sm" variant="secondary" onClick={handleLogout}>
                                Sign out
                            </Button>
                        </div>
                    ) : null}
                </div>
            </header>

            <div className="flex">
                <aside className="w-64 border-r border-dark-700 p-6 hidden lg:block">
                    <div className="flex flex-col gap-2">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-4 py-3 rounded-xl border transition-colors text-[15px] font-semibold ${
                                        isActive
                                            ? "border-gold/40 bg-gold/10 text-gold"
                                            : "border-transparent hover:border-dark-600 text-textc-secondary"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </aside>

                <main className="flex-1 min-h-[calc(100vh-72px)] px-4 py-6 md:px-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
