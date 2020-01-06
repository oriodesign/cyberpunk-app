import { Weapon, Item, Armor } from '../model/gear';
import { cyberdeckList, cyberdeckOptions, programList } from './netrunnerData';

export const pistols: Weapon[] = [
    {
        id: "p1",
        name: "BudgetArms C-13",
        description: "Light duty autopistol used as a holding and \"lady's gun\".",
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
        cost: 75,
        weight: 0.5
    },
    {
        id: "p2",
        name: "Dai Lung Cybermag 15",
        description: "Cheap Hong Kong knockoff, often used boosters and other street trash.",
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
        cost: 50,
        weight: 0.5
    },
    {
        id: "p3",
        name: "Federated Arms X-22",
        description: "The ubiquitous \"Polymer-one-shot\" cheap plastic pistol. Available in different colors.",
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
        cost: 150,
        weight: 0.5
    },
    {
        id: "p4",
        name: "Militech Arms Avenger",
        description: "Well-made autopistol with good range and accuracy. A professional's gun.",
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
        cost: 250,
        weight: 1
    },
    {
        id: "p5",
        name: "Dai Lung Streetmaster",
        description: "Another Dai Lung cheapie, built for the street.",
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
        cost: 250,
        weight: 1
    },
    {
        id: "p6",
        name: "Federated Arms X-9mm",
        description: "Saturday Solo's gun, used as a standard military sidearm in the U.S. and E.C.C.",
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
        cost: 300,
        weight: 1
    },
    {
        id: "p7",
        name: "BudgetArms Auto 3",
        description: "It's cheap, It's powerful, It blows up sometimes. What else do you want?",
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
        cost: 350,
        weight: 1
    },
    {
        id: "p8",
        name: "Sternmeyer Type 35",
        description: "Rugged, reliable, with excellent stop-ping power. Another fine E.C.C. prod-uct from the United Germanies.",
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
        cost: 400,
        weight: 1
    },
    {
        id: "p9",
        name: "Armalite 44",
        description: "Designed as an alternate to the 1998 U.S. Army sidearm trials. A solid con-tender.",
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
        cost: 450,
        weight: 3
    },
    {
        id: "p10",
        name: "Colt AMT Model 2000",
        description: "Now the standard officer's sidearm for the U.S. Army, the M-2000 served well in the Central American Wars.",
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
        cost: 500,
        weight: 3
    }
];

export const machineguns: Weapon[] = [
    {
        id: "m1",
        name: "Uzi Miniauto 9",
        description: "Uzi's entry into the 21st century, all plastic, with a rotary electric clip and adjustable trigger. The choice for many security Solos.",
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
        cost: 475,
        weight: 3
    },
    {
        id: "m2",
        name: "H&K MP-2013",
        description: "Heckler&Koch's updating of the MP-5K classic, with compound plastics and built in silencing.",
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
        cost: 450,
        weight: 3
    },
    {
        id: "m3",
        name: "Fed Arms Tech Assault II",
        description: "An updated version of the venerable Tech Assault I, features larger clip, bet-ter autofire, no melting. Honest.",
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
        cost: 400,
        weight: 3
    },
    {
        id: "m4",
        name: "Arasaka Minami 10",
        description: "The standard Arasaka Security weapon, found worldwide. A good, all round weapon.",
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
        cost: 500,
        weight: 3
    },
    {
        id: "m5",
        name: "H&K MPK-9",
        description: "A light composite submachinegun with integral sights. Used by many Euro Solos.",
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
        cost: 520,
        weight: 3
    },
    {
        id: "m6",
        name: "Sternmeyer SMG 21",
        description: "Sternmeyer's best entry in the anti-terrorist category, with wide use on C-SWAT teams and PsychoSquads.",
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
        cost: 500,
        weight: 3
    },
    {
        id: "m7",
        name: "H&K MPK-11",
        description: "Possibly the most used Solo's gun in existence, the MPK-11 can be modified into four different designs, including a bullpup configuration, standard SMG, an assault carbine, and a grenade launcher mount.",
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
        cost: 700,
        weight: 3
    },
    {
        id: "m8",
        name: "Ingram MAC 14",
        description: "Updated MAC-10, with composite body and cylindrical feeding magazine.",
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
        cost: 650,
        weight: 3
    }
];

export const rifles: Weapon[] = [
    {
        id: "r1",
        name: "Militech Ronin Light Assault",
        description: "A light, all purpose update, similar to the M-16B.",
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
        cost: 450,
        weight: 3
    },
    {
        id: "r2",
        name: "AKR-20 Medium Assault",
        description: "A plastic and carbon fiber update of the AKM, distributed throughout the re-mains of the Soviet Bloc.",
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
        cost: 500,
        weight: 3
    },
    {
        id: "r3",
        name: "FN-RAL Heavy Assault Rifle",
        description: "The standard NATO assault weapon for battlefield work. Bullpup design, collapsing stock.",
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
        cost: 600,
        weight: 3
    },
    {
        id: "r4",
        name: "Kalashnikov A-80 Heavy Rifle",
        description: "Another Soviet retread, with improved sighting and lightened with composites.",
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
        cost: 550,
        weight: 3
    }
];

export const shotguns: Weapon[] = [
    {
        id: "s1",
        name: "Arasaka Rapid Assault 12",
        description: "A high powered auto-shotgun with lethal firepower. Used by Arasaka worldwide. Another good reason to avoid the Boys in Black.",
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
        cost: 900,
        weight: 3
    },
    {
        id: "s2",
        name: "Sternmeyer Stakeout 10",
        description: "Light duty stakeout shotgun, used by city police departments.",
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
        cost: 450,
        weight: 3
    }
];

