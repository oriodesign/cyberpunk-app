import { Item, GearType } from "../model/gear";

export const cyberdeckList: Item[] = [
    {
        id: "deck-1",
        name: "Standard Cyberdeck",
        description: "Made of plastic. It has the size of a paperbook.",
        weight: 0.5,
        type: "cyberdeck",
        cost: 1000
    },
    {
        id: "deck-2",
        name: "Portable Deck",
        description: "These decks have internal, rechargeable power packs good for up to 4 hours (recharge is 1 hour for every hour of battery power). All combat, cyberlimb and cellular decks are of this type. A portable deck costs 2000eb.",
        weight: 0.5,
        type: "cyberdeck",
        cost: 2000
    },
    {
        id: "deck-3",
        name: "Cyberlimb Deck",
        description: "These are portable decks about the size of a pack of cigarettes. They can be installed into a cyberlimb (phone connection cables are jacked between the limb and the phone lines). The deck itself is hardwired right into the body along with the controlling links for the cyberlimb. This can be a very dangerous option - hardwired right in, it's impossible for your buddies to notice you frying and yank the cables on you. Instead, you just burn.",
        weight: 0.5,
        type: "cyberdeck",
        cost: 2000
    },
    {
        id: "deck-4",
        name: "Combat Assault Deck",
        description: "These decks are constructed of rugged ceramics and steel, capable of taking bullet hits and crash impacts (SP20). Most combat decks are designed to be portable, and have adapter cables which allow them to be plugged into any type of phone line. Around 3000 when available (a DIFFICULT Task).",
        weight: 0.5,
        type: "cyberdeck",
        cost: 3000
    },
    {
        id: "deck-5",
        name: "Cellular Deck",
        description: "These are portable decks designed to link up with a cellular phone net. They are very effective anywhere within a city, but are useless in rural areas (most have jacks for manual phone patches). A cellular deck has a 25% chance of losing cellular connection when used in a moving vehicle; a failed roll will automatically drop the Netrunner out of the Net. But it's a small price to pay for the high level of mobility offered by a cellular deck. A cellular deck costs 4000eb.",
        weight: 0.5,
        type: "cyberdeck",
        cost: 4000
    },
];



export const cyberdeckOptions: Item[] = [
    {
        id: "deck-option-1",
        name: "Extra Memory",
        type: "cyberdeckOption",
        description: "For an additional 5,000eb, you can purchase an additional memory for your deck. This improves your program power to 20 MU, double its stock size.",
        cost: 5000
    },
    ...[1, 2, 3, 4, 5].map(i => ({
        id: "deck-option-speed-" + i,
        name: "Speed +" + i,
        type: "cyberdeckOption" as GearType,
        description: "For an additional 2,000eb, you can increase your deck's speed by one level, up to a ceiling of 5. This can be a lifesaver, as deck speed determines who moves first in a Netrunner combat. And in this game, last is dead.",
        cost: 2000 * i
    })),
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({
        id: "deck-option-wall-" + i,
        name: "Data Wall +" + i,
        type: "cyberdeckOption" as GearType,
        description: "For an additional 1,000eb, you can increase your deck's data wall protection by one level, up to a ceiling of 10. Data walls are important; they are the armor of the deck, resisting attacks from anti-system programs.",
        cost: 1000 * i
    })),
    {
        id: "deck-option-2",
        name: "Trode Set",
        type: "cyberdeckOption",
        description: "They are self-sticking electrodes that allow you to run the Net without plugs. Trodes are slower than plugs (-2 to REF when in the Net), but have no humanity loss. They are commonly used by novice runners and by tourists visiting the Net on a lark.",
        cost: 10
    },
    {
        id: "deck-option-3",
        name: "Keyboard",
        type: "cyberdeckOption",
        description: "Keyboards are an option which allow a Netrunner to control a deck indirectly. They are abysmally slow (-4 to REF), but are immune to all anti-personnel attacks except Firestarter.",
        cost: 100
    },
    {
        id: "deck-option-4",
        name: "Videoboard",
        type: "cyberdeckOption",
        description: "Videoboards are flat screen, high definition TV monitors which can be used to show a Net's-eye view to outsiders.",
        cost: 100
    },
    {
        id: "deck-option-5",
        name: "Printer",
        type: "cyberdeckOption",
        description: "Printers allow you to make hardcopy images and records from your deck. Most are small laser-printers about the size of a large book, using plain paper.",
        cost: 300
    },
    {
        id: "deck-option-6",
        name: "Chipreader/recorder",
        type: "cyberdeckOption",
        description: "Chipreader/recorders use standard data chips (10eb each) to store programs, images and other useful things from your deck. They are about the size of a pack of cigarettes.",
        cost: 100
    },
    {
        id: "deck-option-7",
        name: "Voxbox",
        type: "cyberdeckOption",
        description: "VoxBoxes are small speaker units that can synthesize sound from a deck. They can also be used by the Netrunner to talk to outsiders while he's in the Net. About the size of a pack of smokes.",
        cost: 300
    },
    {
        id: "deck-option-8",
        name: "Scanner",
        type: "cyberdeckOption",
        description: "Scanners are flat plastic plates with optical character reading and image recording capacity. They range from the size of a sheet of paper, all the way up to a meter on a side.",
        cost: 300
    },
];

