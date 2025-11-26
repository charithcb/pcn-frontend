export interface Vehicle {
    id: string;
    make: string;
    model: string;
    year?: number;
    mileage?: number;
    price?: number;
    status?: string;
    fuelType?: string;
    transmission?: string;
    imageUrl?: string;
    description?: string;
}
