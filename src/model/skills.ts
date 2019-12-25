import { StatIds } from "./statistics";
import { Roles, RoleIds } from "./role";

export type SkillDetail = {
    id: string;
    title: string;
    description: string;
    stat?: StatIds;
    special?: Roles;
    career: Roles[];
};

export const specialSkillsDetails = [
    {
        id: "authority",
        title: "Authority",
        description: `The ability to intimidate and control others through your position as Lawmen. This attribute represents the Cop's ability to call on the forces of the Law and Government to get what he wants. Cops can use Authority to question suspects, arrest wrongdoers, and defend innocents. Backed by the power of Authority, a cop can arrest, detain, confiscate and enter nearly anywhere, as long as he has the proper arrest or search warrants to back his play. However, authority is only as good as guy holding badge - if the cop appears uncertain of his Authority there's a good chance he'll get nailed by the people his trying to confront, the more able you are to face down criminals, particularity high level mobsters and officials. Authority is applied to your Cool stat.`,
        special: RoleIds.cop,
        career: [RoleIds.cop]
    },
    {
        id: "charismaticLeadership",
        title: "Charismatic Leadership",
        description: `This skill allows the Rocker to sway crowds equal to his level squared time 200. This ability (added to your Cool stat) allows the Rockerboy to control, incite and charm large number of people through his or her performance skills. When under the Rocker's control, this group can easily be persuaded to act on his suggestion; for example, a Rocker could convince a concert crowd to riot in the streets or attack a heavily fortified police line. Charismatic Leadership will only work with groups of ten or more people as it is primarily a mob leadership ability. The higher your Charismatic Leadership, the larger a crowd you can control and the more direct and complex the instructions you can get them to follow. For example, a Level +3 Leadership could incite a nightclub crowd to get rowdy. A Level +5 or +6 could provoke a concert crowd of thousands to trash a neighborhood, if the area wasn't too far from hall. At Level +9, and higher, you have the same sort of mesmeric ability as an Adolph Hitler - you can raise armies, start movements. And destroy nations.`,
        special: RoleIds.rockerboy,
        career: [RoleIds.rockerboy]
    },
    {
        id: "combatSense",
        title: "Combat Sense",
        description: `This ability is based on Solo's constant training and professionalism. Combat Sense allows the Solo to perceive danger, notice traps, and have an almost unearthly ability to avoid harm. Your Combat Sense gives you a bonus on both your Awareness skill and your Initiative equal to your level in the Combat Sense skill.        `,
        special: RoleIds.solo,
        career: [RoleIds.solo]
    },
    {
        id: "credibility",
        title: "Credibility",
        description: `This is the ability to be believed: by your viewers, by the police, by important and powerful people. This is critical to getting your story heard and acted upon, as well as convincing people to tell you things, give you information, or get you into where the story really happening. The higher your Credibility, the more people you can convince, and the easier it to convince high level authorities of the truth of your information. With level +3 Credibility, you can convince most people of minor scandals. With a level +5 or +6 you can convince local officials of military atrocities, undercover dealings and other front page stuff. At level +9, you can successfully expose a scandal of Watergate proportions, or convince the President of the EuroMarket Finance Board that aliens are secretly influencing world leaders. Credibility applies to your INT stat.`,
        special: RoleIds.media,
        career: [RoleIds.media]
    },
    {
        id: "family",
        title: "Family",
        description: `This is the ability to call upon the resources and help of any of the members of the Nomad's large, extended tribal family. This can be in the form of weapons, cash, information, or a small army of relatives. The threat of a Nomad family's vengeance may in itself stop harm to the Nomad. The higher your Family ability, the more important you are to the Family and the more help you can call upon. With a Family status +2, you might be able to get several of the Pack to help you wreck a town, for example. With a status +7 or +8, you are able to make major Pack decisions and lead troops. At +10, you may be the Leader of your Pack. Family is applied to your Intelligence stat.`,
        special: RoleIds.nomad,
        career: [RoleIds.nomad]
    },
    {
        id: "interface",
        title: "Interface",
        description: `This skill reflects the Netrunner's ability to manipulate Interface programs, and is the Skill used when operating Menu functions such as Locate Remote, Downlink, Load, create and Delete. Others players can enter the Net, but cannot use the Menu. Note for Cyberpunk I players - you may elect to swap your original INT and REF stats for characters generated with the old rule.`,
        special: RoleIds.netrunner,
        career: [RoleIds.netrunner]
    },
    {
        id: "combatSense",
        title: "Combat Sense",
        description: ``,
        stat: StatIds.reflexes,
        special: RoleIds.nomad,
        career: []
    },
    {
        id: "juryRig",
        title: "Jury Rig",
        description: `This general repair skill allows the Techie to temporarily repair or alter anything for 1D6 turns per level; after the elapsed time, the jury rig will break down.`,
        special: RoleIds.techie,
        career: [RoleIds.techie]
    },
    {
        id: "medicalTech",
        title: "Medical Tech",
        description: `This is the skill used to perform major surgery and medical repairs.`,
        special: RoleIds.medtechie,
        career: [RoleIds.medtechie]
    },
    {
        id: "resources",
        title: "Resources",
        description: `This represents the Corporate's ability to command corporation resources. It is used as a persuasion skill, based on the scale of resources requested. This could include bodyguards, weapons, vehicles, buildings, money, etc. Obviously, the more powerful the Corporate, the more he can call upon at any one time. Your level of Resources determines exactly how much you can request from the Corporation without overreaching yourself. A Resource ability +2 might get you access to a Company car. An ability of +6 might allow you to use the Corporate Security Division. A Resources of +9 would allow you access to almost all levels of the Corporation, as well as the ability to requisition almost any Company resource. Your Resource ability is applied to your INT stat.`,
        special: RoleIds.corporate,
        career: [RoleIds.corporate]
    },
    {
        id: "streetDeal",
        title: "Street Deal",
        description: `This is the ability to deal with the underground information network. With Streetdeal, a Fixer can uncover rumors and information, locate missing persons or things, put gossip out on the Street, pick up clues and score big deals. The higher your Streetdeal ability, the more information you can gather about things happening around you, the more informants you have, and the more secretive the information you can dig up. A level +3 Streetdeal can get you contacts for weapons, tools, or minor illegal operations. At level +5, you can penetrate the secrets of all but the more powerful crime families. At level +9, you are the equivalent of a Mafia crimelord yourself, privy to every secret that's on the Street. Apply Streetdeal to your Cool stat.`,
        special: RoleIds.fixer,
        career: [RoleIds.fixer]
    }
];

