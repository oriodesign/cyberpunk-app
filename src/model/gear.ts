

type WeaponType = "pistol" | "submachinegun" | "rifle" | "shotgun" | "heavyWeapon" | "exotic" | "melee";
type WeaponConcealability = "p" | "j" | "l" | "n";
type WeaponAvailability = "e" | "c" | "p" | "r";
type Ammo = "5mm" | "6mm" | "9mm" | "10mm" | "11mm" | "12mm" | "20mm" | "5.56" | "7.62" | "00" | "";
type WeaponReliability = "vr" | "st" | "ur" | "";
type WeaponCategory =
    "Light Autopistol" | "Medium Autopistol" | "Heavy Autopistol" | "Very Heavy Autopistol" |
    "Light Submachinegun" | "Medium Submachinegun" | "Heavy Submachinegun" |
    "Assault Rifles" | "Shotgun" | "Heavy Weapon" | "Exotic Weapon" | "Melee Weapon";


type ItemType = "fashion" | "tool" | "personalElectronic" | "dataSystem" |
    "communication" | "surveillance" | "entertainment" | "security" |
    "medical" | "furnishing" | "vehicle" | "lifestyle" | "grocery" | "housing";

export type GearType = ItemType | WeaponType | "ammo" | "armor";

export type Item = {
    id: string;
    name: string;
    description?: string;
    cost: number;
    type: GearType;
};

export type Weapon = {
    id: string;
    category: WeaponCategory;
    name: string;
    description: string;
    type: WeaponType;
    accuracy: number;
    concealability: WeaponConcealability;
    availability: WeaponAvailability;
    damage: string;
    ammo: Ammo;
    shots: number;
    rateOfFire: number;
    reliability: WeaponReliability;
    range: number;
    cost: number;
};

export const pistols: Weapon[] = [
    {
        id: "p1",
        name: "BudgetArms C-13",
        description: "",
        category: "Light Autopistol",
        type: "pistol",
        accuracy: -1,
        concealability: "p",
        availability: "e",
        damage: "1d6",
        ammo: "5mm",
        shots: 8,
        rateOfFire: 2,
        reliability: "st",
        range: 50,
        cost: 75
    },
    {
        id: "p2",
        name: "Dai Lung Cybermag 15",
        description: "",
        category: "Light Autopistol",
        type: "pistol",
        accuracy: -1,
        concealability: "p",
        availability: "c",
        damage: "1d6+1",
        ammo: "6mm",
        shots: 10,
        rateOfFire: 2,
        reliability: "ur",
        range: 50,
        cost: 50
    },
    {
        id: "p3",
        name: "Federated Arms X-22",
        description: "",
        category: "Light Autopistol",
        type: "pistol",
        accuracy: 0,
        concealability: "p",
        availability: "e",
        damage: "1d6+1",
        ammo: "6mm",
        shots: 10,
        rateOfFire: 2,
        reliability: "st",
        range: 50,
        cost: 150
    },
    {
        id: "p4",
        name: "Militech Arms Avenger",
        description: "",
        category: "Medium Autopistol",
        type: "pistol",
        accuracy: 0,
        concealability: "j",
        availability: "e",
        damage: "2d6+1",
        ammo: "9mm",
        shots: 10,
        rateOfFire: 2,
        reliability: "vr",
        range: 50,
        cost: 250
    },
    {
        id: "p5",
        name: "Dai Lung Streetmaster",
        description: "",
        category: "Medium Autopistol",
        type: "pistol",
        accuracy: 0,
        concealability: "j",
        availability: "e",
        damage: "2d6+3",
        ammo: "10mm",
        shots: 12,
        rateOfFire: 2,
        reliability: "ur",
        range: 50,
        cost: 250
    },
    {
        id: "p6",
        name: "Federated Arms X-9mm",
        description: "",
        category: "Medium Autopistol",
        type: "pistol",
        accuracy: 0,
        concealability: "j",
        availability: "e",
        damage: "2d6+1",
        ammo: "9mm",
        shots: 12,
        rateOfFire: 2,
        reliability: "st",
        range: 50,
        cost: 300
    },
    {
        id: "p7",
        name: "BudgetArms Auto 3",
        description: "",
        category: "Heavy Autopistol",
        type: "pistol",
        accuracy: -1,
        concealability: "j",
        availability: "e",
        damage: "3d6",
        ammo: "11mm",
        shots: 8,
        rateOfFire: 2,
        reliability: "ur",
        range: 50,
        cost: 350
    },
    {
        id: "p8",
        name: "Sternmeyer Type 35",
        description: "",
        category: "Heavy Autopistol",
        type: "pistol",
        accuracy: 0,
        concealability: "j",
        availability: "c",
        damage: "3d6",
        ammo: "11mm",
        shots: 8,
        rateOfFire: 2,
        reliability: "vr",
        range: 50,
        cost: 400
    },
    {
        id: "p9",
        name: "Armalite 44",
        description: "",
        category: "Very Heavy Autopistol",
        type: "pistol",
        accuracy: 0,
        concealability: "j",
        availability: "e",
        damage: "4d6+1",
        ammo: "12mm",
        shots: 8,
        rateOfFire: 1,
        reliability: "st",
        range: 50,
        cost: 450
    },
    {
        id: "p10",
        name: "Colt AMT Model 2000",
        description: "",
        category: "Very Heavy Autopistol",
        type: "pistol",
        accuracy: 0,
        concealability: "j",
        availability: "c",
        damage: "4d6+1",
        ammo: "12mm",
        shots: 8,
        rateOfFire: 1,
        reliability: "vr",
        range: 50,
        cost: 500
    }
];