export const heavyWeapons: Weapon[] = [
    {
        id: "h1",
        name: "Barrett-Arasaka Light 20mm",
        description: "The cyberpsycho hunter's favorite. Almost 2 meters long, this \"cannon\" fires a depleted uranium shell at super-sonic speeds. Heavy AP sub-caliber penetrator damages armor 2 pts/hit.",
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
        cost: 2000,
        weight: 4
    },
    {
        id: "h2",
        name: "Scorpion 16 Missile Launcher",
        description: "The third generation of the Stinger missile launcher, this shoulder arm fires one missile.",
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
        cost: 3000,
        weight: 4
    },
    {
        id: "h3",
        name: "Militech Arms RPG-A",
        description: "Shoulder-mounted, rocket-powered grenade launcher. Heavily used in the Central American conflicts under the name RPG-A.",
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
        cost: 1500,
        weight: 4
    },
    {
        id: "h4",
        name: "C6 Plastic Explosive 1kg",
        description: "Grey block of plastique, can be deto-nated by timer, tripwire or signal.",
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
        cost: 100,
        weight: 1
    },
    {
        id: "h5",
        name: "Mine",
        description: "Can be detonated by timer, tripwire, signal or motion detector.",
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
        cost: 350,
        weight: 1
    },
    {
        id: "h6",
        name: "K-A F-253 Flamethrower",
        description: "Liquefied napalm sprayer. Back mounted and bulky. Does extra damage following initial hit.",
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
        cost: 1500,
        weight: 4
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
        cost: 30,
        weight: 0.5
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
        cost: 30,
        weight: 0.5
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
        cost: 30,
        weight: 0.5
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
        cost: 30,
        weight: 0.5
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
        cost: 30,
        weight: 0.5
    }
];

export const exoticWeapons: Weapon[] = [
    {
        id: "e1",
        name: "Techtronica 15 Microwaver",
        description: "Flashlight sized microwave projector.",
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
        cost: 400,
        weight: 3
    },
    {
        id: "e2",
        name: "Militech Electronic LaserCannon",
        description: "Milspec laser cannon, rarely seen.",
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
        cost: 8000,
        weight: 4
    },
    {
        id: "e3",
        name: "Avante P-1135 Needlegun",
        description: "Lightweight, plastic, compressed air powered. Can be doped with drugs, poison.",
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
        cost: 200,
        weight: 1
    },
    {
        id: "e4",
        name: "Enertex AKM Power Squirt",
        description: "A squirtgun. Yes, a powered squirtgun.",
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
        cost: 15,
        weight: 1
    },
    {
        id: "e5",
        name: "Nelspot Wombat",
        description: "Paintball gun from hell. Can fire acid, paint, drugs, poison.",
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
        cost: 200,
        weight: 1
    },
    {
        id: "e6",
        name: "Militech Electronic Taser",
        description: "Zap. About the size of a small hand flashlight.",
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
        cost: 60,
        weight: 1
    },
    {
        id: "e7",
        name: "EagleTech Tomcat Compound Bow",
        description: "Gyrobalanced, stabilized compound bow. Silent & deadly.",
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
        cost: 150,
        weight: 2
    },
    {
        id: "e8",
        name: "EagleTech Striker Crossbow",
        description: "Plastic and bimetal crossbow. Silent, deadly, and you usually get your ammo back.",
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
        cost: 220,
        weight: 2
    }
];

export const meleeWeapons: Weapon[] = [
    {
        id: "m1",
        name: "Kendachi Monoknife",
        description: "Mono-sectional crystal blade. Incredibly sharp. In the Japanese \"tanto\" style",
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
        cost: 200,
        weight: 0.5
    },
    {
        id: "m2",
        name: "Kendachi Monokatana",
        description: "Sword length version of monoblade. Resembles a hightech katana with a milky, nearly transparent blade.",
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
        cost: 600,
        weight: 1
    },
    {
        id: "m3",
        name: "SPM-1 Battleglove",
        description: "This is a large gauntlet covering the hand and forearm. It does 3D6 in crush damage, 2D6 punch damage, and has three spaces which can be used to store any standard cyberarm option.",
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
        cost: 900,
        weight: 1
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
        cost: 0,
        weight: 1
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
        cost: 20,
        weight: 0.5
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
        cost: 200,
        weight: 2
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
        cost: 20,
        weight: 2
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
        cost: 15,
        weight: 2
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
        cost: 100,
        weight: 2
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
        cost: 3,
        weight: 0.5
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
        cost: 15,
        weight: 2
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
        cost: 10,
        weight: 1
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
        cost: 20,
        weight: 4
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
        cost: 80,
        weight: 5
    }
];



export const ammoList: Item[] = [
    {
        id: "ammo1",
        name: "box of 100 for light pistol/submachinegun",
        cost: 15,
        weight: 0.5
    },
    {
        id: "ammo2",
        name: "box of 50 for medium pistol/submachinegun",
        cost: 15,
        weight: 0.5
    },
    {
        id: "ammo3",
        name: "box of 50 for heavy pistol/submachinegun",
        cost: 18,
        weight: 0.5
    },
    {
        id: "ammo4",
        name: "box of 50 for very heavy pistol",
        cost: 20,
        weight: 0.5
    },
    {
        id: "ammo5",
        name: "box of 100 for assault rifle",
        cost: 40,
        weight: 0.5
    },
    {
        id: "ammo6",
        name: "box of 12 for shotgun",
        cost: 15,
        weight: 0.5
    },
    {
        id: "ammo7",
        name: "20mm cannon round",
        cost: 25,
        weight: 0.5
    },
    {
        id: "ammo8",
        name: "12 arrows",
        cost: 24,
        weight: 0.5
    },
    {
        id: "ammo9",
        name: "12 crossbow bolts",
        cost: 24,
        weight: 0.5
    },
    {
        id: "ammo10",
        name: "100 airgun pellets",
        cost: 6,
        weight: 0.5
    },
    {
        id: "ammo11",
        name: "50 needlegun rounds",
        cost: 6,
        weight: 0.5
    }
].map(i => ({ ...i, type: "ammo" }));



