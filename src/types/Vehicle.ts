export interface Vehicle {
    id: string;
    make: string;
    model: string;
    year: number;
    mileageKm: number;
    fuelType: string;
    transmission: string;
    engineCc: number;
    priceLkr: number;
    imageUrl?: string;
    description: string;
}

export type VehicleSummary = Pick<
    Vehicle,
    "id" | "make" | "model" | "year" | "priceLkr" | "mileageKm" | "fuelType" | "imageUrl"
>;
