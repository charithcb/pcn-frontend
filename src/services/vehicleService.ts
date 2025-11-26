import { mockVehicles } from "../utils/mockData";
import { Vehicle } from "../types/Vehicle";

const NETWORK_DELAY = 200;

const sortVehicles = (vehicles: Vehicle[]) =>
    [...vehicles].sort((a, b) => b.year - a.year || a.make.localeCompare(b.make));

export const vehicleService = {
    async getVehicles(): Promise<Vehicle[]> {
        return new Promise((resolve) => setTimeout(() => resolve(sortVehicles(mockVehicles)), NETWORK_DELAY));
    },

    async getVehicleById(id: string): Promise<Vehicle | undefined> {
        return new Promise((resolve) =>
            setTimeout(() => resolve(mockVehicles.find((vehicle) => vehicle.id.toLowerCase() === id.toLowerCase())), NETWORK_DELAY),
        );
    },

    async searchVehicles(query: string): Promise<Vehicle[]> {
        const normalized = query.trim().toLowerCase();

        if (!normalized) {
            return this.getVehicles();
        }

        return new Promise((resolve) =>
            setTimeout(
                () =>
                    resolve(
                        sortVehicles(
                            mockVehicles.filter((vehicle) => {
                                const haystack = `${vehicle.make} ${vehicle.model} ${vehicle.year}`.toLowerCase();
                                return haystack.includes(normalized);
                            }),
                        ),
                    ),
                NETWORK_DELAY,
            ),
        );
    },
};
