import { Order } from "./Order";
import { User } from "./User";

export interface Customer extends User {
    loyaltyTier?: "standard" | "gold" | "platinum";
    orders?: Order[];
}