export const machineguns: Weapon[] = [
    {
        id: "m1",
        name: "Uzi Miniauto 9",
        description: "",
        category: "Light Submachinegun",
        type: "submachinegun",
        accuracy: 1,
        concealability: "j",
        availability: "e",
        damage: "2d6+1",
        ammo: "9mm",
        shots: 30,
        rateOfFire: 35,
        reliability: "vr",
        range: 150,
        cost: 475
    },
    {
        id: "m2",
        name: "H&K MP-2013",
        description: "",
        category: "Light Submachinegun",
        type: "submachinegun",
        accuracy: 1,
        concealability: "j",
        availability: "c",
        damage: "2d6+3",
        ammo: "10mm",
        shots: 35,
        rateOfFire: 32,
        reliability: "st",
        range: 150,
        cost: 450
    },
    {
        id: "m3",
        name: "Fed Arms Tech Assault II",
        description: "",
        category: "Light Submachinegun",
        type: "submachinegun",
        accuracy: 1,
        concealability: "j",
        availability: "c",
        damage: "1d6+1",
        ammo: "6mm",
        shots: 50,
        rateOfFire: 25,
        reliability: "st",
        range: 150,
        cost: 400
    },
    {
        id: "m4",
        name: "Arasaka Minami 10",
        description: "",
        category: "Medium Submachinegun",
        type: "submachinegun",
        accuracy: 0,
        concealability: "j",
        availability: "e",
        damage: "2d6+3",
        ammo: "10mm",
        shots: 40,
        rateOfFire: 20,
        reliability: "vr",
        range: 200,
        cost: 500
    },
    {
        id: "m5",
        name: "H&K MPK-9",
        description: "",
        category: "Medium Submachinegun",
        type: "submachinegun",
        accuracy: 1,
        concealability: "j",
        availability: "c",
        damage: "2d6+1",
        ammo: "9mm",
        shots: 35,
        rateOfFire: 25,
        reliability: "st",
        range: 200,
        cost: 520
    },
    {
        id: "m6",
        name: "Sternmeyer SMG 21",
        description: "",
        category: "Heavy Submachinegun",
        type: "submachinegun",
        accuracy: -1,
        concealability: "l",
        availability: "e",
        damage: "3d6",
        ammo: "11mm",
        shots: 30,
        rateOfFire: 15,
        reliability: "vr",
        range: 200,
        cost: 500
    },
    {
        id: "m7",
        name: "H&K MPK-11",
        description: "",
        category: "Heavy Submachinegun",
        type: "submachinegun",
        accuracy: 0,
        concealability: "l",
        availability: "c",
        damage: "4d6+1",
        ammo: "12mm",
        shots: 30,
        rateOfFire: 20,
        reliability: "st",
        range: 200,
        cost: 700
    },
    {
        id: "m8",
        name: "Ingram MAC 14",
        description: "",
        category: "Heavy Submachinegun",
        type: "submachinegun",
        accuracy: -2,
        concealability: "l",
        availability: "e",
        damage: "4d6+1",
        ammo: "12mm",
        shots: 20,
        rateOfFire: 10,
        reliability: "st",
        range: 200,
        cost: 650
    }
];

export const rifles: Weapon[] = [
    {
        id: "r1",
        name: "Militech Ronin Light Assault",
        description: "",
        category: "Assault Rifles",
        type: "rifle",
        accuracy: 1,
        concealability: "n",
        availability: "c",
        damage: "5d6",
        ammo: "5.56",
        shots: 35,
        rateOfFire: 30,
        reliability: "vr",
        range: 400,
        cost: 450
    },
    {
        id: "r2",
        name: "AKR-20 Medium Assault",
        description: "",
        category: "Assault Rifles",
        type: "rifle",
        accuracy: 0,
        concealability: "n",
        availability: "c",
        damage: "5d6",
        ammo: "5.56",
        shots: 30,
        rateOfFire: 30,
        reliability: "st",
        range: 400,
        cost: 500
    },
    {
        id: "r3",
        name: "FN-RAL Heavy Assault Rifle",
        description: "",
        category: "Assault Rifles",
        type: "rifle",
        accuracy: -1,
        concealability: "n",
        availability: "c",
        damage: "6d6+2",
        ammo: "7.62",
        shots: 30,
        rateOfFire: 30,
        reliability: "vr",
        range: 400,
        cost: 600
    },
    {
        id: "r4",
        name: "Kalashnikov A-80 Heavy Rifle",
        description: "",
        category: "Assault Rifles",
        type: "rifle",
        accuracy: -1,
        concealability: "n",
        availability: "e",
        damage: "6d6+2",
        ammo: "7.62",
        shots: 35,
        rateOfFire: 25,
        reliability: "st",
        range: 400,
        cost: 550
    }
];

export const shotguns: Weapon[] = [
    {
        id: "s1",
        name: "Arasaka Rapid Assault 12",
        description: "",
        category: "Shotgun",
        type: "shotgun",
        accuracy: -1,
        concealability: "n",
        availability: "c",
        damage: "4d6",
        ammo: "00",
        shots: 20,
        rateOfFire: 10,
        reliability: "st",
        range: 50,
        cost: 900
    },
    {
        id: "s2",
        name: "Sternmeyer Stakeout 10",
        description: "",
        category: "Shotgun",
        type: "shotgun",
        accuracy: -2,
        concealability: "n",
        availability: "r",
        damage: "4d6",
        ammo: "00",
        shots: 10,
        rateOfFire: 2,
        reliability: "st",
        range: 50,
        cost: 450
    }
];

