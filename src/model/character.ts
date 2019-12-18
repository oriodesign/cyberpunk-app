import { Role } from "./role";

export type Character = {
    role: Role;
    statistics: CharacterStatistics;
};

export type CharacterStatistics = {
    intelligence: number;
    reflexes: number;
    cool: number;
    technicalAbility: number;
    luck: number;
    attractiveness: number;
    movementAllowance: number;
    empathy: number;
    bodyType: number;
};