export const attrSkills: SkillDetail[] = [
    {
        id: "personalGrooming",
        title: "Personal Grooming",
        description: `This is the skill of knowing proper grooming, hair styling, etc., to maximize your physical attractiveness. Use of this skill allows players to increase their Attractiveness, and thus their chances of successful Relationships or Persuasion. A basically good looking person would be at +2. A fashion model might have a Personal Grooming of +5 or +6. At +8 or better, you could be major fashion model, film star, or trendsetter. You are always "together". And know it.`,
        stat: StatIds.attractiveness,
        career: [RoleIds.corporate]
    },
    {
        id: "wardrobeAndStyle",
        title: "Wardrobe and Style",
        description: `The skill of knowing the right clothes to wear, when to wear them, and how to look cool even in a spacesuit. With Wardrobe +2 or better, you are good at choosing clothes off the rack. At +6, your friends ask you for wardrobe tips, and you never buy anything off the rack. At +8 or better, you are one of those rare people whose personal style influences major fashion trends.`,
        stat: StatIds.attractiveness,
        career: [RoleIds.corporate, RoleIds.rockerboy]
    }
];

export const bodySkills: SkillDetail[] = [
    {
        id: "endurance",
        title: "Endurance",
        description: `This is the ability to withstand pain or hardship, particularly over long periods of time, by knowing the best ways to conserve strength and energy. Endurance Skill checks would be made whenever a character must continue to be active a long period without food, sleep or water.        `,
        stat: StatIds.bodyType,
        career: [RoleIds.nomad]
    },
    {
        id: "strengthFeat",
        title: "Strength Feat",
        description: `The user of this skill has practiced the art of bending bars, crushing objects, ripping phone books apart and other useful parlor tricks. At +3, no phonebook is safe, you can bend thin rebar, and snap handcuffs. At +10, you can bend prison bars, rip up the Gutenberg Bible, and dept car fenders with one blow.`,
        stat: StatIds.bodyType,
        career: []
    },
    {
        id: "swimming",
        title: "Swimming",
        description: `This skill is require to know how to swim`,
        stat: StatIds.bodyType,
        career: []
    }
];

export const coolSkills: SkillDetail[] = [
    {
        id: "interrogation",
        title: "Interrogation",
        description: `The skill of drawing information from subject and forcing his secrets into open An Interrogation of +2 or better will allow to infallible find out if your boyfriend is lying to you. A +5, you are professional level interrogator - equivalent to skilled detective grilling a suspect. Mike Wallace 60 Minutes has an Interrogation +9, allowing him to make even most powerful people squirm.`,
        stat: StatIds.cool,
        career: [RoleIds.cop]
    },
    {
        id: "intimidate",
        title: "Intimidate",
        description: `The skill of getting people to do what you want by forcing personality or physical coercion. At +3, you can frighten almost any typical citizen, politician or low-level thug. At +6, you can intimidate Sylvester Stallone or any moderate "tough guy". At +9, you could intimidate Arnold Schwarzenegger.`,
        stat: StatIds.cool,
        career: [RoleIds.fixer]
    },
    {
        id: "oratory",
        title: "Oratory",
        description: `The skill of public speaking. At +2, you can wing high school contests. At +6, you can be paid speech in public. At +10, you are capable of delivering a speech to rival Kennedy's "Ichn Bin Ein Berliner" or Lincoln's Gettysburgs Address. Rockers with Oratory Skill of +6 or better can add +1 when using their Charismatic Leadership ability.`,
        stat: StatIds.cool,
        career: []
    },
    {
        id: "resistTorture",
        title: "Resist Torture and Drugs",
        description: `Characters with this skill are especially toughened against interrogation, torture and mind control drugs. A successful use of this skill will automatically increase the difficulty of any Interrogation attempt made by another guy by one level.`,
        stat: StatIds.cool,
        career: []
    },
    {
        id: "streetwise",
        title: "Streetwise",
        description: `The knowledge of the "seamy" ways of life - where to get illegal and contraband things, how to talk to the criminal environment, and avoiding bad situations in bad neighborhoods. With Streetwise of +3 or better, you can get "hot" items, torture drugs, etc. A Streetwise of +5 would know you to arrange a murder contract, you know a few mobsters who might owe you, and be able to call on muscle when you need it. At +8 or better, you could become a major crimelord yourself and the middlemen.`,
        stat: StatIds.cool,
        career: [RoleIds.media, RoleIds.cop, RoleIds.rockerboy]
    }
];