export const programList: Item[] = [
    // Intrusion
    {
        id: "prog-1",
        name: "Hammer",
        category: "intrusion",
        description: "Hammer pounds down data walls with a bombardment of raw electrical pulse (use code wall attack formula on pg. 142; weaken data wall Strength by 2D6 after every attack). It is very noisy and will automatically alert any defense program within 10 spaces.",
        strength: 4,
        mu: 1,
        cost: 400
    },
    {
        id: "prog-2",
        name: "Jackhammer",
        category: "intrusion",
        description: "Jackhammer is a quieter, but less powerful (weaken data wall 1D6 STR after attack) version of Hammer. It uses small pulses of energy to wear the data wall away.",
        strength: 2,
        mu: 2,
        cost: 360
    },
    {
        id: "prog-3",
        name: "Worm",
        category: "intrusion",
        description: "Worm is a very subtle program which emulates part of the architecture of the invaded system. It slips behind the data or code wall and opens it from the inside (2 turns, no alert).",
        strength: 2,
        mu: 5,
        cost: 660
    },
    // Decryption
    {
        id: "prog-4",
        name: "Codecracker",
        category: "decryption",
        description: "The Codecracker series, designed by Interfact Software in 2008, is classic code gate crack program. The series disassembles the code gate at the basic program, rather than trying to decipher the key.",
        strength: 3,
        mu: 2,
        cost: 380
    },
    {
        id: "prog-5",
        name: "Wizard's Book",
        category: "decryption",
        description: "The Wizard's Book is designed to scan through literally billions of possible codes and code words in seconds, trying each one in turn. It is especially effective (STR 6) against code gates.",
        strength: 4,
        mu: 2,
        cost: 400
    },
    {
        id: "prog-6",
        name: "Raffles",
        category: "decryption",
        description: "Raffles is designed specifically to deal with complex code gates and file locks which have a specific word as the key. It asks the code gate a series of innocuous and leading questions (\"Is it bigger than a breadbox?\" \"Is it hot or cold?\"), designed to tell Raffles the nature of the code gate and its key.",
        strength: 5,
        mu: 3,
        cost: 560
    },
    // Detection
    {
        id: "prog-7",
        name: "Watchdog",
        category: "detect",
        description: "Watchdog is designed to alert its owners to illegal entries into the system. It can do this by activating an external alarm or by sending a message to an occupied workstation. Netrunners can use Watchdogs to patrol another part of the Net, such as a rival's computer system, then key the Watchdog to run to their cybermodem or workstation if security is breached. This technique allows you to guard your secret files and pathways in other people's computers.",
        strength: 4,
        mu: 5,
        cost: 610
    },
    {
        id: "prog-8",
        name: "Bloodhound",
        category: "detect",
        description: "Like Watchdog, Bloodhound is designed to detect illegal system entries. However, it also tracks the entry to its source and alerts its masters to the location of intruder. Like Watchdog, Bloodhounds can be set up to watch a part or the Net and report back to you at another workstation or modem.",
        strength: 3,
        mu: 5,
        cost: 700
    },
    {
        id: "prog-9",
        name: "Pit Bull",
        category: "detect",
        description: "The most advanced form or the Watchdog series, Pit Bull not only tracks the intruder to its source, but also cuts the line after acquiring the location. It will continue to cut the line every time the intruder logs on from that point of entry, requiring him to move to another phone line or cybermodem. Like Watchdog, Pit Bull can be set up to watch a part of the Net and report back to you at another workstation or modem.",
        strength: 2,
        mu: 6,
        cost: 780
    },
    {
        id: "prog-10",
        name: "SeeYa",
        category: "detect",
        description: "SeeYa is designed to detect invisible ICONS within the range of one Subgrid. This includes programs, hidden Netrunners and things hidden by Invisibility in a virtual reality.",
        strength: 3,
        mu: 1,
        cost: 280
    },
    {
        id: "prog-11",
        name: "Hidden Virtue",
        category: "detect",
        description: "Hidden virtue is a Rache Bartmoss design used to tell \"real\" ICONs from other objects in a virtual reality. For example. HV could tell the difference between a real person and a virtual one or which book in a virtual library is really a data file.",
        strength: 3,
        mu: 1,
        cost: 280
    },
    {
        id: "prog-12",
        name: "Speedtrap",
        category: "detect",
        description: "Speedtrap is an early warning program that detects the presence of an offensive program within 10 squares of the Netrunner's position (within the same subgrid). It cannot tell you where the program is, only that it exists.",
        strength: 4,
        mu: 4,
        cost: 600
    },
    // Anti-System
    {
        id: "prog-13",
        name: "Flatline",
        category: "anti-system",
        description: "Flatline is designed to trace and kill the operating interface of your cybermodem - one zap, and your deck must have its interface chip replaced. A Flatline can be carried by an intruding Netrunner and used to attack the decks of other 'Runners encountered in the Net.",
        strength: 3,
        mu: 2,
        cost: 570
    },
    {
        id: "prog-14",
        name: "Poison Flatline",
        category: "anti-system",
        description: "Poison Flatline is designed to destroy not only the interface software, but the Memory of the 'deck as well. This wrecks the cybermodem, requiring total replacement. Like Flatline. Poison Flatline can be carried by an intruding Netrunner and used to attack other 'Runners encountered in the Net.",
        strength: 2,
        mu: 2,
        cost: 540
    },
    {
        id: "prog-15",
        name: "Krash",
        category: "anti-system",
        description: "Krash causes the CPU of an attacked deck or system (closest CPU in multi-processor systems) to become inoperative for 1D6+1 turns. A Krashed deck automatically drops its 'runner out of the Net, while a Krashed system may not act until the time period has elapsed and it has re-booted itself.",
        strength: 3,
        mu: 2,
        cost: 570
    },
    {
        id: "prog-16",
        name: "DecKRASH",
        category: "anti-system",
        description: "A modified version of Krash, which operates only on cyberdecks, causing the Netrunner to be dropped out of the Net for 1d6 turns.",
        strength: 4,
        mu: 2,
        cost: 600
    },
    {
        id: "prog-17",
        name: "Murphy",
        category: "anti-system",
        description: "Murphy causes the affected deck or system to randomly launch all of its applications, using as many actions as it has available to do this.",
        strength: 3,
        mu: 2,
        cost: 600
    },
    {
        id: "prog-18",
        name: "Virizz",
        category: "anti-system",
        description: "This virus attack automatically ties up one action of the system or deck until the deck is turned off.",
        strength: 4,
        mu: 2,
        cost: 600
    },
    {
        id: "prog-19",
        name: "Viral",
        category: "anti-system",
        description: "This virus causes the affected system or deck to randomly erase one file or program each turn until the deck is turned off.",
        strength: 4,
        mu: 2,
        cost: 590
    },
    // Evasion
    {
        id: "prog-20",
        name: "Invisibility",
        category: "evasion",
        description: "Invisibility overlays a false signal on your cybermodem trace, making it appear to be harmless static. When activated, Invisibility will allow the Netrunner to pass unnoticed through the Net.",
        strength: 3,
        mu: 1,
        cost: 300
    },
    {
        id: "prog-21",
        name: "Stealth",
        category: "evasion",
        description: "Stealth mutes the Netrunner's cyber-signal, making him harder to detect. He is still visible, but offensive programs will not react to his presence. However, other Netrunners can still see him. ICON: a sheet of black energy draped over the Netrunners ICON.",
        strength: 4,
        mu: 3,
        cost: 480
    },
    {
        id: "prog-22",
        name: "Replicator",
        category: "evasion",
        description: "Replicator creates millions of copies of your cybermodem trace, sending them off in all directions to confuse a pursuing program. If successful, the pursuer will track the wrong signal to a dead end. Replicator is especially good against the \"Dog\" series of programs, as it overloads their limited AI programming structure with too many decisions.",
        strength: 3,
        mu: 2,
        cost: 320
    },
    // Protection
    {
        id: "prog-23",
        name: "Shield",
        category: "protection",
        description: "Shield stops direct attack to the Netrunner. On a successful use of Shield, the attack is thwarted and no damage is taken.",
        strength: 3,
        mu: 1,
        cost: 150
    },
    {
        id: "prog-24",
        name: "Force Shield",
        category: "protection",
        description: "A more powerful version of Shield.",
        strength: 4,
        mu: 2,
        cost: 160
    },
    {
        id: "prog-25",
        name: "Reflector",
        category: "protection",
        description: "Reflector is designed to repel all Stun, Hellbolt and Knockout attacks. It is unable to stop any other types of anti-personnel attacks.",
        strength: 5,
        mu: 2,
        cost: 160
    },
    {
        id: "prog-26",
        name: "Armor",
        category: "protection",
        description: "This program is designed to slow and retard all anti-personnel attacks. On a successful use of Armor, the attack is stopped. On an unsuccessful use, Armor will reduce all Stun, Hellbolt, Brainwipe, Zombie and Hellhound attack damages by 3 points.",
        strength: 4,
        mu: 2,
        cost: 170
    },
    {
        id: "prog-27",
        name: "Flak",
        category: "protection",
        description: "Flak creates a tremendous wall of static, blinding the attacking program and allowing the Netrunner to easily evade. Flak is very good against most programs, but it is relatively ineffective against the \"Dog\" series.",
        strength: 4,
        mu: 2,
        cost: 180
    },
    // anti-ic
    {
        id: "prog-28",
        name: "Killer II",
        category: "anti-ic",
        description: "Killer is a general purpose virus program designed to kill other programs. It enters the logic structure of its victim and inserts errors with blinding speed, causing the target to crash (1D6 to STR). Killer is a very simple program; smooth, elegant and tough. There are many versions of Killer.",
        strength: 2,
        mu: 5,
        cost: 1320
    },
    {
        id: "prog-29",
        name: "Killer IV",
        category: "anti-ic",
        description: "Killer is a general purpose virus program designed to kill other programs. It enters the logic structure of its victim and inserts errors with blinding speed, causing the target to crash (1D6 to STR). Killer is a very simple program; smooth, elegant and tough. There are many versions of Killer.",
        strength: 4,
        mu: 5,
        cost: 1400
    },
    {
        id: "prog-30",
        name: "Killer VI",
        category: "anti-ic",
        description: "Killer is a general purpose virus program designed to kill other programs. It enters the logic structure of its victim and inserts errors with blinding speed, causing the target to crash (1D6 to STR). Killer is a very simple program; smooth, elegant and tough. There are many versions of Killer.",
        strength: 6,
        mu: 5,
        cost: 1480
    },
    {
        id: "prog-31",
        name: "Manticore",
        category: "anti-ic",
        description: "Manticore is the simplest of a series of Assassin programs; a type of Killer designed to locate and destroy Demon programs. If no Demon is present in your cybermodem file, Manticore will ignore you.",
        strength: 2,
        mu: 3,
        cost: 880
    },
    {
        id: "prog-32",
        name: "Hydra",
        category: "anti-ic",
        description: "A more powerful variant of Manticore.",
        strength: 3,
        mu: 3,
        cost: 920
    },
    {
        id: "prog-33",
        name: "Dragon",
        category: "anti-ic",
        description: "The most powerful variant of Manticore.",
        strength: 4,
        mu: 3,
        cost: 960
    },
    {
        id: "prog-34",
        name: "Aardvark",
        category: "anti-ic",
        description: "Aardvark is designed to locate and destroy intruding Worm programs. It will immediately seek out and destroy any Worm program carried, even if it is loaded as a Demon subroutine.",
        strength: 4,
        mu: 3,
        cost: 1000
    },
    // Anti Personnel
    {
        id: "prog-35",
        name: "Stun",
        category: "anti-personnel",
        description: "Stun sends an overpowering bolt of energy into the target, causing him to be frozen in place for 1D6 turns. This is a very commonly used offensive program, particularly by the NetCops.",
        strength: 3,
        mu: 3,
        cost: 6000
    },
    {
        id: "prog-36",
        name: "Hellbolt",
        category: "anti-personnel",
        description: "A more powerful version of Stun, Hellbolt causes physical damage (1D10 per attack) to the Netrunner. Damage is subtracted from the Netrunner is a wound until he is dead. Saves vs. Stun and Death must also be made.",
        strength: 4,
        mu: 4,
        cost: 6750
    },
    {
        id: "prog-37",
        name: "Sword",
        category: "anti-personnel",
        description: "A variant of Hellbolt, Sword causes 1D6 in physical damage per hit.",
        strength: 3,
        mu: 4,
        cost: 6250
    },
    {
        id: "prog-38",
        name: "Brainwipe",
        category: "anti-personnel",
        description: "Brainwipe is the simplest of a series of black programs, all of which are designed to attack the Netrunner instead of his programs. All black programs can be carried by an intruding Netrunner and used to attack other 'Runners encountered in the Net Brainwipe tracks the victim down, fries his forebrain with a jolt of current, and reduces him to a drooling vegetable, (1D6 each turn to INT). The screaming Netrunner feels his mind melt away, until his INT is reduced to 0 and he dies. Lost INT cannot be regained.",
        strength: 3,
        mu: 4,
        cost: 6500
    },
    {
        id: "prog-39",
        name: "Zombie",
        category: "anti-personnel",
        description: "An advanced and more powerful version of Brainwipe, Zombie wipes out the victim's forebrain, making him into a drooling vegetable (1D6 to INT each turn).",
        strength: 5,
        mu: 4,
        cost: 7500
    },
    {
        id: "prog-40",
        name: "Liche",
        category: "anti-personnel",
        description: "An advanced form of Zombie, Liche also rips away the forebrain (1D6 to INT), but selectively. Most memory is eradicated, leaving enough to implant an easily controlled (by the Referee) pseudo personality into the empty brain.",
        strength: 4,
        mu: 4,
        cost: 7250
    },
    {
        id: "prog-41",
        name: "Firestarter",
        category: "anti-personnel",
        description: "Firestarter is indirectly anti-personnel in nature. Using its Bloodhound subroutines, it tracks the intruder to its source. Silently entering the electrical system, it blasts the wiring with a megawatt power surge. The jolt causes wiring fires, explosions, and fries the Netrunner as if he were in an electric chair. Firestarter programs are excellent covert killers, as they leave little of no evidence in the charred wreckage.",
        strength: 4,
        mu: 4,
        cost: 6250
    },
    {
        id: "prog-42",
        name: "Hellhound",
        category: "anti-personnel",
        description: "Hellhound combines the worst aspects of Pit Bull and Flatline. It locates the intruder and sends out a modulated pulse designed to cause a heart attack in humans (2D10 wound damage). If the Netrunner escapes in time, it remains active within the Net, lurking silently in major long distance terminals, waiting for the specific brain wave pattern of the intruder to show up. It then tracks him down again and kills him. Patient and remorseless, Hellhound can wait years for its victim to log on. Its rarity and high price tag prohibits its use against all but extremely high level Netrunners.",
        strength: 6,
        mu: 6,
        cost: 10000
    },
    {
        id: "prog-43",
        name: "Spazz",
        category: "anti-personnel",
        description: "Spazz causes epileptic seizures in the Netrunner's nervous system. REF is automatically reduced to half for 1D6 turns, slowing the Netrunner's Initiative rolls drastically.",
        strength: 4,
        mu: 3,
        cost: 6250
    },
    {
        id: "prog-44",
        name: "Glue",
        category: "anti-personnel",
        description: "Used by the \"Icemen\" of NetWatch as an arrest program, Glue freezes the Netrunner in place for 1010 turns (4 turns is long enough to get a good trace on his location in Realspace). The Netcops can then send a squad along to pick him up at their leisure.",
        strength: 5,
        mu: 4,
        cost: 6500
    },
    {
        id: "prog-45",
        name: "Knockout",
        category: "anti-personnel",
        description: "Knockout delivers a powerful modulated shock that knocks the Netrunner out for 1D6 hours. He is automatically dumped out of the Net, and is in a coma in Realspace for this period of time. Knockout is a very common defense against low level intrusion (like the Phone Co. or an office system).",
        strength: 4,
        mu: 3,
        cost: 6250
    },
    {
        id: "prog-46",
        name: "Jack Attack",
        category: "anti-personnel",
        description: "lack attack is often used as an arrest program. It stops the Netrunner from jacking out for 1D6 turns if it is successfully run.",
        strength: 3,
        mu: 3,
        cost: 6000
    },
    // Controllers
    {
        id: "prog-47",
        name: "Viddy Master",
        category: "controller",
        description: "Allows control of videoboards.",
        strength: 4,
        mu: 1,
        cost: 140
    },
    {
        id: "prog-48",
        name: "Soundmachine",
        category: "controller",
        description: "Allows control of microphones, loudspeakers, vocoders (computer voice boxes).",
        strength: 4,
        mu: 1,
        cost: 140
    },
    {
        id: "prog-49",
        name: "Open Sesame",
        category: "controller",
        description: "A low level program for opening doors, elevators, etc.",
        strength: 3,
        mu: 1,
        cost: 130
    },
    {
        id: "prog-50",
        name: "Genie",
        category: "controller",
        description: "A high level program for opening doors, elevators, etc.",
        strength: 5,
        mu: 1,
        cost: 150
    },
    {
        id: "prog-51",
        name: "Hotwire",
        category: "controller",
        description: "Allows remote control of robotic cars, vehicles, etc.",
        strength: 3,
        mu: 1,
        cost: 130
    },
    {
        id: "prog-52",
        name: "Dee-2",
        category: "controller",
        description: "Allows control of robots, cleaning mecha, auto-factories, etc.",
        strength: 3,
        mu: 1,
        cost: 130
    },
    {
        id: "prog-53",
        name: "Crystal Ball ",
        category: "controller",
        description: "Allows control of video cameras, remote sensors, etc.",
        strength: 4,
        mu: 1,
        cost: 140
    },
    {
        id: "prog-54",
        name: "News at 8",
        category: "controller",
        description: "Allows through-the-Net access to Data Terms and Screamsheet boxes for information.",
        strength: 4,
        mu: 1,
        cost: 140
    },
    {
        id: "prog-55",
        name: "Phone home",
        category: "controller",
        description: "Allows the Netrunner to place or receive calls in the Net. Phone Home is also Strength 2 to intercept and listen into other calls.",
        strength: 5,
        mu: 1,
        cost: 150
    },
    // Utilities
    {
        id: "prog-56",
        name: "Databaser",
        category: "utility",
        description: "Creates open files to store information in.",
        strength: 8,
        mu: 2,
        cost: 180
    },
    {
        id: "prog-57",
        name: "Alias",
        category: "utility",
        description: "Changes file names, replacing the filename with an innocuous title that hides its true nature.",
        strength: 6,
        mu: 2,
        cost: 160
    },
    {
        id: "prog-58",
        name: "Re-Rezz",
        category: "utility",
        description: "Recompiles and restores damaged files or programs. If a program is de-rezzed, this is the best way to get it back short of having a copy.",
        strength: 3,
        mu: 1,
        cost: 130
    },
    {
        id: "prog-59",
        name: "Instant Replay",
        category: "utility",
        description: "Makes a record of the Netrunner's trip, so that he can retrace his steps through the Net.",
        strength: 8,
        mu: 2,
        cost: 150
    },
    {
        id: "prog-60",
        name: "Gate Master",
        category: "utility",
        description: "Deletes and kills Virizz and Viral 15 programs without requiring a total shutdown of the system or deck.",
        strength: 5,
        mu: 1,
        cost: 150
    },
    {
        id: "prog-61",
        name: "Padlock",
        category: "utility",
        description: "Keeps anyone other than the Netrunner from logging onto the deck unless the proper code word is used.",
        strength: 4,
        mu: 2,
        cost: 160
    },
    {
        id: "prog-62",
        name: "Electrolock",
        category: "utility",
        description: "Changes an open file to a LOCKED file equal to a Code Gate of Strength 3.",
        strength: 7,
        mu: 2,
        cost: 170
    },
    {
        id: "prog-63",
        name: "Firelocker",
        category: "utility",
        description: "Locks an open file to a level equal to a Code Gate of Strength 5.",
        strength: 4,
        mu: 1,
        cost: 140
    },
    {
        id: "prog-64",
        name: "NetMap",
        category: "utility",
        description: "Provides a locator map of most major Net regions, adding +2 to any System Knowledge check to Find a place in the Net.",
        strength: 4,
        mu: 1,
        cost: 150
    },
    {
        id: "prog-65",
        name: "Fire Packer",
        category: "utility",
        description: "Compacts files to half their normal MU size. Takes 2 turns to unpack a file to normal size.",
        strength: 4,
        mu: 1,
        cost: 140
    },
    {
        id: "prog-66",
        name: "Backup",
        category: "utility",
        description: "Backup allows you to nuke a copy of any program (except for Anti-IC and Anti-personnel types). You will need extra data chips and a cyberdeck chipreader for this.",
        strength: 4,
        mu: 1,
        cost: 140
    },
    // Demon
    {
        id: "prog-67",
        name: "Imp",
        category: "demon",
        description: "carries 2 programs.",
        strength: 3,
        mu: 3,
        cost: 1000
    },
    {
        id: "prog-68",
        name: "Afreet",
        category: "demon",
        description: "carries 3 programs.",
        strength: 3,
        mu: 4,
        cost: 1160
    },
    {
        id: "prog-69",
        name: "Succubus",
        category: "demon",
        description: "carries 4 programs.",
        strength: 4,
        mu: 4,
        cost: 1200
    },
    {
        id: "prog-70",
        name: "Balron",
        category: "demon",
        description: "carries 4 programs",
        strength: 5,
        mu: 5,
        cost: 1240
    },
].map(i => ({
    ...i,
    type: "program"
}));