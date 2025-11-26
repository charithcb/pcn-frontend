import { Route, Routes } from "react-router-dom";
import { AdminProvider } from "../context/AdminContext";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/Dashboard/AdminDashboard";
import AdminInventory from "../pages/admin/Inventory/AdminInventory";
import AdminOrders from "../pages/admin/Orders/AdminOrders";

export default function AdminRoutes() {
    return (
        <AdminProvider>
            <Routes>
                <Route element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="orders" element={<AdminOrders />} />
                    <Route path="inventory" element={<AdminInventory />} />
                </Route>
            </Routes>
        </AdminProvider>
    );
}