export const heavyWeapons: Weapon[] = [
    {
        id: "h1",
        name: "Barrett-Arasaka Light 20mm",
        description: "",
        category: "Heavy Weapon",
        type: "heavyWeapon",
        accuracy: 0,
        concealability: "n",
        availability: "r",
        damage: "4d10",
        ammo: "20mm",
        shots: 10,
        rateOfFire: 1,
        reliability: "vr",
        range: 450,
        cost: 2000
    },
    {
        id: "h2",
        name: "Scorpion 16 Missile Launcher",
        description: "",
        category: "Heavy Weapon",
        type: "heavyWeapon",
        accuracy: -1,
        concealability: "n",
        availability: "r",
        damage: "7d10",
        ammo: "",
        shots: 1,
        rateOfFire: 1,
        reliability: "vr",
        range: 1000,
        cost: 3000
    },
    {
        id: "h3",
        name: "Militech Arms RPG-A",
        description: "",
        category: "Heavy Weapon",
        type: "heavyWeapon",
        accuracy: -1,
        concealability: "n",
        availability: "r",
        damage: "6d10",
        ammo: "",
        shots: 1,
        rateOfFire: 1,
        reliability: "vr",
        range: 750,
        cost: 1500
    },
    {
        id: "h4",
        name: "C6 Plastic Explosive 1kg",
        description: "",
        category: "Heavy Weapon",
        type: "heavyWeapon",
        accuracy: -1,
        concealability: "p",
        availability: "p",
        damage: "8d10",
        ammo: "",
        shots: 1,
        rateOfFire: 1,
        reliability: "vr",
        range: 0,
        cost: 100
    },
    {
        id: "h5",
        name: "Mine",
        description: "",
        category: "Heavy Weapon",
        type: "heavyWeapon",
        accuracy: 0,
        concealability: "j",
        availability: "p",
        damage: "4d10",
        ammo: "",
        shots: 1,
        rateOfFire: 1,
        reliability: "vr",
        range: 0,
        cost: 350
    },
    {
        id: "h6",
        name: "K-A F-253 Flamethrower",
        description: "",
        category: "Heavy Weapon",
        type: "heavyWeapon",
        accuracy: 0,
        concealability: "n",
        availability: "r",
        damage: "2d10",
        ammo: "",
        shots: 1,
        rateOfFire: 1,
        reliability: "st",
        range: 50,
        cost: 1500
    },
    {
        id: "h7",
        name: "Fragmentation Granade",
        description: "",
        category: "Heavy Weapon",
        type: "heavyWeapon",
        accuracy: 0,
        concealability: "p",
        availability: "p",
        damage: "7d10",
        ammo: "",
        shots: 1,
        rateOfFire: 1,
        reliability: "vr",
        range: 0,
        cost: 30
    },
    {
        id: "h8",
        name: "Incendiary Granade",
        description: "",
        category: "Heavy Weapon",
        type: "heavyWeapon",
        accuracy: 0,
        concealability: "p",
        availability: "p",
        damage: "4d6 for 6 turns",
        ammo: "",
        shots: 1,
        rateOfFire: 1,
        reliability: "vr",
        range: 0,
        cost: 30
    },
    {
        id: "h9",
        name: "Stun Granade",
        description: "",
        category: "Heavy Weapon",
        type: "heavyWeapon",
        accuracy: 0,
        concealability: "p",
        availability: "p",
        damage: "-5 to stun",
        ammo: "",
        shots: 1,
        rateOfFire: 1,
        reliability: "vr",
        range: 0,
        cost: 30
    },
    {
        id: "h10",
        name: "Dazzle Granade",
        description: "",
        category: "Heavy Weapon",
        type: "heavyWeapon",
        accuracy: 0,
        concealability: "p",
        availability: "p",
        damage: "blind for 4 turns",
        ammo: "",
        shots: 1,
        rateOfFire: 1,
        reliability: "vr",
        range: 0,
        cost: 30
    },
    {
        id: "h11",
        name: "Sonic Granade",
        description: "",
        category: "Heavy Weapon",
        type: "heavyWeapon",
        accuracy: 0,
        concealability: "p",
        availability: "p",
        damage: "deafened for 4 turns",
        ammo: "",
        shots: 1,
        rateOfFire: 1,
        reliability: "vr",
        range: 0,
        cost: 30
    },
    {
        id: "h12",
        name: "Granade Launcher",
        description: "",
        category: "Heavy Weapon",
        type: "heavyWeapon",
        accuracy: 0,
        concealability: "l",
        availability: "r",
        damage: "",
        ammo: "",
        shots: 1,
        rateOfFire: 1,
        reliability: "vr",
        range: 225,
        cost: 150
    }

];