export const armors: Armor[] = [
    {
        id: "arm-1",
        name: "Heavy Leather",
        description: "Good for road rash, stopping knives, etc. A good .38 slug will probably rip you to bits, however.",
        covers: ["arms", "torso", "legs"],
        stoppingPower: 4,
        encumbrance: 0,
        cost: 50,
        weight: 1
    },
    {
        id: "arm-2",
        name: "Kevlar t-shirt / vest",
        description: "Can be worn unnoticeably under most street clothes. Will stop most rounds up to a .45 ACP.",
        covers: ["torso"],
        stoppingPower: 10,
        encumbrance: 0,
        cost: 90,
        weight: 1
    },
    {
        id: "arm-3",
        name: "steel helmet",
        description: "Heavy duty protection for the head, standard for most military. Some are made of steel, others of kevlar and high impact plastics. Most (90%) have face shields with 1/2 the SP level as the rest of the helmet",
        covers: ["head"],
        stoppingPower: 14,
        encumbrance: 0,
        cost: 20,
        weight: 0.5
    },
    {
        id: "arm-4",
        name: "Light armor jacket",
        description: "Personal protection for the fashion conscious, these lightweight Kevlar jackets have nylon coverings that resemble normal jackets.",
        covers: ["torso", "arms"],
        stoppingPower: 14,
        encumbrance: 0,
        cost: 150,
        weight: 3
    },
    {
        id: "arm-5",
        name: "Medium armor jacket",
        description: "Personal protection for the fashion conscious, these lightweight Kevlar jackets have nylon coverings that resemble normal jackets.",
        covers: ["torso", "arms"],
        stoppingPower: 18,
        encumbrance: 1,
        cost: 200,
        weight: 3
    },
    {
        id: "arm-6",
        name: "Flack vest",
        description: "Standard protection for combat soldiers, the flack vest is designed to stop small arms fire, grenade shrapnel, but only slow up assault rifle rounds.",
        covers: ["torso"],
        stoppingPower: 20,
        encumbrance: 1,
        cost: 200,
        weight: 3
    },
    {
        id: "arm-7",
        name: "Flack pants",
        description: "Standard protection for combat soldiers, the flack vest is designed to stop small arms fire, grenade shrapnel, but only slow up assault rifle rounds.",
        covers: ["legs"],
        stoppingPower: 20,
        encumbrance: 1,
        cost: 200,
        weight: 1
    },
    {
        id: "arm-8",
        name: "Nylon Helmet",
        description: "Heavy duty protection for the head, standard for most military. Some are made of steel, others of kevlar and high impact plastics. Most (90%) have face shields with 1/2 the SP level as the rest of the helmet",
        covers: ["head"],
        stoppingPower: 20,
        encumbrance: 0,
        cost: 100,
        weight: 1
    },
    {
        id: "arm-9",
        name: "Heavy armor jacket",
        description: "Personal protection for the fashion conscious, these lightweight Kevlar jackets have nylon coverings that resemble normal jackets.",
        covers: ["torso", "arms"],
        stoppingPower: 20,
        encumbrance: 2,
        cost: 250,
        weight: 3
    },
    {
        id: "arm-10",
        name: "Door gunner's vest",
        description: "Heavy duty protection for stationary positions, like machinegun nests, helicopter doors, etc.",
        covers: ["torso"],
        stoppingPower: 25,
        encumbrance: 3,
        cost: 250,
        weight: 3
    },
    {
        id: "arm-11",
        name: "Metal Gear",
        description: "Laminated expoxide plate armor. Bulky and designed in modular sections, with helmet, arm & leg coverings, torso and back damshell.",
        covers: ["torso", "legs", "arms", "head"],
        stoppingPower: 25,
        encumbrance: 2,
        cost: 600,
        weight: 5
    }
].map(i => ({ ...i, type: "armor" }));;



const baseFashionItems: Item[] = [
    {
        id: "fashion-1",
        name: "Pants",
        description: "",
        cost: 20,
        weight: 0.1
    },
    {
        id: "fashion-2",
        name: "Top",
        description: "",
        cost: 15,
        weight: 0.1
    },
    {
        id: "fashion-3",
        name: "Jacket",
        description: "",
        cost: 35,
        weight: 0.1
    },
    {
        id: "fashion-4",
        name: "Footwear",
        description: "",
        cost: 25,
        weight: 0.1
    },
    {
        id: "fashion-5",
        name: "Jewelry",
        description: "",
        cost: 100,
        weight: 0.1
    },
    {
        id: "fashion-6",
        name: "Mirrorshades",
        description: "",
        cost: 50,
        weight: 0
    },
    {
        id: "fashion-7",
        name: "Contact Lenses",
        description: "",
        cost: 100,
        weight: 0
    },
    {
        id: "fashion-8",
        name: "Glasses",
        description: "",
        cost: 50,
        weight: 0
    }
].map(i => ({ ...i, type: "fashion" }));;

