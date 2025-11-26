import { Appointment } from "../types/Appointment";
import { CustomerProfile } from "../types/Customer";
import { Order } from "../types/Order";
import { Tracking } from "../types/Tracking";
import { User } from "../types/User";
import { Vehicle } from "../types/Vehicle";

const mockUser: User = {
    id: "mock-user-1",
    name: "Chamath Fernando",
    email: "chamath@example.com",
    role: "customer",
    phone: "+94 71 234 5678",
};

const mockVehicles: Vehicle[] = [
    {
        id: "veh-001",
        make: "Toyota",
        model: "Corolla Axio",
        year: 2021,
        mileage: 23000,
        price: 7200000,
        fuelType: "Petrol",
        transmission: "Automatic",
        imageUrl: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
        description: "Clean import with full service history and hybrid warranty.",
    },
    {
        id: "veh-002",
        make: "Honda",
        model: "Vezel",
        year: 2020,
        mileage: 41000,
        price: 8150000,
        fuelType: "Hybrid",
        transmission: "Automatic",
        imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
        description: "Z grade with Honda Sensing and black interior package.",
    },
    {
        id: "veh-003",
        make: "Mazda",
        model: "CX-5",
        year: 2022,
        mileage: 12000,
        price: 12350000,
        fuelType: "Diesel",
        transmission: "Automatic",
        imageUrl: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
        description: "Sri Lanka agent maintained with full options.",
    },
];

const mockOrders: Order[] = [
    { id: "ORD-1001", status: "processing", vehicleId: "veh-002", expectedArrival: "2024-10-12" },
    { id: "ORD-1002", status: "delivered", vehicleId: "veh-001", expectedArrival: "2024-07-02" },
];

let mockAppointments: Appointment[] = [
    {
        id: "APT-01",
        date: "2024-09-20",
        time: "10:30",
        location: "PCN Showroom - Colombo",
        status: "Confirmed",
        notes: "Test drive for Honda Vezel.",
    },
];

const mockTrackingRecords: Record<string, Tracking> = {
    "TRK-001": {
        trackingNumber: "TRK-001",
        status: "In transit",
        location: "Colombo Port",
        estimatedArrival: "2024-09-25",
        history: [
            { status: "Loaded on vessel", location: "Yokohama", updatedAt: "2024-09-05T08:00:00Z" },
            { status: "Arrived at port", location: "Colombo", updatedAt: "2024-09-18T14:00:00Z" },
        ],
    },
};

const mockSummary = {
    activeOrders: 1,
    preorders: 2,
    delivered: 3,
    recent: [
        { title: "Pre-order submitted", description: "Requested Mazda CX-5 Signature", createdAt: "2024-09-15T11:00:00Z" },
        { title: "Tracking updated", description: "TRK-001 cleared customs", createdAt: "2024-09-18T14:00:00Z" },
    ],
};

const mockProfile: CustomerProfile = {
    ...mockUser,
    vehicles: mockVehicles,
    orders: mockOrders,
    appointments: mockAppointments,
    preferredContactMethod: "phone",
};

function parseJsonBody(body: BodyInit | null | undefined) {
    if (!body || typeof body !== "string") return undefined;
    try {
        return JSON.parse(body);
    } catch (error) {
        return undefined;
    }
}

export async function handleMockRequest<T>(endpoint: string, options: RequestInit): Promise<T | undefined> {
    const useMocks = process.env.REACT_APP_USE_MOCKS !== "false";
    if (!useMocks) return undefined;

    const method = (options.method || "GET").toUpperCase();
    const path = endpoint.split("?")[0];

    // Auth
    if (path === "/auth/login" && method === "POST") {
        const body = parseJsonBody(options.body);
        const name = body?.email?.split("@")[0] || mockUser.name;
        return { token: "mock-token", user: { ...mockUser, name, email: body?.email || mockUser.email } } as T;
    }

    if (path === "/auth/register" && method === "POST") {
        const body = parseJsonBody(options.body);
        return { token: "mock-token", user: { ...mockUser, name: body?.name || mockUser.name, email: body?.email || mockUser.email } } as T;
    }

    if (path === "/auth/profile" && method === "GET") {
        return mockUser as T;
    }

    // Customer summary
    if (path === "/customer/summary" && method === "GET") {
        return mockSummary as T;
    }

    if (path === "/customer/profile" && method === "GET") {
        return mockProfile as T;
    }

    if (path === "/customer/inquiries" && method === "POST") {
        return { success: true } as T;
    }

    if (path === "/customer/appointments") {
        if (method === "GET") {
            return mockAppointments as T;
        }
        if (method === "POST") {
            const body = parseJsonBody(options.body);
            const appointment: Appointment = {
                id: `APT-${String(mockAppointments.length + 1).padStart(2, "0")}`,
                date: body?.date || new Date().toISOString().slice(0, 10),
                time: body?.time || "10:00",
                notes: body?.notes,
                status: "Pending",
                location: "PCN Showroom",
            };
            mockAppointments = [appointment, ...mockAppointments];
            return appointment as T;
        }
    }

    // Preorders
    if (path === "/preorders" && method === "POST") {
        const body = parseJsonBody(options.body);
        const order: Order = {
            id: `PRE-${Math.floor(Math.random() * 9000 + 1000)}`,
            status: "submitted",
            createdAt: new Date().toISOString(),
            vehicle: {
                id: "custom",
                make: body?.vehiclePreferences?.make || "Requested make",
                model: body?.vehiclePreferences?.model || "Requested model",
                price: body?.budget,
            },
        };
        return order as T;
    }

    // Vehicles
    if (path === "/vehicles" && method === "GET") {
        return mockVehicles as T;
    }

    if (path.startsWith("/vehicles/") && method === "GET") {
        const id = path.replace("/vehicles/", "");
        const vehicle = mockVehicles.find((item) => item.id === id);
        if (!vehicle) {
            throw { message: "Vehicle not found", status: 404 };
        }
        return vehicle as T;
    }

    // Tracking
    if (path.startsWith("/tracking/") && method === "GET") {
        const code = path.replace("/tracking/", "");
        const record = mockTrackingRecords[code];
        if (!record) {
            throw { message: "Tracking record not found", status: 404 };
        }
        return record as T;
    }

    return undefined;
}
