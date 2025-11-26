import { Route, Routes } from "react-router-dom";
import CustomerDashboard from "../pages/customer/Dashboard/CustomerDashboard";

export default function CustomerRoutes() {
    return (
        <Routes>
            <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        </Routes>
    );
}
