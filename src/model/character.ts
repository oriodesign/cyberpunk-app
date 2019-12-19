import { Roles } from "./role";

export type Character = {
    role: Roles;
    statsPoints: number;
    statistics: CharacterStatistics;
    skills: CharacterSkills;
    cash: number;
    job: string;
};

export type CharacterSkills = {
    [id: string]: number;
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
};

export const deriveStats = (s: CharacterStatistics): DerivedStats => {
    const btm = [0, 0, 0, -1, -1, -2, -2, -3, -3, -4, -4, 5];

    return {
        run: s.movementAllowance * 3,
        leap: Math.round(s.movementAllowance * 3 / 4),
        humanity: s.empathy * 10,
        saveNumber: s.bodyType,
        bodyTypeModifier: btm[s.bodyType],
        carry: s.bodyType * 10,
        lift: s.bodyType * 40
    };
}
