export type DiceRoll = {
    min: number;
    max: number;
    count: number;
    bonus: number;
};

export const diceMap: { [id: string]: DiceRoll } = {
    "0.5": { min: 0.5, max: 0.5, count: 0, bonus: 0 },
    "1": { min: 1, max: 1, count: 0, bonus: 0 },
    "2": { min: 2, max: 2, count: 0, bonus: 0 },
    "1d6": { min: 1, max: 6, count: 1, bonus: 0 },
    "2d6": { min: 1, max: 6, count: 2, bonus: 0 },
};