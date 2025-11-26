import { BrowserRouter, Routes, Route } from "react-router-dom";

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






export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Customer */}
                <Route path="/customer/dashboard" element={<CustomerDashboard />} />
                <Route path="/customer/vehicles" element={<VehicleList />} />
                <Route path="/customer/vehicles/:id" element={<VehicleDetails />} />
                <Route path="/customer/preorder" element={<PreOrder />} />
                <Route path="/customer/tracking" element={<Tracking />} />
                <Route path="/customer/inquiries" element={<Inquiries />} />
                <Route path="/customer/appointments" element={<Appointments />} />
                <Route path="/customer/profile" element={<Profile />} />





            </Routes>
        </BrowserRouter>
    );
}