export const fashionItems: Item[] = [
    ...baseFashionItems.map(i => ({
        id: i.id + "-generic",
        name: i.name + " (Generic)",
        weight: i.weight,
        description: "This is the standard streetwear, made up of colorful modular components in many colors.",
        cost: i.cost
    })),
    ...baseFashionItems.map(i => ({
        id: i.id + "-leisure",
        name: i.name + " (Leaisurewear)",
        weight: i.weight,
        description: "This is the 21st century equivalent of athletic wear. Padded fleece, corporate and athletic logos.",
        cost: i.cost * 2
    })),
    ...baseFashionItems.map(i => ({
        id: i.id + "-business",
        name: i.name + " (Businesswear)",
        weight: i.weight,
        description: "This is the equivalent of the standard business suit; understated colors, pinstripes, real leather shoes etc. Wool and other natural fabrics are considered the proper outfitting for the up and coming Corp.",
        cost: i.cost * 3
    })),
    ...baseFashionItems.map(i => ({
        id: i.id + "-high",
        name: i.name + " (High Fashion)",
        weight: i.weight,
        description: "Sophisticated and expensive dressing for the upper class. Designer labels like Miyake, Si-fui Yan and Anne Calvin.",
        cost: i.cost * 4
    })),
    ...baseFashionItems.map(i => ({
        id: i.id + "-urban",
        name: i.name + " (Urban Flash)",
        weight: i.weight,
        description: "Video jackets, colorshift fabrics, cammo, leathers, metal spikes, logowear, jeans, leather skirts, boots. The wildest and most utterly chilled in cyberfashion.",
        cost: i.cost * 2
    })),
].map(i => ({ ...i, type: "fashion" }));;

const toolItems: Item[] = [
    {
        id: "tool-1",
        name: "Techscanner",
        description: "a small handheld microcomp with various I/O connectors and probes. Techscanners run diagnostic programs, identify and examine malfunctioning components, and display internal schematics on a small screen.",
        cost: 600,
        weigth: 0.5
    },
    {
        id: "tool-2",
        name: "Cutting torch",
        description: "common oxy/acetalyne type out of a bottle. Hand held, about a foot long. More powerful models are available, up to thermite lances at 5x-15x cost.",
        cost: 40,
        weigth: 0.5
    },
    {
        id: "tool-3",
        name: "Tech Toolkit",
        description: "mixed kit of tools for repair of mechanical items, usually in a 4\"x16\"x2\" case.",
        cost: 100,
        weigth: 1
    },
    {
        id: "tool-4",
        name: "B&E Tools",
        description: "",
        cost: 120,
        weigth: 1
    },
    {
        id: "tool-5",
        name: "Electronics Toolkit",
        description: "mixed kit of tools for repair of mechanical items, usually in a 4\"x16\"x2\" case.",
        cost: 100,
        weigth: 1
    },
    {
        id: "tool-6",
        name: "Protective Googles",
        description: "protective eyewear for welding metal machining work, chemical mixing, etc.",
        cost: 20,
        weigth: 1
    },
    {
        id: "tool-7",
        name: "Flashtube",
        description: "you all know what this is. Beam range 100'-120' Can buy smaller pocket lights (1/4 range) for half the normal price.",
        cost: 2,
        weigth: 0.5
    },
    {
        id: "tool-8",
        name: "Glowstick",
        description: "chemlight in a 6\" plastic tube. Shake or break to activate. Soft light lasts up to 6 hours. Comes in green, blue, red.",
        cost: 1,
        weigth: 0.5
    },
    {
        id: "tool-9",
        name: "Flash Paint",
        description: " fluorescent paint gives off soft light equal to Glowstik, lasts up to 4 hours.",
        cost: 10,
        weigth: 1
    },
    {
        id: "tool-10",
        name: "Flash Tape (1ft)",
        description: "same as Flashpaint. Lasts 6 hours. Comes in verity of widths.",
        cost: 10,
        weigth: 0.5
    },
    {
        id: "tool-11",
        name: "Rope (1ft)",
        description: "braided synthetics in a variety of thicknesses and weights. Can hold up to 1,000 Ibs",
        cost: 2,
        weigth: 1
    },
    {
        id: "tool-12",
        name: "Breathing mask",
        description: "a common painter's style mask, nose and mouth coverage, with two replaceable filters (1eb per 10 pack) on the sides. Good for keeping out the smog.",
        cost: 30,
        weigth: 0.1
    }
].map(i => ({ ...i, type: "tool" }));;