export const exoticWeapons: Weapon[] = [
    {
        id: "e1",
        name: "Techtronica 15 Microwaver",
        description: "",
        category: "Exotic Weapon",
        type: "pistol",
        accuracy: 0,
        concealability: "j",
        availability: "p",
        damage: "1d6",
        ammo: "",
        shots: 10,
        rateOfFire: 2,
        reliability: "vr",
        range: 20,
        cost: 400
    },
    {
        id: "e2",
        name: "Militech Electronic LaserCannon",
        description: "",
        category: "Exotic Weapon",
        type: "rifle",
        accuracy: 0,
        concealability: "n",
        availability: "r",
        damage: "1-5d6",
        ammo: "",
        shots: 10,
        rateOfFire: 2,
        reliability: "ur",
        range: 200,
        cost: 8000
    },
    {
        id: "e3",
        name: "Avante P-1135 Needlegun",
        description: "",
        category: "Exotic Weapon",
        type: "pistol",
        accuracy: 0,
        concealability: "p",
        availability: "p",
        damage: "drugs",
        ammo: "",
        shots: 15,
        rateOfFire: 2,
        reliability: "st",
        range: 40,
        cost: 200
    },
    {
        id: "e4",
        name: "Enertex AKM Power Squirt",
        description: "",
        category: "Exotic Weapon",
        type: "pistol",
        accuracy: -2,
        concealability: "j",
        availability: "c",
        damage: "drugs",
        ammo: "",
        shots: 50,
        rateOfFire: 1,
        reliability: "vr",
        range: 10,
        cost: 15
    },
    {
        id: "e5",
        name: "Nelspot Wombat",
        description: "",
        category: "Exotic Weapon",
        type: "pistol",
        accuracy: -1,
        concealability: "j",
        availability: "c",
        damage: "drugs",
        ammo: "",
        shots: 20,
        rateOfFire: 2,
        reliability: "ur",
        range: 40,
        cost: 200
    },
    {
        id: "e6",
        name: "Militech Electronic Taser",
        description: "",
        category: "Exotic Weapon",
        type: "pistol",
        accuracy: -1,
        concealability: "j",
        availability: "c",
        damage: "stun",
        ammo: "",
        shots: 10,
        rateOfFire: 1,
        reliability: "st",
        range: 10,
        cost: 60
    },
    {
        id: "e7",
        name: "EagleTech Tomcat C-Bow",
        description: "",
        category: "Exotic Weapon",
        type: "exotic",
        accuracy: 0,
        concealability: "n",
        availability: "c",
        damage: "4d6",
        ammo: "",
        shots: 12,
        rateOfFire: 1,
        reliability: "vr",
        range: 150,
        cost: 150
    },
    {
        id: "e8",
        name: "EagleTech Striker X-Bow",
        description: "",
        category: "Exotic Weapon",
        type: "exotic",
        accuracy: -1,
        concealability: "n",
        availability: "c",
        damage: "3d6+3",
        ammo: "",
        shots: 12,
        rateOfFire: 1,
        reliability: "vr",
        range: 50,
        cost: 220
    }
];

export const meleeWeapons: Weapon[] = [
    {
        id: "m1",
        name: "Kendachi Monoknife",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: +1,
        concealability: "p",
        availability: "p",
        damage: "2d6",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "vr",
        range: 1,
        cost: 200
    },
    {
        id: "m2",
        name: "Kendachi Monokatana",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: +1,
        concealability: "n",
        availability: "r",
        damage: "4d6",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "vr",
        range: 1,
        cost: 600
    },
    {
        id: "m3",
        name: "SPM-1 Battleglove",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: -2,
        concealability: "n",
        availability: "p",
        damage: "3d6",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "vr",
        range: 1,
        cost: 900
    },
    {
        id: "m4",
        name: "Club",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: 0,
        concealability: "l",
        availability: "c",
        damage: "1d6",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "",
        range: 1,
        cost: 0
    },
    {
        id: "m5",
        name: "Knife",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: 0,
        concealability: "p",
        availability: "c",
        damage: "1d6",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "",
        range: 1,
        cost: 20
    },
    {
        id: "m6",
        name: "Sword",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: 0,
        concealability: "n",
        availability: "c",
        damage: "2d6+2",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "",
        range: 1,
        cost: 200
    },
    {
        id: "m7",
        name: "Axe",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: -1,
        concealability: "n",
        availability: "c",
        damage: "2d6+3",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "",
        range: 1,
        cost: 20
    },
    {
        id: "m8",
        name: "Nunchaku/Tonfa",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: 0,
        concealability: "l",
        availability: "c",
        damage: "3d6",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "",
        range: 1,
        cost: 15
    },
    {
        id: "m9",
        name: "Naginata",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: 0,
        concealability: "n",
        availability: "p",
        damage: "3d6",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "",
        range: 2,
        cost: 100
    },
    {
        id: "m10",
        name: "Shuriken",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: 0,
        concealability: "p",
        availability: "c",
        damage: "1d6/3",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "",
        range: 0,
        cost: 3
    },
    {
        id: "m11",
        name: "Switchblade",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: 0,
        concealability: "p",
        availability: "c",
        damage: "1d6/2",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "",
        range: 1,
        cost: 15
    },
    {
        id: "m12",
        name: "Brass Knuckles",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: 0,
        concealability: "p",
        availability: "c",
        damage: "1d6+2",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "",
        range: 1,
        cost: 10
    },
    {
        id: "m13",
        name: "Sledgehammer",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: -1,
        concealability: "n",
        availability: "c",
        damage: "4d6",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "",
        range: 1,
        cost: 20
    },
    {
        id: "m14",
        name: "Chainsaw",
        description: "",
        category: "Melee Weapon",
        type: "melee",
        accuracy: -3,
        concealability: "n",
        availability: "c",
        damage: "4d6",
        ammo: "",
        shots: 0,
        rateOfFire: 0,
        reliability: "",
        range: 2,
        cost: 80
    }
];



