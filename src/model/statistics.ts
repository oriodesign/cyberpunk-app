export type StatDetail = {
    id: StatIds;
    title: string;
    description: string;
};

export type StatIds = "intelligence" | "reflexes" | "technicalAbility" |
    "cool" | "attractiveness" | "luck" | "movementAllowance" | "bodyType" | "empathy";

