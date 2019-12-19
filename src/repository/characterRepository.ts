import { CharacterSkills } from "../model/character";
import { specialSkillsDetails, SkillDetail } from "../model/skills";

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
    const specialSkill: SkillDetail = specialSkillsDetails.find(s => s.special === role)!!;
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
    const specialSkill: SkillDetail = specialSkillsDetails.find(s => s.special === role)!!;
    const specialSkillValue = skills[specialSkill.id] || 0;

    const cashKey = specialSkillValue < 5 ? 0 : specialSkillValue - 5;
    return roleJobTitle[role][cashKey];
}