export const personalElectronicItems: Item[] = [
    {
        id: "p-elect-1",
        name: "Holo Generator",
        description: "small box (approx. 4\"x2'x6\" inches) projects a holographic picture from a replaceable chip. Generator is compatible with chips from most digital cameras. Can be linked with a digital Recorder/Player.",
        cost: 500,
        weigth: 1
    },
    {
        id: "p-elect-2",
        name: "Video Board (1sq ft)",
        description: "monitor using flat-LCD technology. No thicker than an inch, most video boards are built into TVs, but all types have input plugs for use as a readout monitor for other electronic products. Large ones (20\"x100\") are used as advertising signs. Videoboards are bought by the square foot.",
        cost: 100,
        weigth: 1
    },
    {
        id: "p-elect-3",
        name: "Data Chip",
        description: "the storage medium of the future for holding digital information. Usually plastic-cased, chips come in the shape of buttons, flat squares and triangular slivers. AH shapes can be read by all types of recording media by use of adapter plugs.",
        cost: 10,
        weigth: 0.5
    },
    {
        id: "p-elect-4",
        name: "Logcompass",
        description: "a form of programmable inertial compass that keeps track of your changes in direction from a fixed bearing or point.",
        cost: 50,
        weigth: 0.5
    },
    {
        id: "p-elect-5",
        name: "Digital recorder",
        description: "audio recording device using datachip technology, most are the size of two paperback books stacked flat. Some are smaller that a pack of cards.",
        cost: 300,
        weigth: 0.5
    },
    {
        id: "p-elect-6",
        name: "Digital camera",
        description: " still images are \"digitized\" onto a chip cartridge. About the size of a pack of cigarettes",
        cost: 150,
        weigth: 1
    },
    {
        id: "p-elect-7",
        name: "VideoCam",
        description: "can be mounted on a headset, a shoulder clamp, or hand held depending on size (This affects price, size of recorded image, duration of recording time, etc. The once given is for the most inexpensive shoulder-carried model.) Sound and image are usually recorded on a tape-pak that is the size of a card deck or smaller, but you can direct feed to a transmission device with a set of cables",
        cost: 800,
        weigth: 1
    },
    {
        id: "p-elect-8",
        name: "Video/Audio Tape Player",
        description: " this device plays the videocam tape-paks, along with many older-style audio tapes.",
        cost: 40,
        weigth: 0.5
    },
    {
        id: "p-elect-9",
        name: "VideoTape",
        description: "see VideoCam. Note: the video tape of 2020 is a high density digital media capable of handling both audio and visual images.",
        cost: 4,
        weigth: 0.5
    },
    {
        id: "p-elect-10",
        name: "PocketTv",
        description: "uses a flat-scan screen in a package 5\"x5\"x3/4\" or smaller. Picks up the majority of VHF, UHF stations.",
        cost: 80,
        weigth: 0.5
    },
    {
        id: "p-elect-11",
        name: "Digital Chip Player",
        description: " this plays audio- and video-recorded chips. You must plug into a video board to play the video Crack of a digital chip.",
        cost: 150,
        weigth: 0.5
    },
    {
        id: "p-elect-12",
        name: "Digital music chip",
        description: "1 to 6 pop album favorites (or any other music) slapped into semiconductors and plastic. These chip are also available in a read-write format as well.",
        cost: 20,
        weigth: 0.5
    },
    {
        id: "p-elect-13",
        name: "Electric Guitar",
        description: " no longer the classic \"axe\", it's now lighter, more flexible in its applications, and sometimes not even in a recognizable shape. It may have even replaced the strings and frets with a series of key banks!",
        cost: 100,
        weigth: 3
    },
    {
        id: "p-elect-14",
        name: "Electronic Keyboard",
        description: " little changed from (he present except in size and power.",
        cost: 200,
        weigth: 4
    },
    {
        id: "p-elect-15",
        name: "Drum Synthesizer",
        description: "common \"new-wave\" music equipment; a series of percussion pads and a sound box. It will (it in a couple of suitcases and can be arranged anyway the drummer pleases.",
        cost: 200,
        weigth: 3
    },
    {
        id: "p-elect-16",
        name: "Amplifier",
        description: " see electronic keyboard. (For more on the instruments of the 2010s-20s, check out the supplement Rockerboy).",
        cost: 500,
        weigth: 4
    }
].map(i => ({ ...i, type: "personalElectronic" }));;

export const dataSystemItems: Item[] = [
    {
        id: "data-system-1",
        name: "Laptop Computer",
        description: "the common portable with internal hard drive, video board (detachable), and slots for data/programming chips. These units do not have the advanced CPUs and memory spaces available in a regular computer system; they cannot be used for Netrunning.",
        cost: 900,
        weigth: 0.5
    },
    {
        id: "data-system-2",
        name: "Pocket Computer",
        description: "the classic 6\"x3\"x1/2\" programmable calculator with keyboard and chip slots, up to 100 pages of alphanumeric memory.",
        cost: 100,
        weigth: 0.5
    },
    {
        id: "data-system-3",
        name: "Cybermodem",
        description: "see Netrunning section.",
        cost: 0,
        weigth: 0.5
    },
    {
        id: "data-system-4",
        name: "Cellular Cybermodem",
        description: "see Netrunning section.",
        cost: 0,
        weigth: 0.5
    },
    {
        id: "data-system-5",
        name: "Interface Cables",
        description: "typical plug-ended splicing cables going from a cyber-operated machine to a person's interface sockets.",
        cost: 20,
        weigth: 0.5
    },
    {
        id: "data-system-6",
        name: "Low Impedance Cables",
        description: "special low-resistance/interference cables for improved data transfer; they confer a +1 bonus on any interfacing tasks, such as controlling cybervehicles or Netrunning.",
        cost: 60,
        weigth: 0.5
    },
    {
        id: "data-system-7",
        name: "Trode Set",
        description: "a low efficiency headset for \"piggybacking\" in the Net -2 to Interface skill.",
        cost: 20,
        weigth: 0.5
    },
    {
        id: "data-system-8",
        name: "Keyboard",
        description: "can be accessorized to your cybermodem or other electronic equipment.",
        cost: 100,
        weigth: 0.5
    },
    {
        id: "data-system-9",
        name: "Terminal",
        description: "a computer workstation including keyboard, video board, and I/O connectors. A terminal can be used to Netrun (making the runner immune to most Black software), but is very, very slow (-5 to Interface Skills). Terminal operators are commonly known as \"net-tortoises\"",
        cost: 400,
        weigth: 0.5
    }
].map(i => ({ ...i, type: "dataSystem" }));;

export const communicationItems: Item[] = [
    {
        id: "comm-1",
        name: "Mastoid Commo",
        description: "all commos are radio transceivers. This one if glued to the jaw and temple; you send via subvocalization and receive with soundless vibrations. Range 10 miles.",
        cost: 100,
        weigth: 0.5
    },
    {
        id: "comm-2",
        name: "Pocket Commo",
        description: "a typical small walkie-talkie. Range 10 miles.",
        cost: 50,
        weigth: 0.5
    },
    {
        id: "comm-3",
        name: "Cellular phone",
        description: "communication on the move, anywhere within reach of a radiotelephone transceiver network. There it a 100eb per month phone service charge.",
        cost: 400,
        weigth: 0.5
    },
    {
        id: "comm-4",
        name: "Mini Cell Phone",
        description: "it fill in a cigarette pack.",
        cost: 800,
        weigth: 0.5
    }
].map(i => ({ ...i, type: "communication" }));;