export const ammoList: Item[] = [
    {
        id: "ammo1",
        name: "box of 100 for light pistol/submachinegun",
        cost: 15
    },
    {
        id: "ammo2",
        name: "box of 50 for medium pistol/submachinegun",
        cost: 15
    },
    {
        id: "ammo3",
        name: "box of 50 for heavy pistol/submachinegun",
        cost: 18
    },
    {
        id: "ammo4",
        name: "box of 50 for very heavy pistol",
        cost: 20
    },
    {
        id: "ammo5",
        name: "box of 100 for assault rifle",
        cost: 40
    },
    {
        id: "ammo6",
        name: "box of 12 for shotgun",
        cost: 15
    },
    {
        id: "ammo7",
        name: "20mm cannon round",
        cost: 25
    },
    {
        id: "ammo8",
        name: "12 arrows",
        cost: 24
    },
    {
        id: "ammo9",
        name: "12 crossbow bolts",
        cost: 24
    },
    {
        id: "ammo10",
        name: "100 airgun pellets",
        cost: 6
    },
    {
        id: "ammo11",
        name: "50 needlegun rounds",
        cost: 6
    }
].map(i => ({ ...i, type: "ammo" }));

export type BodyPart = string;

export type Armor = {
    id: string;
    name: string;
    covers: BodyPart[],
    stoppingPower: number;
    encumbrance: number;
    cost: number;
    type: GearType;
};

export const armors: Armor[] = [
    {
        id: "arm-1",
        name: "Heavy Leather",
        covers: ["arms", "torso", "legs"],
        stoppingPower: 4,
        encumbrance: 0,
        cost: 50
    },
    {
        id: "arm-2",
        name: "Kevlar t-shirt / vest",
        covers: ["torso"],
        stoppingPower: 10,
        encumbrance: 0,
        cost: 90
    },
    {
        id: "arm-3",
        name: "steel helmet",
        covers: ["head"],
        stoppingPower: 14,
        encumbrance: 0,
        cost: 20
    },
    {
        id: "arm-4",
        name: "Light armor jacket",
        covers: ["torso", "arms"],
        stoppingPower: 14,
        encumbrance: 0,
        cost: 150
    },
    {
        id: "arm-5",
        name: "Medium armor jacket",
        covers: ["torso", "arms"],
        stoppingPower: 18,
        encumbrance: 1,
        cost: 200
    },
    {
        id: "arm-6",
        name: "Flack vest",
        covers: ["torso"],
        stoppingPower: 20,
        encumbrance: 1,
        cost: 200
    },
    {
        id: "arm-7",
        name: "Flack pants",
        covers: ["legs"],
        stoppingPower: 20,
        encumbrance: 1,
        cost: 200
    },
    {
        id: "arm-8",
        name: "Nylon Helmet",
        covers: ["head"],
        stoppingPower: 20,
        encumbrance: 0,
        cost: 100
    },
    {
        id: "arm-9",
        name: "Heavy armor jacket",
        covers: ["torso", "arms"],
        stoppingPower: 20,
        encumbrance: 2,
        cost: 250
    },
    {
        id: "arm-10",
        name: "Door gunner's vest",
        covers: ["torso"],
        stoppingPower: 25,
        encumbrance: 3,
        cost: 250
    },
    {
        id: "arm-11",
        name: "Metal Gear",
        covers: ["torso", "legs", "arms", "head"],
        stoppingPower: 25,
        encumbrance: 2,
        cost: 600
    }
].map(i => ({ ...i, type: "armor" }));;



const baseFashionItems: Item[] = [
    {
        id: "fashion-1",
        name: "Pants",
        description: "",
        cost: 20
    },
    {
        id: "fashion-2",
        name: "Top",
        description: "",
        cost: 15
    },
    {
        id: "fashion-3",
        name: "Jacket",
        description: "",
        cost: 35
    },
    {
        id: "fashion-4",
        name: "Footwear",
        description: "",
        cost: 25
    },
    {
        id: "fashion-5",
        name: "Jewelry",
        description: "",
        cost: 100
    },
    {
        id: "fashion-6",
        name: "Mirrorshades",
        description: "",
        cost: 50
    },
    {
        id: "fashion-7",
        name: "Contact Lenses",
        description: "",
        cost: 100
    },
    {
        id: "fashion-8",
        name: "Glasses",
        description: "",
        cost: 50
    }
].map(i => ({ ...i, type: "fashion" }));;

export const fashionItems: Item[] = [
    ...baseFashionItems.map(i => ({
        id: i.id + "-generic",
        name: i.name + " (Generic)",
        description: "This is the standard streetwear, made up of colorful modular components in many colors.",
        cost: i.cost
    })),
    ...baseFashionItems.map(i => ({
        id: i.id + "-leisure",
        name: i.name + " (Leaisurewear)",
        description: "This is the 21st century equivalent of athletic wear. Padded fleece, corporate and athletic logos.",
        cost: i.cost * 2
    })),
    ...baseFashionItems.map(i => ({
        id: i.id + "-business",
        name: i.name + " (Businesswear)",
        description: "This is the equivalent of the standard business suit; understated colors, pinstripes, real leather shoes etc. Wool and other natural fabrics are considered the proper outfitting for the up and coming Corp.",
        cost: i.cost * 3
    })),
    ...baseFashionItems.map(i => ({
        id: i.id + "-high",
        name: i.name + " (High Fashion)",
        description: "Sophisticated and expensive dressing for the upper class. Designer labels like Miyake, Si-fui Yan and Anne Calvin.",
        cost: i.cost * 4
    })),
    ...baseFashionItems.map(i => ({
        id: i.id + "-urban",
        name: i.name + " (Urban Flash)",
        description: "Video jackets, colorshift fabrics, cammo, leathers, metal spikes, logowear, jeans, leather skirts, boots. The wildest and most utterly chilled in cyberfashion.",
        cost: i.cost * 2
    })),
].map(i => ({ ...i, type: "fashion" }));;

