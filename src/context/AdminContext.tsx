import React, { createContext, useContext, useMemo } from "react";

export type AdminStat = {
    label: string;
    value: string;
    trend?: string;
};

export type AdminOrder = {
    id: string;
    customer: string;
    vehicle: string;
    status: "in-progress" | "delivered" | "pending";
    total: string;
    updatedAt: string;
};

export type AdminInventoryItem = {
    id: string;
    model: string;
    stock: number;
    status: "available" | "in-transit" | "reserved";
    eta?: string;
};

export type AdminTeamMember = {
    name: string;
    role: string;
    avatar?: string;
};

type AdminContextValue = {
    stats: AdminStat[];
    orders: AdminOrder[];
    inventory: AdminInventoryItem[];
    team: AdminTeamMember[];
};

const AdminContext = createContext<AdminContextValue | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
    const stats: AdminStat[] = useMemo(
        () => [
            { label: "Active Orders", value: "42", trend: "+6 this week" },
            { label: "Vehicles In-Transit", value: "18", trend: "-2 delayed" },
            { label: "Inventory Value", value: "LKR 86M", trend: "+12% MoM" },
            { label: "Pending Inquiries", value: "9", trend: "3 new" },
        ],
        []
    );

    const orders: AdminOrder[] = useMemo(
        () => [
            {
                id: "PO-2341",
                customer: "Nimal Perera",
                vehicle: "Toyota Axio 2021",
                status: "in-progress",
                total: "LKR 9.4M",
                updatedAt: "2h ago",
            },
            {
                id: "PO-2338",
                customer: "Sajith Fernando",
                vehicle: "Honda Vezel 2020",
                status: "pending",
                total: "LKR 8.1M",
                updatedAt: "6h ago",
            },
            {
                id: "PO-2332",
                customer: "Thilini Silva",
                vehicle: "Suzuki Swift 2022",
                status: "delivered",
                total: "LKR 6.3M",
                updatedAt: "Yesterday",
            },
            {
                id: "PO-2319",
                customer: "Ishara Weerasinghe",
                vehicle: "Mazda CX-5 2021",
                status: "in-progress",
                total: "LKR 12.8M",
                updatedAt: "2d ago",
            },
        ],
        []
    );

    const inventory: AdminInventoryItem[] = useMemo(
        () => [
            { id: "INV-9401", model: "Toyota Land Cruiser 2023", stock: 2, status: "available" },
            { id: "INV-9374", model: "Nissan Leaf 2022", stock: 5, status: "reserved" },
            { id: "INV-9342", model: "Subaru Forester 2020", stock: 1, status: "in-transit", eta: "ETA: 18 Sept" },
            { id: "INV-9328", model: "Toyota Aqua 2021", stock: 7, status: "available" },
            { id: "INV-9289", model: "Hyundai Tucson 2019", stock: 3, status: "in-transit", eta: "ETA: 10 Oct" },
        ],
        []
    );

    const team: AdminTeamMember[] = useMemo(
        () => [
            { name: "Amanda Peris", role: "Operations", avatar: "https://i.pravatar.cc/150?img=5" },
            { name: "Chamika Jay", role: "Compliance", avatar: "https://i.pravatar.cc/150?img=6" },
            { name: "Ravindu Madhu", role: "Finance", avatar: "https://i.pravatar.cc/150?img=7" },
        ],
        []
    );

    const value = useMemo(
        () => ({ stats, orders, inventory, team }),
        [inventory, orders, stats, team]
    );

    return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error("useAdmin must be used within an AdminProvider");
    }
    return context;
}
