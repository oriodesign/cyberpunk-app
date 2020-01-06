import { GearType } from "./gear";

export type ProgramCategory = "intrusion" | "detect" | "anti-system" | "anti-ic" | "protection" |
    "anti-personnel" | "controller" | "utility" | "demon";

export type Program = {
    id: string;
    name: string;
    category: ProgramCategory;
    description: string;
    strength: number;
    mu: number;
    cost: number;
    type: GearType;
};