const toolItems: Item[] = [
    {
        id: "tool-1",
        name: "Techscanner",
        description: "a small handheld microcomp with various I/O connectors and probes. Techscanners run diagnostic programs, identify and examine malfunctioning components, and display internal schematics on a small screen.",
        cost: 600
    },
    {
        id: "tool-2",
        name: "Cutting torch",
        description: "common oxy/acetalyne type out of a bottle. Hand held, about a foot long. More powerful models are available, up to thermite lances at 5x-15x cost.",
        cost: 40
    },
    {
        id: "tool-3",
        name: "Tech Toolkit",
        description: "mixed kit of tools for repair of mechanical items, usually in a 4\"x16\"x2\" case.",
        cost: 100
    },
    {
        id: "tool-4",
        name: "B&E Tools",
        description: "",
        cost: 120
    },
    {
        id: "tool-5",
        name: "Electronics Toolkit",
        description: "mixed kit of tools for repair of mechanical items, usually in a 4\"x16\"x2\" case.",
        cost: 100
    },
    {
        id: "tool-6",
        name: "Protective Googles",
        description: "protective eyewear for welding metal machining work, chemical mixing, etc.",
        cost: 20
    },
    {
        id: "tool-7",
        name: "Flashtube",
        description: "you all know what this is. Beam range 100'-120' Can buy smaller pocket lights (1/4 range) for half the normal price.",
        cost: 2
    },
    {
        id: "tool-8",
        name: "Glowstick",
        description: "chemlight in a 6\" plastic tube. Shake or break to activate. Soft light lasts up to 6 hours. Comes in green, blue, red.",
        cost: 1
    },
    {
        id: "tool-9",
        name: "Flash Paint",
        description: " fluorescent paint gives off soft light equal to Glowstik, lasts up to 4 hours.",
        cost: 10
    },
    {
        id: "tool-10",
        name: "Flash Tape (1ft)",
        description: "same as Flashpaint. Lasts 6 hours. Comes in verity of widths.",
        cost: 10
    },
    {
        id: "tool-11",
        name: "Rope (1ft)",
        description: "braided synthetics in a variety of thicknesses and weights. Can hold up to 1,000 Ibs",
        cost: 2
    },
    {
        id: "tool-12",
        name: "Breathing mask",
        description: "a common painter's style mask, nose and mouth coverage, with two replaceable filters (1eb per 10 pack) on the sides. Good for keeping out the smog.",
        cost: 30
    }
].map(i => ({ ...i, type: "tool" }));;

export const personalElectronicItems: Item[] = [
    {
        id: "p-elect-1",
        name: "Holo Generator",
        description: "",
        cost: 500
    },
    {
        id: "p-elect-2",
        name: "Video Board (1sq ft)",
        description: "",
        cost: 100
    },
    {
        id: "p-elect-3",
        name: "Data Chip",
        description: "",
        cost: 10
    },
    {
        id: "p-elect-4",
        name: "Logcompass",
        description: "",
        cost: 50
    },
    {
        id: "p-elect-5",
        name: "Digital recorder",
        description: "",
        cost: 300
    },
    {
        id: "p-elect-6",
        name: "Digital camera",
        description: "",
        cost: 150
    },
    {
        id: "p-elect-7",
        name: "VideoCam",
        description: "",
        cost: 800
    },
    {
        id: "p-elect-8",
        name: "Video/Audio Tape Player",
        description: "",
        cost: 40
    },
    {
        id: "p-elect-9",
        name: "VideoTape",
        description: "",
        cost: 4
    },
    {
        id: "p-elect-10",
        name: "PocketTv",
        description: "",
        cost: 80
    },
    {
        id: "p-elect-11",
        name: "Digital Chip Player",
        description: "",
        cost: 150
    },
    {
        id: "p-elect-12",
        name: "Digital music chip",
        description: "",
        cost: 20
    },
    {
        id: "p-elect-13",
        name: "Electric Guitar",
        description: "",
        cost: 100
    },
    {
        id: "p-elect-14",
        name: "Electronic Keyboard",
        description: "",
        cost: 200
    },
    {
        id: "p-elect-15",
        name: "Drum Synthesizer",
        description: "",
        cost: 200
    },
    {
        id: "p-elect-16",
        name: "Amplifier",
        description: "",
        cost: 500
    }
].map(i => ({ ...i, type: "personalElectronic" }));;

