import { CharacterSkills, Character } from "../model/character";
import { SkillDetail } from "../model/skills";
import { Weapon, Armor } from "../model/gear";
import { specialSkillsDetails } from "../data/skillData";
import { allItemsById } from "../data/gearData";

export const roleCash: { [id: string]: number[] } = {
    rockerboy: [1000, 1500, 2000, 5000, 8000, 12000],
    solo: [2000, 3000, 4500, 7000, 9000, 12000],
    cop: [1000, 1200, 3000, 5000, 7000, 9000, 12000],
    corporate: [1500, 3000, 5000, 7000, 9000, 12000],
    media: [1000, 1200, 3000, 5000, 7000, 10000],
    fixer: [1500, 3000, 5000, 7000, 8000, 10000],
    techie: [1000, 2000, 3000, 4000, 5000, 8000],
    medtechie: [1600, 3000, 5000, 7000, 10000, 15000],
    netrunner: [1000, 2000, 3000, 5000, 7000, 10000],
    nomad: [1000, 1500, 2000, 3000, 4000, 5000],
};

export function getStartingCash(role: string, skills: CharacterSkills): number {
    const specialSkill: SkillDetail = specialSkillsDetails.find(s => s.special === role)!! as any;
    const specialSkillValue = skills[specialSkill.id] || 0;

    const cashKey = specialSkillValue < 5 ? 0 : specialSkillValue - 5;
    return roleCash[role][cashKey];
}

export const roleJobTitle: { [id: string]: string[] } = {
    rockerboy: ["Desparate for gigs", "Regular Club Jobs", "Play the big Clubs", "You've got a contract", "Concert Band", "Major Act"],
    solo: ["Street Ronin", "Private enforcer", "Corporate muscle", "Professional Operative", "Major League Hitter", "Solo Elite"],
    cop: ["Private Guard", "City Cop", "Detective", "Corporate Security", "Enforcement team leader", "Security Head / Police Chief"],
    corporate: ["Assistant", "Manager", "Junior Executive", "Executive", "Department Head", "Division Head"],
    media: ["Stringer reporter", "Staff Reporter", "Section Editor", "Producer / Managing Editor", "Local Media Personality", "National Media Personality"],
    fixer: ["Street Punk", "Gang Leader", "Enforcer", "Sub-Liutenant", "Liutenant", "Crime Boss"],
    techie: ["Local fixit man", "Private operator", "Corporate tech", "Jr. Engineer", "Engineer", "Sr Engineer"],
    netrunner: ["Weefle Runner", "Hacker", "Bit Jockey", "Net Cowboy", "Deckslinger", "Sysop"],
    medtechie: ["Patchman", "Medical Technician", "RipperDoc", "Trauma Team Medic", "General Practicioner", "Specialist Physician"],
    nomad: ["Clanmember", "Warrior", "Head of Household", "Scout", "Clan Senior", "Family Head"]
};

export function getStartingJobTitle(role: string, skills: CharacterSkills): string {
    const specialSkill: SkillDetail = specialSkillsDetails.find(s => s.special === role)!! as any;
    const specialSkillValue = skills[specialSkill.id] || 0;

    const cashKey = specialSkillValue < 5 ? 0 : specialSkillValue - 5;
    return roleJobTitle[role][cashKey];
}

type CharacterWeapon = {
    id: string;
    weapon: Weapon;
};

type CharacterArmor = {
    id: string;
    armor: Armor;
};

export function getWeapons(character: Partial<Character>): CharacterWeapon[] {
    const inventory = character.inventory;

    if (!inventory) {
        return [];
    }

    return inventory
        .map(i => ({ weapon: allItemsById[i.itemId], id: i.id }))
        .filter(i => !!(i.weapon as Weapon).damage) as CharacterWeapon[];
}

export function getArmors(character: Partial<Character>): CharacterArmor[] {
    const inventory = character.inventory;
    if (!inventory) {
        return [];
    }

    return inventory
        .map(i => ({ armor: allItemsById[i.itemId], id: i.id }))
        .filter(i => !!(i.armor as Armor).stoppingPower) as CharacterArmor[];
}

const encumberanceMalus = [0, 0, 1, 3];

export function getArmorEncumberance(character: Partial<Character>): number {
    const armors = getArmors(character);
    const malus = encumberanceMalus[armors.length];
    return armors.reduce((acc, curr) => acc + curr.armor.encumbrance, malus);
}

const spDiffMap = [
    5, 5, 5, 5, 5, 4, 4, 4, 4, 3,
    3, 3, 3, 3, 3, 2, 2, 2, 2, 2,
    2, 1, 1, 1, 1, 1, 1]

function getStoppingPowerForPart(armors: CharacterArmor[], part: string): number {
    const layers = armors.filter(a => a.armor.covers.includes(part))
        .sort((a, b) => a.armor.stoppingPower > b.armor.stoppingPower ? -1 : 1);

    if (layers.length === 0) {
        return 0;
    }

    let stoppingPower = layers[0].armor.stoppingPower;

    if (layers.length > 1) {
        const secondLayerBonus = spDiffMap[layers[0].armor.stoppingPower - layers[1].armor.stoppingPower];
        stoppingPower = stoppingPower + secondLayerBonus;
    }
    if (layers.length > 2) {
        const thirdLayerBonus = spDiffMap[layers[1].armor.stoppingPower - layers[2].armor.stoppingPower];
        stoppingPower = stoppingPower + thirdLayerBonus;
    }

    return stoppingPower;
}

export function getArmorStoppingPower(character: Partial<Character>) {
    const armors = getArmors(character);
    return {
        head: getStoppingPowerForPart(armors, "head"),
        torso: getStoppingPowerForPart(armors, "torso"),
        leftArm: getStoppingPowerForPart(armors, "arms"),
        rightArm: getStoppingPowerForPart(armors, "arms"),
        leftLeg: getStoppingPowerForPart(armors, "legs"),
        rightLeg: getStoppingPowerForPart(armors, "legs"),
    }
}

export function getAllCharacterCyber(character: Partial<Character>) {
    return Object.keys(character.cyberware!!).reduce((acc, curr) => {
        return [...acc, ...(character.cyberware as any)[curr]];
    }, [] as any)
}

export function getTotalGearWeight(character: Partial<Character>): number {
    if (!character.inventory) {
        return 0;
    }

    const result = character.inventory
        .filter(i => !i.stash)
        .reduce((acc, curr) => acc + (allItemsById[curr.itemId] as any).weight || 0, 0);

    return Math.round(result);
}

export function applyModifiers(character: Partial<Character>): Partial<Character> {

    if (!character.statistics) {
        return character;
    }
    const stats = character.statistics;
    const armorEncumbrance = getArmorEncumberance(character);


    return {
        ...character,
        statistics: {
            ...stats,
            reflexes: stats.reflexes - armorEncumbrance,
            empathy: Math.ceil(character.humanity!! / 10)
        }
    };
}