export const empathySkills: SkillDetail[] = [
    {
        id: "humanPerception",
        title: "Human Perception",
        description: `The skill of detecting any evasions, moods and other emotional clues from others. At +2, you can usually feel when you're not getting the whole truth. At +6, you can detect subtle evasions and mood swings. At +8, you can not only detect subtle emotional clues, but can usually tell what the subject is hiding in a general way.`,
        stat: StatIds.empathy,
        career: [RoleIds.corporate, RoleIds.media, RoleIds.cop, RoleIds.medtechie]
    },
    {
        id: "interview",
        title: "Interview",
        description: `The skill of eliciting interesting anecdotes from interview subject. This information will be of a more non-specific and personal nature rather than specific knowledge (distinguishing this skill from the skill Interrogation, where the user is trying to extract exact information. (Example: Barbara Walters interviews, Mike Wallace interrogates). At +3 or better, the subject will usually tell you only information relating to what he/she is well known for. At +6 or better, the subject will tell you anecdotes about the past, pontificate about favorite interests and philosophies, etc. At +9 or better, he/she tells you everything - including personal information about their illegitimate son, the time they stole a cookie at age +4, and the fact that no one ever loved them.`,
        stat: StatIds.empathy,
        career: [RoleIds.media]
    },
    {
        id: "leadership",
        title: "Leadership",
        description: `The skill of leading and convincing people to follow you. A leader with a skill +2 can manage a small office successfully and be respected for it. A leader with skill +4 or better can lead a small band of troops into battle and not get backshot. A leader with a skill of +7 or better can lead entire Gamelon Empire into battle and look good doing it. James Kirk of Star Trek has a Leadership of +11, but you never will.`,
        stat: StatIds.empathy,
        career: []
    },
    {
        id: "seduction",
        title: "Seduction",
        description: `The skill of forming and maintaining romantic relationships (this includes your abilities as a lover). This skill may be used to determine whether or not players can form relationships with other non-players characters and the intensity of these relationships. In certain cases, Referees may want to average this skill with a player's Attractiveness to get a more realistic outcome.`,
        stat: StatIds.empathy,
        career: [RoleIds.rockerboy]
    },
    {
        id: "social",
        title: "Social",
        description: `The ability to deal with social situations, like knowing the right fork to use or when not to tell the joke about farmer's daughter and the travelling cyberware salesman. A Social skill of +2 or better will allow you to get by at any fine restaurant or social function. At +5, you can lunch with the President with aplomb. No social situation will faze you , no matter what. At +8 or above, you can lecture Emily Post on what's proper.`,
        stat: StatIds.empathy,
        career: [RoleIds.corporate, RoleIds.media]
    },
    {
        id: "persuasion",
        title: "Persuasion and Fast Talk",
        description: `The ability to talk others into doing what you want. This may be used individually or on large groups. At +3, you can win most debates or convince your girlfriend the blonde you were was your sister. At +5, you are a smooth talker of professional caliber. Ronald Reagan a Persuasion of +7. Hitler a Persuasion of +9.`,
        stat: StatIds.empathy,
        career: [RoleIds.corporate, RoleIds.media, RoleIds.rockerboy, RoleIds.fixer]
    },
    {
        id: "perform",
        title: "Perform",
        description: `The skill of trained acting, singing, etc. A trained performer of +4 or greater can successfully sing for payment at wedding or small clubs. Performers of +6 or greater will be considered to be of professional caliber, and may have lucrative contacts and fans. Performers of +9 or greater are of "star: caliber, have a large number of fans, and may be recognized on the street.`,
        stat: StatIds.empathy,
        career: [RoleIds.rockerboy]
    },
];

