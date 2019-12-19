

type WeaponType = "pistol" | "submachinegun" | "rifle" | "shotgun";
type WeaponConcealability = "p" | "j" | "l" | "n";
type WeaponAvailability = "e" | "c" | "p" | "r";
type Ammo = "5mm" | "6mm" | "9mm" | "10mm" | "11mm" | "12mm" | "5.56" | "7.62" | "00";
type WeaponReliability = "vr" | "st" | "ur";
type WeaponCategory =
    "Light Autopistol" | "Medium Autopistol" | "Heavy Autopistol" | "Very Heavy Autopistol" |
    "Light Submachinegun" | "Medium Submachinegun" | "Heavy Submachinegun" |
    "Assault Rifles" | "Shotgun" | "Heavy Weapons";

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

export const shotgun: Weapon[] = [
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