export const surveillanceItems: Item[] = [
    {
        id: "surv-1",
        name: "Binoglasses",
        description: " these high-tech vision aids combine binocular effects with a laser rangefinder, and sometimes IR lenses. More expensive versions will have a digital camera built in.",
        cost: 200,
        weigth: 0.5
    },
    {
        id: "surv-2",
        name: "Binoculars",
        description: "'nuff said.",
        cost: 20,
        weigth: 0.5
    },
    {
        id: "surv-3",
        name: "Light Booster Googles",
        description: " light intensification goggles boost ambient light for night vision via \"Starlite\" technology. Goggles can be overwhelmed by sudden light level increase. With tuning (DIFFICULT task), they can also detect active IR beams.",
        cost: 250,
        weigth: 0.5
    },
    {
        id: "surv-4",
        name: "IR Goggles",
        description: "these pick up hazy, background infrared sources. Normally used with an active IR source for invisible illumination.",
        cost: 250,
        weigth: 0.5
    },
    {
        id: "surv-5",
        name: "IR Flash",
        description: "See IR Goggles. UV flash is similar; also usable with the proper cyberoptic.",
        cost: 50,
        weigth: 0.5
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
        description: "The keylock is a mechanical lock and must be attacked that way.",
        cost: 1,
        weigth: 0.5
    },
    {
        id: "security-2",
        name: "Cardlock",
        description: "Cardlocks use a magnetically-coded card.",
        cost: 1,
        weigth: 0.5
    },
    {
        id: "security-3",
        name: "Vocolock",
        description: "Employ voice-recognition technology",
        cost: 1,
        weigth: 0.5
    }
].map(i => ({ ...i, type: "security" }));;