export const intSkills: SkillDetail[] = [
    {
        id: "accounting",
        title: "Accounting",
        description: `The ability to balance books (or create false books), juggle numbers, create budgets and handle day to day business operations.`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "anthropology",
        title: "Anthropology",
        description: `The knowledge of human cultures, habits and customs. Unlike Streetwise (which covers only the culture and customs of the Street), or Social (which covers only what you should do in a given situation), Anthropology covers general customs and background of a culture. For example, with Streetwise, you know what alleys to avoid and what gangs are dangerous. With Social, you know the proper forms of address for a high ranking Japanese zaibatsu head. With Anthropology, you know that the customs of a N'Tanga tribesman require that a young man kill a lion in order to be accepted as an adult male.`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "awarenessAndNotice",
        title: "Awareness and Notice",
        description: `This is equivalent of a "trained observer" skill, allowing characters to notice or be aware of clues, shadowers and other events. With an Awareness of +2 you will usually spot small pieces of paper with noted on them, doors left ajar , and obvious expressions of lying or dislike. An Awareness of +5 or better allows you to spot fairly well hidden clues, and fairly sophisticated attempts to "shadow" you. With an Awareness of +8 or greater, you routinely perform the sorts of deductive reasoning seen in the average TV cop show ("The murder was left handed because this knife has a specialized handle"). Sherlock Holmes has a +10 Awareness. Players without skill may only use their Intelligence Stat.`,
        stat: StatIds.intelligence,
        career: [
            RoleIds.solo,
            RoleIds.corporate,
            RoleIds.media,
            RoleIds.nomad,
            RoleIds.techie,
            RoleIds.cop,
            RoleIds.rockerboy,
            RoleIds.medtechie,
            RoleIds.fixer,
            RoleIds.netrunner
        ]
    },
    {
        id: "biology",
        title: "Biology",
        description: `General knowledge of animals, plants, and other biological systems. At level +3, you know most types of common animals, plats. At +6, you have a general understanding of genetics, cellular biology, etc. At +10, you can perform most bio-lab procedures, including gene mapping and splicing.`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "botany",
        title: "Botany",
        description: `The general knowledge of plant identification. At level +3, you know most common plats and can identify which ones are dangerous and why. At a +6, you can identify most important plants found worldwide and have a working knowledge of their uses. At +8, you have the equivalent of a doctorate in Botany and know rare poisons, exotic orchids and other useful plants.`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "chemistry",
        title: "Chemistry",
        description: `The required skill for mixing chemicals various compounds. A level +2 Chemistry is equal to high school chemistry. A level +4 is equal to a trained pharmacist or college level chemist. A +8 is a trained laboratory chemist.`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "composition",
        title: "Composition",
        description: `The required for writing songs, articles, or stories. A Composition Skill of +4 or greater gives your character the ability to produce salable work. A Skill of +8 or more produces work of such a high caliber that the creator may have a strong literary following and not a little critical acclaim.`,
        stat: StatIds.intelligence,
        career: [RoleIds.media, RoleIds.rockerboy, RoleIds.netrunner]
    },
    {
        id: "diagnoseIllness",
        title: "Diagnose Illness",
        description: `The skill of clinically diagnosing symptoms and medical problems. A +3 is the equivalent of a high school nurse - you can recognize most common injuries and complaints. At +6, you would be equivalent to a trained intern; you can recognize many uncommon illnesses and know how to treat most common ones. A +9 is equivalent to you to get a diagnosis.`,
        stat: StatIds.intelligence,
        career: [RoleIds.medtechie]
    },
    {
        id: "education",
        title: "Education and General Knowledge",
        description: `This skill is the equivalent of a basic public school education, allowing you to know how to read, write, use basic math, and know enough history to get by. In effect, it is a "lore" or trivaia skill. A level of +1 is a basic grade school education. A skill of +2 is equal to a high school equivalency. A Knowledge Skill of +3 is equal to a college education, +4 or higher is equal to a Masters or Doctorate. At +7, you are an extremely well-educated person, and are asked to play Trival Pursuit a lot. At +9 and above, you are one of those people who knows a lot about everything (and hopefully has the good sense to keep his mouth shut).`,
        stat: StatIds.intelligence,
        career: [RoleIds.corporate, RoleIds.media, RoleIds.techie, RoleIds.cop, RoleIds.medtechie, RoleIds.netrunner]
    },
    {
        id: "expert",
        title: "Expert",
        description: `You may use this skill to be an expert on one specific subject, such as rare postage stamps, obscure weapon, a foreign language, etc. At +3, you are the local expert. At +6, you know enough to publish a few books on the subject. At +8 or better, your books are recognized as major texts on the subject, and you could do the talk-show circuit if you wanted to.`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "gamble",
        title: "Gamble",
        description: `The skill on knowing how to make bets, figure odds, and play games of chance successfully. As any professional gambler knows, this is not a luck skill. At +2, you are the local card shark at the Saturday night poker game. At +6, you can make a living at the tables in Vegas and Monte Carlo. At +9 or better, you can take on James Bond at roulette and stand a good chance of breaking the bank.`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "geology",
        title: "Geology",
        description: `A functional knowledge of rocks, minerals and geologic structures. At +3, you can identify most common rocks and minerals. At +6, you have the equivalent of a college degree in Geology and can identify minerals and geological structures with ease. At +8, you can teach geology in high school.`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "hideEvade",
        title: "Hide / Evade",
        description: `The skill of losing pursuers, covering tracks and otherwise evading people on your trail. At +3, you can lose most boostergangers on the rampage. At +6, you can ditch cops and private eys. At +8, you can ditch most Solos.`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "history",
        title: "History",
        description: `The knowledge of facts and figures of past events. In game play, they might be used to determine if character is familiar with a particular clue related to a past event. At +2, you have the equivalent of grade school history education. At +6, you would have the equivalent of a college grasp on the subject. At +8, you could teach history in high school. At +9, you may have written a few of most often texts on a particular historic personage or epoch.`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "knowLanguage",
        title: "Know Language",
        description: `The knowledge of foreign tongue. At +2, you can "get by" with speaking the language. At +3, you can actually read a written from of it. At +6 and above, you are fairly fluent, although no naive will be fooled by your ability. At +8 and above, you speak and read language like a native.
        Each language known requires a separate Know Language Skill, however, one may use the knowledge of a particular Language with up to ? (round down) proficiency with any language in the same linguistic family (example: knowing Cantonese at +4 will give you the ability to understand and speak Mandarin at +2).`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "librarySearch",
        title: "Library Search",
        description: `The skill of using databases, DataTerm, libraries and other compiled information sources to find facts. With a skill of +2 you can use most simple databases. With a skill of +6, you can easily access the Library Congress. At +9, you can comprehend almost any public databases and find very obscure facts.`,
        stat: StatIds.intelligence,
        career: [RoleIds.corporate, RoleIds.medtechie]
    },
    {
        id: "mathematics",
        title: "Mathematics",
        description: `The skill of understanding calculations and mathematical formulas. At +3, you have ability to add, subtract, divide and multiply. At +4, you can do algebra and geometry. At +6, you can perform calculus. At +9, you can deduce your own mathematical formulas.`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "physics",
        title: "Physics",
        description: `The ability to calculate physical principles, such as gas pressures, mechanical energies, etc. This skill required basic Mathematics skill of +4.`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "programming",
        title: "Programming",
        description: `The required skill to write programs and re-program computer system. This skill does not allow players to actually do repairs on a computer (this requires Electronics). With a Programming Skill of +1, you can do simple EBASIC programs. A Programming Skill of +3 or better allows you to know some higher level languages and he able to write reasonably complex programs (including video games). Players with Programming Skill +6 or better are considered to be professionals, who can build operating software, design mainframe systems, and hold down a steady job at your average Silicon Valley firm. With a Programming Skill of +9 or better, other programmers speak your name with reverence ("You invented Q? Wow!"), young hackers set soft to crack your systems, and any computer software you design instantly gets used by every business application in wide world.`,
        stat: StatIds.intelligence,
        career: [RoleIds.netrunner]
    },
    {
        id: "shadowTrack",
        title: "Shadow / Track",
        description: `The skill of shadowing hid following people. This skill is primary used in urban or inhabited areas rather than in wilderness (where the skill of Survival incorporates tracking game in the wilds).`,
        stat: StatIds.intelligence,
        career: []
    },
    {
        id: "stockMarket",
        title: "Stock Market",
        description: `The ability to play the Stock Market, engage in routine stock transactions and manipulate stocks profitably. At +2, you know enough to invest a bunk bonds and lose your shit. At +6, your investments pay off 75% of the time. At +9, you are a major heavy on the market, routinely dabble in international stocks, and can write articles on one subject of investment.`,
        stat: StatIds.intelligence,
        career: [RoleIds.corporate]
    },
    {
        id: "systemKnowledge",
        title: "System Knowledge",
        description: `Basic knowledge of the geography of the Net, it's lore and history, as well as knowledge of the important computer systems, their strengths and their weaknesses. At +2, you can generally navigate around the Net and know where all the local places are. At +6, you know the locations of most places in the Net, and have a working understanding of its largest and most well know systems. At +9, you know the entire Net like the back of your hand, know the general layouts of the important systems cold, and are aware of the layouts for the rest of them.        `,
        stat: StatIds.intelligence,
        career: [RoleIds.netrunner]
    },
    {
        id: "teaching",
        title: "Teaching",
        description: `The skill of imparting knowledge to someone (if you don't think this is skill, you ought tot try is someone). Players may not teach any skill unless they have a higher skill level than a student. The referee is the final arbiter of how long it takes to teach a skill. At a Teaching Skill of +3 or better, you can professionally teach students up to High School. At +6, you know enough to be a college professor (if you want). At +9 or greater, you are recognized by others in the field as good enough to guest lecture at MIT or Cal Tech; your texts on the subject are quoted as a major references, and you might have a TV show on the equivalent of PBS channel.`,
        stat: StatIds.intelligence,
        career: [RoleIds.techie]
    },
    {
        id: "wildernessSurvival",
        title: "Wilderness Survival",
        description: `The required skill for knowing how to survive in the wilds. Knowledge includes how to set traps, forage for wood, track game, build shelters, make fires. The average Boy Scout has a Survival of +3. A special Forces Green Beret has a Survival of +6 or above. Crizzly Adams, Mountain Man of the Wilderness, would have +9 or +10 Survival Skill.`,
        stat: StatIds.intelligence,
        career: [RoleIds.nomad]
    },
    {
        id: "zoology",
        title: "Zoology",
        description: `Knowledge of lifeforms, biological processes and their relation to the environment. At +2, you know most common animals. At +5, you know not only well known animals, but also about many exotics and endangered species. At +8. You are knowledgeable well, and have +1 advantage to any Wilderness Survival Skills (you know where to find the game).`,
        stat: StatIds.intelligence,
        career: [RoleIds.medtechie]
    }
];


