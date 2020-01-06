import { MeleeAttack } from "../model/attack";

export const meleeBtmDamageBonus = [
    // Very weak
    -2,
    -2, -2,
    // Weak
    -1, -1,
    // Average
    0, 0, 0,
    // Strong
    1, 1,
    // Very strong
    2, 2,
    4, 4,
    6, 6,
    8, 8, 8, 8, 8, 8
]


export const meleeAttackList: MeleeAttack[] = [
    {
        id: "strike",
        name: "Strike",
        description: "Cause Weapon Damage + Damage modifier"
    },
    {
        id: "block",
        name: "Block / Parry",
        description: "Stop Damage"
    },
    {
        id: "disarm",
        name: "Disarm",
        description: "On successful roll, remove weapon from opponent hands"
    }
]

export const martialAttackList: MeleeAttack[] = [
    {
        id: "strike",
        name: "Strike",
        description: "Cause 1d6/2 Damage + Damage modifier"
    },
    {
        id: "kick",
        name: "Kick",
        description: "Cause 1d6 Damage + Damage modifier"
    },
    {
        id: "block",
        name: "Block / Parry",
        description: "Stop Damage"
    },
    {
        id: "dodge",
        name: "Dodge",
        description: "-2 to attacker hit roll"
    },
    {
        id: "disarm",
        name: "Disarm",
        description: "On successful roll, remove weapon from opponent hands"
    },
    {
        id: "throw",
        name: "Throw",
        description: "Requires a grapple first. Opponent is knocked to the ground taking 1d6 + damage modifier, plus making a stun roll at -2."
    },
    {
        id: "hold",
        name: "Hold",
        description: "A painful joint or body hold. You must grapple your opponent first. Foe is immobilised until an escape is made."
    },
    {
        id: "escape",
        name: "Escape",
        description: "On success, you are free from hold."
    },
    {
        id: "choke",
        name: "Choke",
        description: "Requires hold or grapple. Opponent takes 1d6 damage per turn."
    },
    {
        id: "sweep",
        name: "Sweep / Trip",
        description: "Know opponent to the ground. He has -2 on next attack. You gain +2 on next attack."
    },
    {
        id: "grapple",
        name: "Grapple",
        description: "A grabbing prerequisite to do other attacks."
    },
];

export const martialArtBonus = {
    brawling: {},
    karate: {
        strike: 2,
        kick: 2,
        block: 2
    },
    judo: {
        dodge: 1,
        throw: 3,
        hold: 2,
        escape: 2,
        sweep: 2,
        grapple: 2
    },
    boxing: {
        strike: 3,
        block: 3,
        dodge: 1
    },
    thaiBoxing: {
        strike: 3,
        kick: 3,
        block: 2,
        grapple: 1
    },
    choiLiFut: {
        strike: 2,
        kick: 2,
        block: 2,
        dodge: 1,
        throw: 1,
        sweep: 2
    },
    aikido: {
        block: 4,
        dodge: 3,
        throw: 3,
        hold: 3,
        escape: 3,
        choke: 1,
        sweep: 3,
        grapple: 2
    },
    animaKungFu: {
        strike: 2,
        kick: 2,
        block: 2,
        sweep: 1
    },
    taeKwonDo: {
        strike: 3,
        kick: 3,
        block: 2,
        dodge: 1,
        sweep: 2
    },
    savate: {
        kick: 4,
        block: 1,
        dodge: 1
    },
    wrestling: {
        throw: 3,
        hold: 4,
        escape: 4,
        choke: 2,
        sweep: 2,
        grapple: 4
    },
    capoeira: {
        strike: 1,
        kick: 2,
        block: 2,
        dodge: 2,
        sweep: 3
    }
};


export const typeSkillMap = {
    pistol: "handgun",
    submachinegun: "submachinegun",
    rifle: "rifle",
    shotgun: "shotgun",
    heavyWeapon: "heavyWeapon",
    exotic: "exotic",
    melee: "melee"
};

export const modifiersList = [
    {
        id: "fast",
        label: "Fast Draw",
        bonus: -3
    },
    {
        id: "immobile",
        label: "Target Immobile",
        bonus: 4
    },
    {
        id: "ambush",
        label: "Ambush",
        bonus: 5
    },
    {
        id: "mov10",
        label: "Moving Target REF > 10",
        bonus: -3
    },
    {
        id: "mov12",
        label: "Moving Target REF > 12",
        bonus: -4
    },
    {
        id: "mov14",
        label: "Moving Target REF > 14",
        bonus: -5
    },
    {
        id: "bodyPart",
        label: "Aimed at body part",
        bonus: -4
    },
    {
        id: "ricochet",
        label: "Ricochet",
        bonus: -5
    },
    {
        id: "blinded",
        label: "Blinded by light or dust",
        bonus: -3
    },
    {
        id: "silhoutted",
        label: "Target Silhoutted",
        bonus: 2
    },
    {
        id: "turning",
        label: "Turning to face target",
        bonus: -2
    },
    {
        id: "2weapon",
        label: "Using 2 weapons",
        bonus: -3
    },
    {
        id: "running",
        label: "Firing while running",
        bonus: -3
    },
    {
        id: "shoulder",
        label: "Firing shoulder arms from hip",
        bonus: -2
    },
    {
        id: "turret",
        label: "Turret mounted weapon",
        bonus: 2
    },
    {
        id: "vehicle",
        label: "Vehicle mounted",
        bonus: -4
    },
    {
        id: "large",
        label: "Large Target",
        bonus: 4
    },
    {
        id: "small",
        label: "Small Target",
        bonus: -4
    },
    {
        id: "tiny",
        label: "Tiny Target",
        bonus: -6
    },
    {
        id: "laserSight",
        label: "Laser Sight",
        bonus: 1
    },
    {
        id: "targetingScope",
        label: "Targeting Scope",
        bonus: 1
    },
    {
        id: "smartgun",
        label: "Smartgun",
        bonus: 2
    },
    {
        id: "smartgoggles",
        label: "Smartgoggles",
        bonus: 2
    },
];

export const bodyPartList = ["", "Head", "Torso", "Torso", "Torso", "Right Arm", "Left Arm",
    "Right Leg", "Right Leg", "Left Leg", "Left Leg"];