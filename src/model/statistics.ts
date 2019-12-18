export type StatDetail = {
    id: StatIds;
    title: string;
    description: string;
};

export enum StatIds {
    intelligence = "intelligence",
    reflexes = "reflexes",
    technicalAbility = "technicalAbility",
    cool = "cool",
    attractiveness = "attractiveness",
    luck = "luck",
    movementAllowance = "movementAllowance",
    bodyType = "bodyType",
    empathy = "empathy"
};

export const statAbbr = {
    intelligence: "int",
    reflexes: "ref",
    technicalAbility: "tech",
    cool: "cool",
    attractiveness: "attr",
    luck: "luck",
    movementAllowance: "mov",
    bodyType: "body",
    empathy: "emp"
};

export const statisticsList: StatDetail[] = [
    {
        id: StatIds.intelligence,
        title: "Intelligence",
        description: "This is a measure of your problem solving ability; figuring out problems, noticing things, remembering information. Almost every character type will need a high intelligence, with Netrunnes and Corporates requiring the highest of all."
    },
    {
        id: StatIds.reflexes,
        title: "Reflexes",
        description: "This is a combined index, covering not only your basic dexterity, but also how your level of physical coordination will affect feats of driving, piloting, fighting and athletics. Characters who intend to engage in great deal of combat (such as Solos, Nomads, Rockerboys) should always invest in the highest possible Reflex."
    },
    {
        id: StatIds.technicalAbility,
        title: "Technical Abilities",
        description: "This is an index of how well you relate to hardware and other technically oriented things. In Cyberpunk, the ability to use and repair technology is of paramount impotence - TECH will be the Stat used when fxing, repairing and attempting to use unfamiliar tech. While all character should have a descent Tech Stat, potential Techies should always opt for the highest possible score in this area."
    },
    {
        id: StatIds.cool,
        title: "Cool",
        description: "This index measures how well the character stands up to stress, pressure, physical pain and/or torture. In determining your willingness to fight on despite wounds or your fighting ability under fire, Cool (CL) is essential. It is also the measure of how together your character is and how tough he appears to others. Rockerboys and Fixers should always have a high Cool with Solos and Nomads having the highest of all."
    },
    {
        id: StatIds.attractiveness,
        title: "Attractiveness",
        description: "This is how good-looking you are. In Cyberpunk, it's not enough to be good - you have to look good while you're doing it (Attitude vs Everything). Attractiveness is especially impotent to Medias and Rockerboys, as being good-looking is part of their jobs."
    },
    {
        id: StatIds.luck,
        title: "Luck",
        description: "This is the intangible something that throws the balance of events into your favor. Your luck represents how many points you may use each game to influence the outcome of critical event. To use Luck, you may add any or all the points of luck a character has to a critical die roll (declaring your inetntion to use Luck before the roll is made) until all of your Luck stat is used up. Luck is always restored at the end of each game session."
    },
    {
        id: StatIds.movementAllowance,
        title: "Movement Allowance",
        description: "This is index of how fast character can run."
    },
    {
        id: StatIds.bodyType,
        title: "Body type",
        description: "Strength, Endurance and Constitution are all based on the character's Body Type. Body Type determines how much damage you can take in wounds, how much you can lift or carry. How far you can throw, how well you recover from shock, and how much additional damage you cause with physical attacks. Body Type is important to all character types, but to Solos, Rockerboys and Nomads most of all."
    },
    {
        id: StatIds.empathy,
        title: "Empathy",
        description: "This Stat represent how well you relate to other living things - a measure of charisma and sympathetic emotions. In a world of alienated, future-shocked survivors, the ability to be human can no longer be taken for granted. Empathy (EM) is critical when leading, convincing, seducing or perceiving emotional undercurrents. Empathy is also a measure of how close he/she is to the line between feeling human being and cold blooded cyber-monster."
    }
];

export const statsTitlesMap = statisticsList.reduce((acc, curr) => {
    acc[curr.id] = curr.title;
    return acc;
}, {} as any);