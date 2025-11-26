import { ReactElement } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/public/Home/Home";
import Login from "../pages/public/Login/Login";
import Register from "../pages/public/Register/Register";

import CustomerDashboard from "../pages/customer/Dashboard/CustomerDashboard";
import VehicleList from "../pages/customer/VehicleList/VehicleList";
import VehicleDetails from "../pages/customer/VehicleDetails/VehicleDetails";
import PreOrder from "../pages/customer/PreOrder/PreOrder";
import Tracking from "../pages/customer/Tracking/Tracking";
import Inquiries from "../pages/customer/Inquiries/Inquiries";
import Appointments from "../pages/customer/Appointments/Appointments";
import Profile from "../pages/customer/Profile/Profile";
import { useAuth } from "../hooks/useAuth";
import Spinner from "../components/common/Spinner";
import AdminRoutes from "./AdminRoutes";

function RequireAuth({ children }: { children: ReactElement }) {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-dark-900">
                <Spinner />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Admin */}
                <Route
                    path="/admin/*"
                    element={
                        <RequireAuth>
                            <AdminRoutes />
                        </RequireAuth>
                    }
                />

                {/* Customer */}
                <Route
                    path="/customer/dashboard"
                    element={
                        <RequireAuth>
                            <CustomerDashboard />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/customer/vehicles"
                    element={
                        <RequireAuth>
                            <VehicleList />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/customer/vehicles/:id"
                    element={
                        <RequireAuth>
                            <VehicleDetails />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/customer/preorder"
                    element={
                        <RequireAuth>
                            <PreOrder />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/customer/tracking"
                    element={
                        <RequireAuth>
                            <Tracking />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/customer/inquiries"
                    element={
                        <RequireAuth>
                            <Inquiries />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/customer/appointments"
                    element={
                        <RequireAuth>
                            <Appointments />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/customer/profile"
                    element={
                        <RequireAuth>
                            <Profile />
                        </RequireAuth>
                    }
                />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}