export const securityItems: Item[] = [
    ...keylocks.map(k => ({
        id: k.id + "-low",
        name: k.name + " (Low Security)",
        description: k.description,
        cost: k.cost
    })),
    ...keylocks.map(k => ({
        id: k.id + "-med",
        name: k.name + " (Medium Security)",
        description: k.description,
        cost: k.cost * 2
    })),
    ...keylocks.map(k => ({
        id: k.id + "-high",
        name: k.name + " (High Security)",
        description: k.description,
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
        description: "A cardlock descryptor. The probe of this device is inserted into a card lock instead of the normal card. A Decryptor operates by adding +5 to your basic TECH+Electronic Security+1D10 skill check against the lock.",
        cost: 500,
        weigth: 0.5
    },
    {
        id: "security-6",
        name: "VocDecryptor",
        description: "A vocal modulator for penetrating vocolocks.",
        cost: 1000,
        weigth: 0.5
    },
    {
        id: "security-7",
        name: "Security Scanner",
        description: "This device searches out electromagnetic fields generated by various alarm systems (75% chance of location). A TECH of INT roll may be needed to identify the style of alarm encountered.",
        cost: 1500,
        weigth: 0.5
    },
    {
        id: "security-8",
        name: "Poison Sniffer",
        description: "Can be set to check air or liquid for a specific poison(s). Otherwise, it will simply alert you to foreign substances. 85% accuracy.",
        cost: 1500,
        weigth: 0.5
    },
    {
        id: "security-9",
        name: "Jamming Transmitter",
        description: "usually comes in 2 or 3 large cases, but can till an entire van. Jams electromagnetic transmissions in a 1000 foot area (that includes cellular phones and some cyberware).",
        cost: 500,
        weigth: 0.5
    },
    {
        id: "security-10",
        name: "Scanner Plate",
        description: "A reading device for palmprint locks. Can be attached to any type of Card or Voclock to add an extra layer of security.",
        cost: 500,
        weigth: 0.5
    },
    {
        id: "security-11",
        name: "Movement Sensor",
        description: "A typical alarm system. Covers seismic, sonar, and fixed IR or visible light networks. Detects movement in a defined area, with a 95% reliability. The sensory processor is about the size of a pack of cigarettes.",
        cost: 40,
        weigth: 0.5
    },
    {
        id: "security-12",
        name: "Passcard",
        description: "The most common unlocking device for a cardlock.",
        cost: 10,
        weigth: 0.1
    },
    {
        id: "security-13",
        name: "Tracking Device",
        description: "Hand held or suitcased equipment for detecting/following tracer buttons. Range is 1 mile.",
        cost: 1000,
        weigth: 0.5
    },
    {
        id: "security-14",
        name: "Tracer Button",
        description: "Can be any size from a matchbook to a pin. Uses radioactivity or constant/pulsed radio transmission to pinpoint who or what It's attached to. Some can be turned on/off remotely. Usually bought in sets of 6.",
        cost: 50,
        weigth: 0.5
    },
    {
        id: "security-15",
        name: "Remote Sensors",
        description: "",
        cost: 700,
        weigth: 0.5
    },
    {
        id: "security-16",
        name: "PlasKuffs",
        description: "just what it says. Probably a little stronger (a NEARLY IMPOSSIBLE task to break) due to new alloys. Often (50%) opened with a form of cardlock.",
        cost: 100,
        weigth: 0.5
    },
    {
        id: "security-17",
        name: "Stripwire Binders",
        description: "great for riot control. One-use-only plastic locking strips for temporary handcuffs and leg ties (VERY DIFFICULT to break). With ceramic fibers to resist cutting, and guaranteed fireproof. Come in boxes of 12.",
        cost: 5,
        weigth: 0.5
    }
].map(i => ({ ...i, type: "security" }));

export const medicalItems: Item[] = [
    {
        id: "med-1",
        name: "Dermal Stapler",
        description: "This automatically pulls the sides of a wound together and sutures it with staples of a compressed organic material that dissolves after an elapsed time.",
        cost: 1000,
        weigth: 0.5
    },
    {
        id: "med-2",
        name: "Spray Skin",
        description: "A putty-tike spray gel for treatment of severe abrasions. Antiseptic and sterile, it's also air permeable and flakes off in about two weeks.",
        cost: 50,
        weigth: 0.5
    },
    {
        id: "med-3",
        name: "Slap Patch",
        description: "A small plastic pad containing a measured amount of medicine. The pad is applied to the skin and the medicine is absorbed in steady doses. See the Trauma Team section for drugs and prices.",
        cost: 0,
        weigth: 0.5
    },
    {
        id: "med-4",
        name: "Cryotank",
        description: "An advanced refrigeration tank; the cryotank will cool a body down to preservation levels while life-support machines maintain the blood/oxygen How. Designed to keep a dying body in relative stasis.",
        cost: 100000,
        weigth: 20
    },
    {
        id: "med-5",
        name: "Medkit",
        description: "Standard doctor's or military corpsman's bag. It contains antidotes, dressings, drugs, applicators, medicines, and examining instruments (probes, depressors, ocular light, stethoscope).",
        cost: 50,
        weigth: 1
    },
    {
        id: "med-6",
        name: "Surgical Kit",
        description: "A full set of surgeon's tools (scalpel, retractor, probe, clamp, tweezer, etc.). and chemicals or equipment for maintaining a sterile operating field.",
        cost: 400,
        weigth: 1
    },
    {
        id: "med-7",
        name: "First Aid Kit",
        description: "The common household medic's box. 11 has bandages, antiseptics, and a simple painkiller.",
        cost: 10,
        weigth: 1
    },
    {
        id: "med-8",
        name: "Medscanner",
        description: "Readouts: for body temperature, heartrate, blood pressure, respiration, and blood sugarlevels. A small chipped database adds a +2 to your Diagnose Skill.",
        cost: 300,
        weigth: 0.5
    },
    {
        id: "med-9",
        name: "Drug Analyser",
        description: "Ranging in size from a book to a briefcase, this gadget operates in a manner simular to the chemical sniffer. It will determine the purity of a drug with a known composition, or identify the molecular makeup and possible effects of an unknown substance that is simular to a drug already programmed into its library.",
        cost: 75,
        weigth: 0.5
    },
    {
        id: "med-10",
        name: "Airhypo",
        description: "The \"Bones McCoy\" uses a quick burst of compressed air to force a liquid drug through the skin. See the Trauma Team section for drugs and prices.",
        cost: 100,
        weigth: 0.5
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
        description: "The athletic bag/kitbag of the 2000's, with a variety of logos to choose from Sizes vary.",
        cost: 5,
        weigth: 0.5
    },
    {
        id: "furn-2",
        name: "Sleeping Bag",
        description: "They're lighter weight, and can now take temperatures down to ~100F. Compresses to a 12\"x6\"x4\" wad.",
        cost: 25,
        weigth: 3
    },
    {
        id: "furn-3",
        name: "Inflatable Bed",
        description: "self-inflating, highly-compressed mattress package. About 6\"x2\"x4\" folded.",
        cost: 25,
        weigth: 3
    },
    {
        id: "furn-4",
        name: "Futon",
        description: "Portable folding bed and pad; of Japanese origin.",
        cost: 90,
        weigth: 3
    },
    {
        id: "furn-5",
        name: "Real wood furniture (1 piece)",
        description: "what more can we say?",
        cost: 200,
        weigth: 10
    },
    {
        id: "furn-6",
        name: "Synthetic furniture (1 piece)",
        description: "what more can we say?",
        cost: 100,
        weigth: 10
    },
    {
        id: "furn-7",
        name: "Apartment Cube",
        description: "10\"x10\"x8\" living module in which all major furnishings and appliances are hidden in flush wall recesses and are extended only for use. Contains bed, closet, small stove, refrigerator, TV and digital entertainment center, two chain, fold down desk, removable table. Rolls into place and can be easily transported. Cubes are usually so small that if you had all your furnishings extended at once, there'd be no room for you to stand!",
        cost: 5000
    },
    {
        id: "furn-8",
        name: "Lamp",
        description: "It gives light. Comes in an infinity of shapes and colors.",
        cost: 20,
        weigth: 1
    },
    {
        id: "furn-9",
        name: "Cleaning bot",
        description: "Small preprogrammed robotic cleaning device. Usually about the size of a portable cannister vacuum. Not too smart.",
        cost: 1000,
        weigth: 3
    },
    {
        id: "furn-10",
        name: "Vocal Switcher System",
        description: "Voice-activated controls for light and appliances.",
        cost: 100
    },
].map(i => ({ ...i, type: "furnishing" }));

export const vehiclesItems: Item[] = [
    {
        id: "vehicle-1",
        name: "Scooter",
        description: " this is an updated, electrically powered version of the old Riva and Vespa motoscooters of the 1990's. Top speed about 50mph, scooters can get about 6 hours of travel per fastcharge (about 5 minutes at any service station).",
        cost: 500
    },
    {
        id: "vehicle-2",
        name: "Motorcycle",
        description: " these are updated versions of standard motorcycles. Most are recumbent designs, with plastic farings that close over the driver. About half are electrically powered. with top speeds of 65mph and about 8 hours travel per fastcharge. CHOOH2 powered versions have a top end of 140mph and a tour gallon tank.",
        cost: 1500
    },
    {
        id: "vehicle-3",
        name: "CityCar",
        description: "one man (two in a pinch), three wheelers common in the Corporate Zones. Top speed about 40mph, with 4 hours travel per fastcharge. CityCars can also be rented (2$ per mile) from convenient kiosks located around most corporate areas; you use your debit card to rent from the vendor, drive where you want, and drop the car off at the nearest vendor.",
        cost: 2000
    },
    {
        id: "vehicle-4",
        name: "Small Subcompact",
        description: "usually methanol or CHOOH2 powered, these vehicles have a top speed of around 90mph, a ten gallon tank and seat four in relative comfort.",
        cost: 6000
    },
    {
        id: "vehicle-5",
        name: "Medium Sedan",
        description: "methanol or CHOOH2 powered, these vehicles have a top speed of around 90mph, a fifteen gallon tank and seat lour.",
        cost: 10000
    },
    {
        id: "vehicle-6",
        name: "Sportscar",
        description: "almost always CHOOH2 powered (electrics just don't have the speed). Top speed about 210, with a ten gallon tank. Seals 2.",
        cost: 20000
    },
    {
        id: "vehicle-7",
        name: "Luxury Sedan",
        description: "methanol or CHOOH2 powered, these vehicles have a top speed of around 90mph, a twenty gallon tank and seat six.",
        cost: 40000
    },
    {
        id: "vehicle-8",
        name: "Faitcharge (1 charge)",
        description: "rapid (5 minutes) battery-recharge for electric vehicles. Available at most service stations for 20eb per charge.",
        cost: 20
    },
    {
        id: "vehicle-7",
        name: "CHOOH2 (1 gallon)",
        description: "synthetic meta-alcohol fuel. About 1D6/3+1 euro per gallon (the cost fluctuates wildly due to supply, demand and eco-terrorist activities).",
        cost: 3
    },
].map(i => ({ ...i, type: "vehicle" }));

export const lifestyleItems: Item[] = [
    {
        id: "lifestyle-1",
        name: "Cell Phone Service (1 month)",
        description: "",
        cost: 100
    },
    {
        id: "lifestyle-2",
        name: "Standard Phone Service (1 month)",
        description: "",
        cost: 30
    },
    {
        id: "lifestyle-3",
        name: "Pay Phone Call (1 minute)",
        description: "",
        cost: 0.5
    },
    {
        id: "lifestyle-4",
        name: "Data Term use (1 minute)",
        description: "",
        cost: 1
    },
    {
        id: "lifestyle-5",
        name: "CredChip Account (1 month)",
        description: "A \"debit card\" that you use to carry your cash around in instead of a wallet.",
        cost: 20
    },
    {
        id: "lifestyle-6",
        name: "Health Plan",
        description: "",
        cost: 1000
    },
    {
        id: "lifestyle-7",
        name: "Trauma Team Acct. (1 month)",
        description: "",
        cost: 500
    },
    {
        id: "lifestyle-8",
        name: "Air (1 minute)",
        description: "just what it says. In the U.S., Britain, and some parts of Eastern Europe, the daily pollution gets so bad that you need to go to a miscellany of \"air bars\", vendors, or streetcornes machines to buy a decent breath.",
        cost: 5
    },
    {
        id: "lifestyle-9",
        name: "Mag Lev Chit (1 station)",
        description: "",
        cost: 0.25
    },
    {
        id: "lifestyle-10",
        name: "Taxi (1 mile)",
        description: "",
        cost: 3
    },
    {
        id: "lifestyle-11",
        name: "AV-Taxi (1 mile)",
        description: "",
        cost: 10
    },
    {
        id: "lifestyle-12",
        name: "Cable TV",
        description: "",
        cost: 40
    }
].map(i => ({ ...i, type: "lifestyle" }));

export const groceriesItems: Item[] = [
    {
        id: "groceries-1",
        name: "Kibble (per week)",
        description: "a mass-produced nutrient that satisfies most requirements for sustenance, but tends to look, smell, and taste like the dry pet food it takes its name from.",
        cost: 50,
        weigth: 1
    },
    {
        id: "groceries-2",
        name: "Generic Prepak (per week)",
        description: "a step up from the common TV dinner, these meal packs can be microwaved or refrigerated depending on what's inside. Many come with their own chemtabs for heating of cooling. The cuisine isn't inspired, but it beats kibble.",
        cost: 150,
        weigth: 3
    },
    {
        id: "groceries-3",
        name: "Good Prepak (per week)",
        description: "good restaurant meals in a package. The best quality pre-made meals you're going to find. For anything better, eat out, or prep it yourself (and who really knows how to do that anymore?).",
        cost: 200,
        weigth: 3
    },
    {
        id: "groceries-4",
        name: "Fresh food (per week)",
        description: "you know what that is. Well. at least you've met someone who's eaten it.",
        cost: 300,
        weigth: 3
    },
].map(i => ({ ...i, type: "grocery" }));


const baseHousing = [
    {
        id: "housing-1",
        name: "Coffin (1 night)",
        description: "one step up from a sleeping bag on the street. A stacked accommodation which resembles its namesake, these sleeping boxes are found in airports and flophouses worldwide. Usually coin-operated with a time limit, the coffin gives you just enough room to turn around or read in bed: restroom accommodations to be found elsewhere. More expensive models will have a phone or mini-TV inside.",
        cost: 20
    },
    {
        id: "housing-2",
        name: "Hotel Room (1 night)",
        description: "",
        cost: 100
    },
    {
        id: "housing-3",
        name: "Apartment 1 bedroom (1 month)",
        description: "",
        cost: 200
    },
    {
        id: "housing-4",
        name: "House  (1 month)",
        description: "",
        cost: 200
    }
];

export const housingItems: Item[] = [
    ...baseHousing.map(h => ({
        id: h.id + "-combat-zone",
        name: h.name + " combat zone",
        description: "",
        cost: h.cost
    })),
    ...baseHousing.map(h => ({
        id: h.id + "-moderate-zone",
        name: h.name + " moderate zone",
        description: "",
        cost: h.cost * 2
    })),
    ...baseHousing.map(h => ({
        id: h.id + "-corporate-zone",
        name: h.name + " corporate zone",
        description: "",
        cost: h.cost * 4
    })),
    ...baseHousing.map(h => ({
        id: h.id + "-executive-zone",
        name: h.name + " executive zone",
        description: "",
        cost: h.cost * 6
    }))
].map(i => ({ ...i, type: "grocery" }));;;

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
    housing: housingItems,
    cyberdeck: cyberdeckList,
    cyberdeckOption: cyberdeckOptions,
    program: programList
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
    ...housingItems,
    ...cyberdeckList,
    ...cyberdeckOptions,
    ...programList
].reduce(byId, {});