export const dataSystemItems: Item[] = [
    {
        id: "data-system-1",
        name: "Laptop Computer",
        description: "",
        cost: 900
    },
    {
        id: "data-system-2",
        name: "Pocket Computer",
        description: "",
        cost: 100
    },
    {
        id: "data-system-3",
        name: "Cybermodem",
        description: "",
        cost: 0
    },
    {
        id: "data-system-4",
        name: "Cellular Cybermodem",
        description: "",
        cost: 0
    },
    {
        id: "data-system-5",
        name: "Interface Cables",
        description: "",
        cost: 20
    },
    {
        id: "data-system-6",
        name: "Low Impedance Cables",
        description: "",
        cost: 60
    },
    {
        id: "data-system-7",
        name: "Trode Set",
        description: "",
        cost: 20
    },
    {
        id: "data-system-8",
        name: "Keyboard",
        description: "",
        cost: 100
    },
    {
        id: "data-system-9",
        name: "Terminal",
        description: "",
        cost: 400
    }
].map(i => ({ ...i, type: "dataSystem" }));;

export const communicationItems: Item[] = [
    {
        id: "comm-1",
        name: "Mastoid Commo",
        description: "",
        cost: 100
    },
    {
        id: "comm-2",
        name: "Pocket Commo",
        description: "",
        cost: 50
    },
    {
        id: "comm-3",
        name: "Cellular phone",
        description: "",
        cost: 400
    },
    {
        id: "comm-4",
        name: "Mini Cell Phone",
        description: "",
        cost: 800
    }
].map(i => ({ ...i, type: "communication" }));;

export const surveillanceItems: Item[] = [
    {
        id: "surv-1",
        name: "Binoglasses",
        description: "",
        cost: 200
    },
    {
        id: "surv-2",
        name: "Binoculars",
        description: "",
        cost: 20
    },
    {
        id: "surv-3",
        name: "Light Booster Googles",
        description: "",
        cost: 250
    },
    {
        id: "surv-4",
        name: "IR Goggles",
        description: "",
        cost: 250
    },
    {
        id: "surv-5",
        name: "IR Flash",
        description: "",
        cost: 50
    }
].map(i => ({ ...i, type: "surveillance" }));

export const entertainmentItems: Item[] = [
    {
        id: "entertainment-1",
        name: "Movie",
        description: "",
        cost: 10
    },
    {
        id: "entertainment-2",
        name: "VCR/Chip Rental",
        description: "",
        cost: 4
    },
    {
        id: "entertainment-3",
        name: "Braindance",
        description: "",
        cost: 20
    },
    {
        id: "entertainment-4",
        name: "Live concert / Sports Event",
        description: "",
        cost: 50
    },
    {
        id: "entertainment-5",
        name: "Fast Food Meal",
        description: "",
        cost: 5
    },
    {
        id: "entertainment-6",
        name: "Well Drink (Fair)",
        description: "",
        cost: 3
    },
    {
        id: "entertainment-7",
        name: "Well Drink (Good)",
        description: "",
        cost: 6
    },
    {
        id: "entertainment-8",
        name: "Well Drink (Excellent)",
        description: "",
        cost: 9
    },
    {
        id: "entertainment-9",
        name: "Restaurant Meal (Fair)",
        description: "",
        cost: 20
    },
    {
        id: "entertainment-10",
        name: "Restaurant Meal (Good)",
        description: "",
        cost: 40
    },
    {
        id: "entertainment-11",
        name: "Restaurant Meal (Excellent)",
        description: "",
        cost: 60
    },
].map(i => ({ ...i, type: "entertainment" }));

export const keylocks: Item[] = [
    {
        id: "security-1",
        name: "Keylock",
        description: "",
        cost: 1
    },
    {
        id: "security-2",
        name: "Cardlock",
        description: "",
        cost: 1
    },
    {
        id: "security-3",
        name: "Vocolock",
        description: "",
        cost: 1
    }
].map(i => ({ ...i, type: "security" }));;

export const securityItems: Item[] = [
    ...keylocks.map(k => ({
        id: k.id + "-low",
        name: k.name + " (Low Security)",
        description: "",
        cost: k.cost
    })),
    ...keylocks.map(k => ({
        id: k.id + "-med",
        name: k.name + " (Medium Security)",
        description: "",
        cost: k.cost * 2
    })),
    ...keylocks.map(k => ({
        id: k.id + "-high",
        name: k.name + " (High Security)",
        description: "",
        cost: k.cost * 3
    })),
    ...keylocks.map(k => ({
        id: k.id + "-max",
        name: k.name + " (Max Security)",
        description: "",
        cost: k.cost * 4
    })),
    {
        id: "security-4",
        name: "Line Tap",
        description: "",
        cost: 200
    },
    {
        id: "security-5",
        name: "CodeDecryptor",
        description: "",
        cost: 500
    },
    {
        id: "security-6",
        name: "VocDecryptor",
        description: "",
        cost: 1000
    },
    {
        id: "security-7",
        name: "Security Scanner",
        description: "",
        cost: 1500
    },
    {
        id: "security-8",
        name: "Poison Sniffer",
        description: "",
        cost: 1500
    },
    {
        id: "security-9",
        name: "Jamming Transmitter",
        description: "",
        cost: 500
    },
    {
        id: "security-10",
        name: "Scanner Plate",
        description: "",
        cost: 500
    },
    {
        id: "security-11",
        name: "Movement Sensor",
        description: "",
        cost: 40
    },
    {
        id: "security-12",
        name: "Passcard",
        description: "",
        cost: 10
    },
    {
        id: "security-13",
        name: "Tracking Device",
        description: "",
        cost: 1000
    },
    {
        id: "security-14",
        name: "Tracer Button",
        description: "",
        cost: 50
    },
    {
        id: "security-15",
        name: "Remote Sensors",
        description: "",
        cost: 700
    },
    {
        id: "security-16",
        name: "PlasKuffs",
        description: "",
        cost: 100
    },
    {
        id: "security-17",
        name: "Stripwire Binders",
        description: "",
        cost: 5
    }
].map(i => ({ ...i, type: "security" }));

