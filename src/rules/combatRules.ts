import { Weapon } from "../model/gear";

export function weaponMalfunctions(weapon: Weapon, fumble: number) {
    if (weapon.reliability === "vr") {
        return fumble <= 3;
    } else if (weapon.reliability === "st") {
        return fumble <= 5;
    } else if (weapon.reliability === "ur") {
        return fumble <= 8;
    }
}

export function getFumbleLabel(weapon: Weapon, fumble: number): string {
    const malfunction = weaponMalfunctions(weapon, fumble);
    if (weapon.rateOfFire > 2) {
        return malfunction ? "The weapon is jammed. It takes 1d6 rounds to fix it." : "No Fumble";
    }
    if (fumble <= 4) {
        return "No fumble. You just screw up.";
    }
    if (fumble === 5) {
        return "You drop your weapon.";
    }
    if (fumble === 6) {
        return malfunction ? "The weapon fires and hits something harmless" : "No fumble";
    }
    if (fumble === 7) {
        return malfunction ? "The weapon jams (1d6 rounds to fix it) or imbeds in the ground" : "No fumble";
    }
    if (fumble === 8) {
        return "You manage to hurt yourself. Roll a body part and apply the damage!";
    }
    return "You hit a member of your party!";
}

export function calculateFinalDamage(damage: number, armor: number, cover: number, btm: number, bulletType: string, bodyPart: number) {
    let result = damage;

    // We apply the cover
    result = result - cover;

    // We apply the armor
    if (bulletType === "armor-piercing") {

        // piercing bullets do half damage but they ignore half armor
        result = damage - Math.floor(armor / 2);
        result = result / 2;
    } else {
        result = damage - armor;
    }

    if (result <= 0) {
        return 0;
    }

    // Head shot x2 damage
    if (bodyPart === 1) {
        result = result * 2;
    }

    // we apply the btm (min 1)
    result = Math.max(result - btm, 1);

    return result;
}