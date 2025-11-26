import { TrackingRecord } from "../types/Tracking";
import { Vehicle } from "../types/Vehicle";

export const mockVehicles: Vehicle[] = [
    {
        id: "pcn-0001",
        make: "Toyota",
        model: "Aqua",
        year: 2018,
        mileageKm: 52000,
        fuelType: "Hybrid",
        transmission: "Automatic",
        engineCc: 1500,
        priceLkr: 6500000,
        imageUrl: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
        description:
            "A well-maintained Toyota Aqua with excellent fuel economy, perfect for daily commuting. Smooth driving experience and reliable hybrid system.",
    },
    {
        id: "pcn-0002",
        make: "Nissan",
        model: "Leaf",
        year: 2020,
        mileageKm: 18000,
        fuelType: "Electric",
        transmission: "Automatic",
        engineCc: 0,
        priceLkr: 8800000,
        imageUrl: "https://images.unsplash.com/photo-1549921296-3c4f0112e0eb?auto=format&fit=crop&w=900&q=80",
        description:
            "Fully electric hatchback with excellent range for city driving. Clean interior, regular service history, and remaining battery warranty.",
    },
    {
        id: "pcn-0003",
        make: "Honda",
        model: "Vezel",
        year: 2019,
        mileageKm: 34000,
        fuelType: "Hybrid",
        transmission: "Automatic",
        engineCc: 1500,
        priceLkr: 10200000,
        imageUrl: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
        description:
            "Popular compact SUV with reliable hybrid system. Spacious interior, upgraded infotainment, and advanced safety features.",
    },
];

export const mockTracking: TrackingRecord[] = [
    {
        orderId: "PCN-0001",
        vehicleLabel: "Toyota Aqua 2018 · Hybrid",
        status: "In Transit",
        estimatedArrival: "2025-02-18",
        steps: [
            { label: "Ordered", completed: true, timestamp: "2025-01-10" },
            { label: "Auction won", completed: true, timestamp: "2025-01-14" },
            { label: "Shipped from Japan", completed: true, timestamp: "2025-01-20" },
            { label: "Customs clearance", completed: false },
            { label: "Ready for delivery", completed: false },
        ],
    },
    {
        orderId: "PCN-0002",
        vehicleLabel: "Nissan Leaf 2020 · Electric",
        status: "Customs",
        estimatedArrival: "2025-03-02",
        steps: [
            { label: "Ordered", completed: true, timestamp: "2025-01-28" },
            { label: "Auction won", completed: true, timestamp: "2025-02-02" },
            { label: "Shipped from Japan", completed: true, timestamp: "2025-02-09" },
            { label: "Customs clearance", completed: true, timestamp: "2025-02-23" },
            { label: "Ready for delivery", completed: false },
        ],
    },
];
