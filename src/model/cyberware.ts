export type CyberSurgery = "n" | "m" | "ma" | "cr";

export type CyberType = "fashionware" | "neuralware" | "implants" |
    "bioware" | "cyberweapon" | "cyberoptic" | "cyberaudio" |
    "cyberlimb" | "cyberhand" | "cyberfoot" | "cyberlimbBuiltIns" | "cyberlimbWeapon" | "linearFrame" | "bodyPlating";

export type Cyberware = {
    id: string;
    name: string;
    description: string;
    surgery: CyberSurgery;
    type: CyberType;
    cost: number;
    humanityLoss: string;
};

export type CyberBodyPart = "neural" | "leftEye" | "rightEye" |
    "audio" | "rightLeg" | "leftLeg" | "rightArm" | "leftArm" | "other";

export type BodyPartDetail = {
    id: CyberBodyPart;
    name: string;
    menuLabel: string;
    description: string;
    type: CyberType | "";
    surgery: CyberSurgery;
    cost: number;
    humanityLoss: string;
};