export const refSkills: SkillDetail[] = [
    {
        id: "archery",
        title: "Archery",
        description: `The skill required to use bows, crossbows and other arrow-based ranged weapons. `,
        stat: StatIds.reflexes,
        career: []
    },
    {
        id: "athletics",
        title: "Athletics",
        description: `This skill is required for accurate throwing, climbing, and balancing. It combines the basic elements of any high school level sports program. At +3 and above, you are the equivalent of a real high school "jock". At +5 and above, you can perform in college level competitions. At +8 and above, you are of Olympic or Professional caliber.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo, RoleIds.nomad, RoleIds.cop]
    },
    {
        id: "brawling",
        title: "Brawling",
        description: `The skill of fighting man to man with fist, feet and other parts of the body. Brawling is not a trained skill - it is learned on the Street by getting into a lot of fights. Unlike Martial Arts, there are no specialized attacks and no damage bonuses based on level of mastery.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo, RoleIds.nomad, RoleIds.cop, RoleIds.rockerboy, RoleIds.fixer]
    },
    {
        id: "dance",
        title: "Dance",
        description: `The specific skill needed to become a professional dancer. A trained dancer +4 or greater can successfully dance for payment in small clubs or dance troupes. Dancers +6 or greater will be considered to professional caliber, and regularly give performances and have fans. Dancers +9 or greater are of "star" caliber, have a large number of fans, and may be recognized on the street.`,
        stat: StatIds.reflexes,
        career: []
    },
    {
        id: "dodgeAndEscape",
        title: "Dodge and Escape",
        description: `This is skill is required to dodge attacks and escape grapples and holds. If an attack is made without your knowledge, you may not apply this skill to your Defense roll.`,
        stat: StatIds.reflexes,
        career: []
    },
    {
        id: "driving",
        title: "Driving",
        description: `This skill allows you to pilot all ground vehicles like cars, trucks, tanks and hovercraft. This skill is not usable for piloting aircraft. A skill +3 is equal to that of a very good non-professional driver. A skill of +6 allows you to drive with the skill of a moderately skilled race driver. An driver with skill of +8 or greater will be nationally ship races, and possibly have access to the most advanced ground vehicles available (as long as he makes an endorsement).`,
        stat: StatIds.reflexes,
        career: [RoleIds.nomad]
    },
    {
        id: "fencing",
        title: "Fencing",
        description: `The mastery of swords, rapiers and monoblades. A Fencing Skill of +3 allows you to be competent with a blade. A Skill of +5 makes you fairly skilled. A Fencing Skill of +6 might win you the National Fencing Competitions. A Skill of +8 will get you a reputation for being a true swordsman of duelist caliber. People like D'Artagnan or Miymoto Musashi have Skill of +10. They are legendary masters of the blade; the mention of whom will cause all but the stupidest young bravo to run for cover.`,
        stat: StatIds.reflexes,
        career: []
    },
    {
        id: "handgun",
        title: "Handgun",
        description: `You must have this skill to effectively use handguns of any type, including cyberware types. At +2, you ca use a handgun on a target range, through combat will still rattle you. At +5, you are as skilled as most military officers of fancy shooting you see on TV, and have begun to get a reputation of being "good with gun". A +8, you are a recognized gunslinger with a "rep". The very sound of your name makes some people back down in fear. At +10, you are a legendary gunslinger, feared by all except the stupid young punks who keep trying to "take" you in innumerable gunfight challenges.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo, RoleIds.cop, RoleIds.fixer]
    },
    {
        id: "heavyWeapons",
        title: "Heavy Weapons",
        description: `The required skill for using grenade launchers, autocannon, mortars, heavy machine guns, missiles and rocket launchers. A level +5 skill would be equivalent to a general military "Heavy Weapons" training course, giving the user the ability to use any or all of these weapon types.`,
        stat: StatIds.reflexes,
        career: []
    },
    {
        id: "aikido",
        title: "Aikido",
        description: `This form relies on using the opponent's strength and momentum against him. It is a perfect form for stopping an opponent peacefully while making yourself very hard to hit. Key attacks are: blocks & parries, dodges, throws, holds, escapes, chokes, sweeps, trips & sweeps, grapples.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo]
    },
    {
        id: "animalKungFu",
        title: "Animal Kung Fu",
        description: `There are forms based on animal movements, such as crane, mantis, tiger, leopard and dragon forms. These attacks are fast and dangerous, with a style that is exciting and flashy. Key attacks include: strikes, punches, kicks, blocks & parries, sweeps & trips.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo]
    },
    {
        id: "boxing",
        title: "Boxing",
        description: `The manly art of fisticuffs, this form delivers lightning punches and tight blocking defense. Key attacks are: punches, blocks & parries.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo]
    },
    {
        id: "capoeira",
        title: "Capoeira",
        description: `Created by Caribbean slaves, this form combines dancelike movements with fast kicks and low line sweeps. It is a relatively unknown form and can be combined with dance moves to disguise it's true power. Key attacks are: punches, kicks, blocks & parries, dodges, and sweeps & trips.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo]
    },
    {
        id: "choiLiFut",
        title: "Choi Li Fut",
        description: `Descended directly form the ancient Shaolin temples, this form combines powerful roundhouse blows and sweeping kicks into dynamic fighting style. Key attacks are: strikes, punches, kicks, blocks & parries, dodges, throws, and sweeps & trips.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo]
    },
    {
        id: "judo",
        title: "Judo",
        description: `This system was designed as a sport form, but is very effective in combat as well. It uses throws and sweeps to knock down the opponent. Key attacks include dodges, throws, holds, escape sweeps & trips and grappling.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo]
    },
    {
        id: "karate",
        title: "Karate",
        description: `The Japanese version of kung fu, this style uses straight line movements and powerful blows. Variations include shotokan and kenpo, each with their own special moves. Key attacks are: punches, kicks, and blocks & parries.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo]
    },
    {
        id: "taeKwonDo",
        title: "Tae Kwon Do",
        description: `A very fast and precise form, with graceful movements and some aerial kicks. Key attacks include: strikes, punches, kicks, blocks & parries, dodges.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo]
    },
    {
        id: "thaiKickBoxing",
        title: "Thai Kick Boxing",
        description: `One of the deadliest form in existence, this style is known for blinding kicks delivered with incredible power. Key moves include: strikes, punches, kicks, blocks & parries.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo]
    },
    {
        id: "wrestling",
        title: "Wrestling",
        description: `This form combines techniques of Olympic and Professional wrestling. The style uses a wide variety of throws and holds to incapacitate the opponent. Key attacks include: throws, holds, escapes, chokes, sweeps, trips, and grapple.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo]
    },
    {
        id: "melee",
        title: "Melee",
        description: `The ability to use knives, axes, clubs and other hand to hand weapons in combat. Note: when using non-ranged cyberweapons such as rippers, scratchers, slice n'dices, cyberbeasts, and battlegloves, you must use this skill.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo, RoleIds.nomad, RoleIds.cop, RoleIds.fixer]
    },
    {
        id: "motorcycle",
        title: "Motorcycle",
        description: `The required skill to operate motorcycles, cyberbikes, and other two and three-wheeled vehicles.        `,
        stat: StatIds.reflexes,
        career: []
    },
    {
        id: "operateHeavyMachinery",
        title: "Operate Heavy Machinery",
        description: `The required skill to operate tractors, tanks, very large trucks and construction equipment.`,
        stat: StatIds.reflexes,
        career: []
    },
    {
        id: "gyroPilot",
        title: "Gyro Pilot",
        description: `The ability to pilot all types of rotorwing aircraft, including gyros, copters and Ospreys.`,
        stat: StatIds.reflexes,
        career: []
    },
    {
        id: "fixedWingPilot",
        title: "Fixed Wing Pilot",
        description: `The ability to pilot fixed wing jets and light aircraft. Ospreys may be flown with this skill, but not only in the straight ahead (non-hover) mode.        `,
        stat: StatIds.reflexes,
        career: []
    },
    {
        id: "dirigiblePilot",
        title: "Dirigible Pilot",
        description: `The ability to pilot all lighter than air vehicles, including cargo dirigibles, blimps and powered balloons.`,
        stat: StatIds.reflexes,
        career: []
    },
    {
        id: "vectThrustPilot",
        title: "Vectored Thrust Pilot",
        description: `The skill of piloting all types of vectored thrust vehicles, and AV-4, 6 and 7 vehicles.`,
        stat: StatIds.reflexes,
        career: []
    },
    {
        id: "rifle",
        title: "Rifle",
        description: `You must have this skill to use riffle/shotguns effectively`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo, RoleIds.nomad]
    },
    {
        id: "stealth",
        title: "Stealth",
        description: `The skill of hiding in shadows, moving silently, evading guards, etc. A Stealth Skill of +1 is about the level of a very sneaky 10 year old stealing cookies. At +3, you are able to get past most guards, or your parents if you've been grounded. At +6, you are good enough to slip smoothly from shadow and not make any noise. At +8, you are the equal of most Ninja warriors. At +10, you move as silently as a shadow, making the Ninja sound like elephants.`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo]
    },
    {
        id: "submachinegun",
        title: "Submachinegun",
        description: `You must have this skill to use any type of submachine gun effectively`,
        stat: StatIds.reflexes,
        career: [RoleIds.solo]
    },
];
export const techSkills: SkillDetail[] = [
    {
        id: "aeroTech",
        title: "AeroTech",
        description: `The required skill for repairing fixed wing aircraft, including Ospreys, jets, and light aircraft. With a Skill of +3, you can perform most routine maintenance tasks. With a Skill of +6, you can do engine tear downs and major structural repairs. With a Skill +9 or better you are capable of designing and building your own aircraft.`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.techie]
    },
    {
        id: "avTech",
        title: "AV Tech",
        description: `The required skill for repairing all ducted fan aerodyne vehicles. At +3, you can perform routine maintenance. At +6, you can tear down engines and modify an AV. At +10, you can design your own AVs on common airframes.`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.techie]
    },
    {
        id: "basicTech",
        title: "Basic Tech",
        description: `The required skill for building or repairing simple mechanical and electrical devices, such as car engines, television sets, etc. With a Basic Tech Skill of +3, or better, you can fix minor car problems, repair basic wiring, etc. A Basic Tech Skill of +6 or better can repair stereos and TVs, rebuild an engine, etc. A Basic Tech Skill of +9 or better can build a simple computer from scratch, put together a race car engine, and maintain any kind of industrial machinery. However, they do not know enough specialized knowledge to apply it to complex things such as aircraft (just like Mr. Goodwrench) doesn't know how to build and service an F-16).`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.nomad, RoleIds.techie, RoleIds.medtechie, RoleIds.netrunner]
    },
    {
        id: "cryoTankOperation",
        title: "Cryotank Operation",
        description: `The required skill for operating, repairing and maintaining life suspension and body chilling devices. A minimum skill of +4 is required to chill down a healthy person. A minimum skill of +6 for chilling a wounded person.`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.medtechie]
    },
    {
        id: "cyberdeckDesign",
        title: "Cyberdeck Design",
        description: `The required skill for designing cyberdecks. At level +4, you can modify an existing cyberdeck for greater speed or memory. At level +6, you can design a deck equal to most existing designs. At +8, you can design decks that are substantially improved over existing designs.`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.netrunner]
    },
    {
        id: "cyberTech",
        title: "Cyber Tech",
        description: `The required skill for repairing and maintaining cyberware. At level +2, you can keep your cyberware turned up and replace its power batteries. At level +6, you can strip down most cyberware and even make simple modifications. At level +8, you can design your own cyberware to order.`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.techie, RoleIds.netrunner]
    },
    {
        id: "demolitions",
        title: "Demolitions",
        description: `This skill allows the character to be knowledgeable in the use of explosives, as well as knowing the best explosives to use for which jobs, how to set times and detonators, and how much explosives to use to accomplish a desired result.`,
        stat: StatIds.technicalAbility,
        career: []
    },
    {
        id: "disguise",
        title: "Disguise",
        description: `The skill of disguising your character to resemble someone else, whether real or fictitious. This skill incorporates elements of both makeup and acting, although it is not the same as the ability to actually be an actor.`,
        stat: StatIds.technicalAbility,
        career: []
    },
    {
        id: "electronics",
        title: "Electronics",
        description: `The required skill for maintaining, repairing and modifying electronic instruments such as computers, personal electronics hardware, electronic security systems, cameras and monitors.`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.techie, RoleIds.netrunner]
    },
    {
        id: "electSecurity",
        title: "Elect. Security",
        description: `The skill of installing or countering electronic eyes, electronic locks, bugs and tracers, security cameras, pressure plates, etc. At level +3, you can jimmy or install most apartment locks and security cams. At +6, you can override most corporate office locks and traps. At +9, you can enter most high security area with impunity.`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.techie]
    },
    {
        id: "firstAid",
        title: "First Aid",
        description: `This skill allows the user to bind wounds, stop bleeding, and revive a stunned patients`,
        stat: StatIds.technicalAbility,
        career: []
    },
    {
        id: "forgery",
        title: "Forgery",
        description: `The skill of copying and creating false documents and identifications. This skill Forgery also be applied to the detection of same; if you can fake it, you can usually tell a fake as well.`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.fixer]
    },
    {
        id: "gyroTech",
        title: "Gyro Tech",
        description: `The skill or repairing and maintaining rotorwing aircraft such as helicopters and gyrocopters.`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.techie]
    },
    {
        id: "paintOrDraw",
        title: "Paint or Draw",
        description: `The skill of producing professional drawings. A skill of +3 allows you to produce salable "modern" art. A Skill of +6will produce artwork that is recognized end extremely pleasant to eye - as well as salable. An artist with a Skill of +8 or greater will be nationally known, have exhibitions in galleries, and have other lesser artists studying his style in art.`,
        stat: StatIds.technicalAbility,
        career: []
    },
    {
        id: "photoAndFilm",
        title: "Photo and Film",
        description: `The skill of producing professional caliber photographs or motion pictures. A skill of +2 allows you to make decent home movies. A Skill +4 or better creates work capable of winning amateur contests. A Skill of +6 or better will produce work of the level of the average Playboy cover or rock video. A photographer or cinematographer with a Skill of +8 known and probably famous.`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.media]
    },
    {
        id: "pharmaceutical",
        title: "Pharmaceutical",
        description: `The skill of designing and manufacturing drugs and medicines. A minimum Chemistry skill of +4 is required. At +4, you can make aspirin. At +6, you can make hallucinogenic or antibiotics. At level +9 you can build designer drugs tailored to individual body chemistries.        `,
        stat: StatIds.technicalAbility,
        career: [RoleIds.medtechie]
    },
    {
        id: "pickLocks",
        title: "Pick Locks",
        description: `The skill required to pick locks and break into sealed containers and rooms. At +3, you can jimmy most simple locks. At +6 you can crack most safes. At +9 or better, you have a rep as master crackman, and are known to all the major players in the Cyberpunk world.`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.fixer]
    },
    {
        id: "pickPocket",
        title: "Pick Pocket",
        description: `The required skill for picking pockets without being noticed, as well as "shoplifting" small items. `,
        stat: StatIds.technicalAbility,
        career: [RoleIds.fixer]
    },
    {
        id: "playInstrument",
        title: "Play Instrument",
        description: `The skill of knowing how to play a musical instrument. You must take this skill separately for each type of instrument played. A skill of +4 or higher will qualify your character to play professional "gigs". A Skill of +8 and above will gain musician some professional acclaim, possibly with recording contracts and command performances. At +10, you are widely acclaimed, have lots of Grammys, and regularly jam with Kerry Eurodyne.`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.rockerboy]
    },
    {
        id: "weaponSmith",
        title: "Weapon Smith",
        description: `The required skill for repairing and maintaining weapons of all types. At level +2, you can do repairs and field stripping. At level +6, you can repair all types of weapons and make simple modifications. At level +8. You can design your own weapons to order.`,
        stat: StatIds.technicalAbility,
        career: [RoleIds.solo, RoleIds.techie]
    }
];

export const allSkillDetails: SkillDetail[] = [
    ...specialSkillsDetails,
    ...attrSkills,
    ...bodySkills,
    ...coolSkills,
    ...empathySkills,
    ...intSkills,
    ...refSkills,
    ...techSkills
];

export const skillTitlesMap = allSkillDetails.reduce((acc, curr) => {
    acc[curr.id] = curr.title;
    return acc;
}, {} as any);

export const skillStatMap = allSkillDetails.reduce((acc, curr) => {
    acc[curr.id] = curr.stat;
    return acc;
}, {} as any);

