import { StatIds } from "./statistics";
import { Roles, RoleIds } from "./role";

export type SkillDetail = {
    id: string;
    title: string;
    description: string;
    stat?: StatIds;
    special?: Roles;
    isAttack?: boolean;
    career: Roles[];
};



