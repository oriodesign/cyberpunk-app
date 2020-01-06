import { Roles } from "./role";

export type CharacterStatus = "creating" | "completed";

export type Character = {
    id: string;
    status: CharacterStatus;
    name: string;
    role: Roles;
    statsPoints: number;
    statistics: CharacterStatistics;
    damage: number;
    humanity: number;
    skills: CharacterSkills;
    cash: number;
    job: string;
    inventory: CharacterInventory;
    cyberware: CharacterCyberware;
};

export type CharacterSkills = {
    [id: string]: number;
};

export type CharacterItem = {
    id: string;
    itemId: string;
    stash: boolean;
};

export type CharacterInventory = CharacterItem[]

export type CharacterCyberware = {
    neural?: string[];
    audio?: string[];
    leftArm?: string[];
    rightArm?: string[];
    leftLeg?: string[];
    rightLeg?: string[];
    leftEye?: string[];
    rightEye?: string[];
    other: string[];
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

export type DerivedStats = {
    run: number;
    leap: number;
    humanity: number;
    carry: number;
    lift: number;
    saveNumber: number;
    bodyTypeModifier: number;
    initiative: number;
};
