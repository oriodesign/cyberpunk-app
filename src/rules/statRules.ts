import { CharacterStatistics, DerivedStats } from '../model/character';

export const deriveStats = (s: CharacterStatistics): DerivedStats => {
    const btm = [0, 0, 0, -1, -1, -2, -2, -3, -3, -4, -4, 5];

    return {
        run: s.movementAllowance * 3,
        leap: Math.round(s.movementAllowance * 3 / 4),
        humanity: s.empathy * 10,
        saveNumber: s.bodyType,
        bodyTypeModifier: btm[s.bodyType],
        carry: s.bodyType * 10,
        lift: s.bodyType * 40,
        initiative: s.reflexes
    };
}
