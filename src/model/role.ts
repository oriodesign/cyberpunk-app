export type Role = {
    id: RoleIds;
    title: string;
    subtitle: string;
    description: string;
};

export enum RoleIds {
    rockerboy = "rockerboy",
    solo = "solo",
    netrunner = "netrunner",
    corporate = "corporate",
    techie = "techie",
    medtechie = "medtechie",
    cop = "cop",
    fixer = "fixer",
    media = "media",
    nomad = "nomad"
}



export const roles: Role[] = [
    {
        id: RoleIds.rockerboy,
        title: "Rockerboy",
        subtitle: "Rebel rockers who use music and revolt to fight autorities",
        description: `They are a lot like '80s punk rockers who look down on corporate "sellouts" 
        as the traitors to the craft. 
        Because they are so charismatic, they can sway, incite and charm a large number of people 
        through musical performances.`
    },
    {
        id: RoleIds.solo,
        title: "Solo",
        subtitle: "Hired hit-men, bodyguards, and mercenaries",
        description: `Due to their professionalism and constant training, 
        they have the ability to perceive danger, notice traps, and have an almost unearthly ability to avoid harm.`
    },
    {
        id: RoleIds.netrunner,
        title: "Netrunner",
        subtitle: "Cybernetic computer hackers",
        description: `Netrunners are the types of savvy computer hackers you would find in the movie Hackers,
         but with a cybernetically augmented interface system implanted into their body.
          Using their brain-computer interface implants, 
        they roam the Internet, looking for systems to hack and information to sell to Fixers. 
        Although anyone can enter the Net, most people can't use the "Menu." 
        The Menu is a group of Applications (Apps) that are Interface programs that allows a Netrunner 
        to Locate Remote, Run Software, Control Remote, LDL Link, Load, Create and Delete.`
    },
    {
        id: RoleIds.corporate,
        title: "Corporate",
        subtitle: "Slick business raiders and multi millionaires",
        description: `Corporates are the Armani-wearing, Machiavellian mega-yuppies you see in the RoboCop films. 
        Being wealthy and persuasive, they can muster favors and resources beyond what most people can even hope.`
    },
    {
        id: RoleIds.techie,
        title: "Techie",
        subtitle: "Renegate mechanics",
        description: `Techies range from technicians to cybernetic specialists. 
        They are usually underground techies, who do "off-the-record" work.`
    },
    {
        id: RoleIds.medtechie,
        title: "Medtechie",
        subtitle: "Renegate doctors",
        description: `Techies range from technicians to cybernetic specialists. 
        They are usually underground techies, who do "off-the-record" work.`
    },
    {
        id: RoleIds.cop,
        title: "Cop",
        subtitle: "Private detectives, beat cops and government agents",
        description: `As figures of authority, they have the ability to intimidate or control others through 
        their position as lawmen`
    },
    {
        id: RoleIds.fixer,
        title: "Fixer",
        subtitle: "Deal-makers, smugglers and information brokers",
        description: `Fixers are the well-connected fencers, smugglers, 
        and information brokers who apply their trade on the black market. 
        As they are so well-connected to comings and going on the streets, they can locate,
         acquire and know about a desired person, place or thing within their area of operation. 
         Protocol for exfiltration of payload from target ecosystem covers all traces through 
         decoys and fakes so as to maximize confusion.`
    },
    {
        id: RoleIds.media,
        title: "Media",
        subtitle: "Newsmen and reporter who go to the wall for the truth",
        description: `Media can range from desperate, attention-loving sensationalists to demagogues, 
        but the playable ones are usually the creditable and outspoken mavericks in a world overrun 
        by corporate-owned media straw-men. As long as they maintain their credibility as relevant journalists, 
        people believe what they are saying, even if there are no facts to back-up what they are saying.`
    },
    {
        id: RoleIds.nomad,
        title: "Nomad",
        subtitle: "Road warriors and gypsies who roam the highway",
        description: `Nomads were once corporate wage-slaves, who got fired and blackballed from employment, 
        and now they roam the highways as Gypsies and motor-gangs like something out of a Mad Max movie. 
        As life on the road is hard, they maintain strong family bonds. 
        If a Nomad is in trouble, he can count on members of his family to watch his back.`
    },
];

export const rolesTitlesMap: { [id: string]: string } = roles.reduce((acc, curr) => {
    acc[curr.id] = curr.title;
    return acc;
}, {} as any);