export type AttackType = "strike" | "kick" | "block" | "dodge" | "disarm" | "throw" | "hold" | "escape" | "choke" | "sweep" | "grapple";

export type MeleeAttack = {
    id: AttackType;
    name: string;
    description: string;
}
