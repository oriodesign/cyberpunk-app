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
    "medical" | "furnishing" | "vehicle" | "lifestyle" | "grocery" | "housing" | "drug" |
    "cyberdeck" | "cyberdeckOption" | "program";

export type GearType = ItemType | WeaponType | "ammo" | "armor";

export type Item = {
    id: string;
    name: string;
    description?: string;
    cost: number;
    type: GearType;
    weight?: number;
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
    weight?: number;
};

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