export const medicalItems: Item[] = [
    {
        id: "med-1",
        name: "Dermal Stapler",
        description: "",
        cost: 1000
    },
    {
        id: "med-2",
        name: "Spray Skin",
        description: "",
        cost: 50
    },
    {
        id: "med-3",
        name: "Slap Patch",
        description: "",
        cost: 0
    },
    {
        id: "med-4",
        name: "Cryotank",
        description: "",
        cost: 100000
    },
    {
        id: "med-5",
        name: "Medkit",
        description: "",
        cost: 50
    },
    {
        id: "med-6",
        name: "Surgical Kit",
        description: "",
        cost: 400
    },
    {
        id: "med-7",
        name: "First Aid Kit",
        description: "",
        cost: 10
    },
    {
        id: "med-8",
        name: "Medscanner",
        description: "",
        cost: 300
    },
    {
        id: "med-9",
        name: "Drug Analyser",
        description: "",
        cost: 75
    },
    {
        id: "med-10",
        name: "Airhypo",
        description: "",
        cost: 100
    },
    {
        id: "med-11",
        name: "Clinic Visit",
        description: "",
        cost: 200
    },
    {
        id: "med-12",
        name: "Day in Hospital",
        description: "",
        cost: 300
    },
    {
        id: "med-13",
        name: "Day in Intensive Care",
        description: "",
        cost: 1000
    },
    {
        id: "med-14",
        name: "Clone Limb Replacement",
        description: "",
        cost: 1500
    }
].map(i => ({ ...i, type: "medical" }));

export const furnishingItems: Item[] = [
    {
        id: "furn-1",
        name: "Nylon Carrybag",
        description: "",
        cost: 5
    },
    {
        id: "furn-2",
        name: "Sleeping Bag",
        description: "",
        cost: 25
    },
    {
        id: "furn-3",
        name: "Inflatable Bed",
        description: "",
        cost: 25
    },
    {
        id: "furn-4",
        name: "Futon",
        description: "",
        cost: 90
    },
    {
        id: "furn-5",
        name: "Real wood furniture (1 piece)",
        description: "",
        cost: 200
    },
    {
        id: "furn-6",
        name: "Synthetic furniture (1 piece)",
        description: "",
        cost: 100
    },
    {
        id: "furn-7",
        name: "Apartment Cube",
        description: "",
        cost: 5000
    },
    {
        id: "furn-8",
        name: "Lamp",
        description: "",
        cost: 20
    },
    {
        id: "furn-9",
        name: "Cleaning bot",
        description: "",
        cost: 1000
    },
    {
        id: "furn-10",
        name: "Vocal Switcher System",
        description: "",
        cost: 100
    },
].map(i => ({ ...i, type: "furnishing" }));

export const vehiclesItems: Item[] = [
    {
        id: "vehicle-1",
        name: "Scooter",
        description: "",
        cost: 500
    },
    {
        id: "vehicle-2",
        name: "Motorcycle",
        description: "",
        cost: 1500
    },
    {
        id: "vehicle-3",
        name: "CityCar",
        description: "",
        cost: 2000
    },
    {
        id: "vehicle-4",
        name: "Small Subcompact",
        description: "",
        cost: 6000
    },
    {
        id: "vehicle-5",
        name: "Medium Sedan",
        description: "",
        cost: 10000
    },
    {
        id: "vehicle-6",
        name: "Sportscar",
        description: "",
        cost: 20000
    },
    {
        id: "vehicle-7",
        name: "Luxury Sedan",
        description: "",
        cost: 40000
    },
].map(i => ({ ...i, type: "vehicle" }));

export const lifestyleItems: Item[] = [];
export const groceriesItems: Item[] = [];
export const housingItems: Item[] = [];

export const shopInventory: { [type: string]: Item[] } = {
    pistol: pistols,
    submachinegun: machineguns,
    rifle: rifles,
    shotgun: shotguns,
    heavyWeapon: heavyWeapons,
    exotic: exoticWeapons,
    melee: meleeWeapons,
    ammo: ammoList,
    armor: armors,
    fashion: fashionItems,
    tool: toolItems,
    personalElectronic: personalElectronicItems,
    dataSystem: dataSystemItems,
    communication: communicationItems,
    surveillance: surveillanceItems,
    entertainment: entertainmentItems,
    security: securityItems,
    medical: medicalItems,
    furnishing: furnishingItems,
    vehicle: vehiclesItems,
    lifestyle: lifestyleItems,
    grocery: groceriesItems,
    housing: housingItems
};

function byId(acc: any, curr: Item) {
    acc[curr.id] = curr;
    return acc;
}

export const allItemsById: { [id: string]: Item } = [
    ...pistols,
    ...machineguns,
    ...rifles,
    ...shotguns,
    ...heavyWeapons,
    ...exoticWeapons,
    ...meleeWeapons,
    ...ammoList,
    ...armors,
    ...fashionItems,
    ...toolItems,
    ...personalElectronicItems,
    ...dataSystemItems,
    ...communicationItems,
    ...surveillanceItems,
    ...entertainmentItems,
    ...securityItems,
    ...medicalItems,
    ...furnishingItems,
    ...vehiclesItems,
    ...lifestyleItems,
    ...groceriesItems,
    ...housingItems
].reduce(byId, {});
