import { BodyPartDetail, Cyberware } from "../model/cyberware";

export const cyberSurgeryDetail = {
    n: { title: "None" },
    m: { title: "Minor" },
    ma: { title: "Major" },
    cr: { title: "Critical" },
};


export const cyberBodyPartDetails: { [id: string]: BodyPartDetail } = {
    neural: {
        id: "neural",
        name: "Neuralware Processor",
        menuLabel: "Neural",
        description: `
        One of the most important aspects of cybertech is invisible to the naked eye. This type of enhancement, known as neuralware, is usually in the form of tiny co-processing chips and nerve amplifiers that increase existing abilities.
The basic neural processor is a "switch-box" implanted into the lower spine, and is used to route signals from external cyberwear to the central nervous system. It is the main system for any type of neural interface, including reflex boosters, interface plugs, weapon, DataTerm and vehicle links, mini-computers and sensory augmentations. The Neural processor has a small inspection space which allows secondary co-processors to be inserted into the basic processor module. This makes upgrading a process of opening the inspection space in a sterile environment and inserting the new co-processors.
Implanting a neural processor is far easier than one would expect, thanks to the science of nanotech. The basic module is surgically affixed to the spine, where it releases a flood of nanosurgical units into the spinal column. These microscopic machines thread tiny linkages through the central nervous system, hooking nerve endings to the neural processor. This process takes some time (1D6+7 days) before the nanosurgeons have worked their way through the entire body and all the connections are hooked up to the neural processor.
        `,
        surgery: "m",
        cost: 1000,
        humanityLoss: "1d6",
        type: "neuralware"
    },
    leftEye: {
        id: "leftEye",
        name: "Left Eye Module",
        menuLabel: "Left Eye",
        description: `
        A combination of digital processor and camera, cyberoptics are replacements for normal eyes. Cybervision is just like regular vision, only better. Colors are brighter, images sharper. And that's just the start.
Want to see life as a 30's black and white movie? No problem. Telescopic or microscopic vision? Optional. Infrared and low light vision? Standard for Solos.
Cyberoptics can look exactly like normal eyes, although a wide variety of fashion iris colors are available (amber, white, burgundy and violet are very popular). Some versions are transparent, with glitter or lights swirling inside of them. Other are superchromed for a more "cyber" look. Others can change eye color at will or to match clothes and surroundings. Some even have tiny designer logos around the iris. Cyberoptics with cameras or weapons usually load from the front, with the iris opening up when the front of the eye is depressed.
        `,
        surgery: "ma",
        type: "cyberoptic",
        cost: 500,
        humanityLoss: "2d6"
    },
    rightEye: {
        id: "rightEye",
        name: "Right Eye Module",
        menuLabel: "Right Eye",
        description: `
        A combination of digital processor and camera, cyberoptics are replacements for normal eyes. Cybervision is just like regular vision, only better. Colors are brighter, images sharper. And that's just the start.
Want to see life as a 30's black and white movie? No problem. Telescopic or microscopic vision? Optional. Infrared and low light vision? Standard for Solos.
Cyberoptics can look exactly like normal eyes, although a wide variety of fashion iris colors are available (amber, white, burgundy and violet are very popular). Some versions are transparent, with glitter or lights swirling inside of them. Other are superchromed for a more "cyber" look. Others can change eye color at will or to match clothes and surroundings. Some even have tiny designer logos around the iris. Cyberoptics with cameras or weapons usually load from the front, with the iris opening up when the front of the eye is depressed. 
        `,
        surgery: "ma",
        type: "cyberoptic",
        cost: 500,
        humanityLoss: "2d6"
    },
    audio: {
        id: "audio",
        name: "Basic Hearing Module",
        menuLabel: "Audio",
        description: `
        Cyberaudio systems patch into the auditory nerves and speech centers of the brain. This enhancement affects both ears, and also includes a subvocalizing mike on the mastoid bone. There is no visible change to the outer ear, although some cyberpunks replace the outer ear with a set of mechanical speaker pickups for max effect.
        `,
        surgery: "n",
        type: "cyberaudio",
        cost: 200,
        humanityLoss: "2d6"
    },
    leftArm: {
        id: "leftArm",
        name: "Left Arm Replacement",
        menuLabel: "Left Arm",
        description: `
        The popular myth about cyberlimbs is that they enable their owners to perform all kinds of superheroic feats. To a point, it's true; cyberlimbs can be designed with boosted strength and speed, using synthetic muscle fibers and silicon chips. What you won't find are people running at 200 miles an hour, bending steel bars with their hands or throwing Volkswagens around. Why can't you go around lifting cars and punching down walls like the cyborgs in the comics? Simple physiology. The replacement limb must be able to work in concert with the remaining "meat" parts of the body. Even if your arm was ten times stronger than before, the back and shoulder muscles supporting that cyberlimb wouldn't be - and they'd shred long before the artificial muscles did. But within limits, a cyber-equipped person can do some pretty impressive party tricks:
Crushing: A cybernetic arm uses synthetic muscle fibers instead of flesh and blood. They don't get tired, and they don't feel pain. They are also much stronger than normal muscle tissue. This gives a cyberarm tremendous gripping power. All cyberlimbs can easily crush light metals, woods and plastics. They can crush glass and plastic to dust (although they can't crush lumps of coal into diamonds!). In combat, any crushing grip with a cyberarm will do 2D6 damage.
Pain: Cyberarms never grow tired, allowing the wearer to hang from high places indefinitely. You can turn off the touch sensors with the flick of a mental switch, eliminating pain and allowing you to perform feats such as reaching into raging fires, dabbling in tanks of liquid nitrogen, and picking up red-hot pokers. A gunshot wound to a cyberlimb has no pain effects; you don't have to make a saving roll against shock and stun.
Damage: Cyberlimbs can take (and dish out) a tremendous amount of damage, so much so that they are treated like machinery for the purposes of game combat. All cyberlimbs can take up to 20 points of structural damage before they are useless, and up to 30 total points of structural damage before they are destroyed. A cyberarm punch does 1D6 damage to its target; wall, car, someone's head; no matter. A cyberleg kick will do 2D6 damage.
        `,
        surgery: "cr",
        type: "cyberlimb",
        cost: 3000,
        humanityLoss: "2d6"
    },
    rightArm: {
        id: "rightArm",
        name: "Right Arm Replacement",
        menuLabel: "Right Arm",
        description: `
        The popular myth about cyberlimbs is that they enable their owners to perform all kinds of superheroic feats. To a point, it's true; cyberlimbs can be designed with boosted strength and speed, using synthetic muscle fibers and silicon chips. What you won't find are people running at 200 miles an hour, bending steel bars with their hands or throwing Volkswagens around. Why can't you go around lifting cars and punching down walls like the cyborgs in the comics? Simple physiology. The replacement limb must be able to work in concert with the remaining "meat" parts of the body. Even if your arm was ten times stronger than before, the back and shoulder muscles supporting that cyberlimb wouldn't be - and they'd shred long before the artificial muscles did. But within limits, a cyber-equipped person can do some pretty impressive party tricks:
        Crushing: A cybernetic arm uses synthetic muscle fibers instead of flesh and blood. They don't get tired, and they don't feel pain. They are also much stronger than normal muscle tissue. This gives a cyberarm tremendous gripping power. All cyberlimbs can easily crush light metals, woods and plastics. They can crush glass and plastic to dust (although they can't crush lumps of coal into diamonds!). In combat, any crushing grip with a cyberarm will do 2D6 damage.
        Pain: Cyberarms never grow tired, allowing the wearer to hang from high places indefinitely. You can turn off the touch sensors with the flick of a mental switch, eliminating pain and allowing you to perform feats such as reaching into raging fires, dabbling in tanks of liquid nitrogen, and picking up red-hot pokers. A gunshot wound to a cyberlimb has no pain effects; you don't have to make a saving roll against shock and stun.
        Damage: Cyberlimbs can take (and dish out) a tremendous amount of damage, so much so that they are treated like machinery for the purposes of game combat. All cyberlimbs can take up to 20 points of structural damage before they are useless, and up to 30 total points of structural damage before they are destroyed. A cyberarm punch does 1D6 damage to its target; wall, car, someone's head; no matter. A cyberleg kick will do 2D6 damage.
        `,
        surgery: "cr",
        type: "cyberlimb",
        cost: 3000,
        humanityLoss: "2d6"
    },
    leftLeg: {
        id: "leftLeg",
        name: "Left Leg Replacement",
        menuLabel: "Left Leg",
        description: `
        The popular myth about cyberlimbs is that they enable their owners to perform all kinds of superheroic feats. To a point, it's true; cyberlimbs can be designed with boosted strength and speed, using synthetic muscle fibers and silicon chips. What you won't find are people running at 200 miles an hour, bending steel bars with their hands or throwing Volkswagens around. Why can't you go around lifting cars and punching down walls like the cyborgs in the comics? Simple physiology. The replacement limb must be able to work in concert with the remaining "meat" parts of the body. Even if your arm was ten times stronger than before, the back and shoulder muscles supporting that cyberlimb wouldn't be - and they'd shred long before the artificial muscles did. But within limits, a cyber-equipped person can do some pretty impressive party tricks:
        Damage: Cyberlimbs can take (and dish out) a tremendous amount of damage, so much so that they are treated like machinery for the purposes of game combat. All cyberlimbs can take up to 20 points of structural damage before they are useless, and up to 30 total points of structural damage before they are destroyed. A cyberarm punch does 1D6 damage to its target; wall, car, someone's head; no matter. A cyberleg kick will do 2D6 damage.
        
        Leaping: Cyberlegs employ powerful pistons and microservos, backed by bundles of synthetic muscles. With a pair of them, you can leap tremendous distances. Characters with paired cyberlegs can leap 6 meters straight up, or make a running jump of up to 8 meters.
                
        `,
        surgery: "cr",
        type: "cyberlimb",
        cost: 2000,
        humanityLoss: "2d6"
    },
    rightLeg: {
        id: "rightLeg",
        name: "Right Leg Replacement",
        menuLabel: "Right Leg",
        description: `
        The popular myth about cyberlimbs is that they enable their owners to perform all kinds of superheroic feats. To a point, it's true; cyberlimbs can be designed with boosted strength and speed, using synthetic muscle fibers and silicon chips. What you won't find are people running at 200 miles an hour, bending steel bars with their hands or throwing Volkswagens around. Why can't you go around lifting cars and punching down walls like the cyborgs in the comics? Simple physiology. The replacement limb must be able to work in concert with the remaining "meat" parts of the body. Even if your arm was ten times stronger than before, the back and shoulder muscles supporting that cyberlimb wouldn't be - and they'd shred long before the artificial muscles did. But within limits, a cyber-equipped person can do some pretty impressive party tricks:
Damage: Cyberlimbs can take (and dish out) a tremendous amount of damage, so much so that they are treated like machinery for the purposes of game combat. All cyberlimbs can take up to 20 points of structural damage before they are useless, and up to 30 total points of structural damage before they are destroyed. A cyberarm punch does 1D6 damage to its target; wall, car, someone's head; no matter. A cyberleg kick will do 2D6 damage.

Leaping: Cyberlegs employ powerful pistons and microservos, backed by bundles of synthetic muscles. With a pair of them, you can leap tremendous distances. Characters with paired cyberlegs can leap 6 meters straight up, or make a running jump of up to 8 meters.
        
        `,
        surgery: "cr",
        type: "cyberlimb",
        cost: 2000,
        humanityLoss: "2d6"
    },
    other: {
        id: "other",
        name: "",
        menuLabel: "Other",
        description: "",
        surgery: "n",
        type: "",
        cost: 0,
        humanityLoss: ""
    }
};


export const fashionware: Cyberware[] = [
    {
        id: "cyber-fashion-1",
        name: "Biomonitor",
        description: "This is a favorite of Solos, gadget freaks, and harried Corporates worried about their blood pressure. Mounted just below the skin of the forearm, the Biomonitor gives a constant readout of pulse, respiration, brainwaves, blood sugar, temperature, and cholesterol levels. The display is a pattern of word shaped LEDs, each running a color sequence from red (critical) to green (excellent). As conditions change, the colors change. The user merely shoots back his cuff, looks for the little glowing word display he wants, and checks the color. In game terms, this adds +2 to any Resist Torture/Drugs check.",
        surgery: "n",
        type: "fashionware",
        cost: 100,
        humanityLoss: "1"
    },
    {
        id: "cyber-fashion-2",
        name: "Skinwatch",
        description: "The predecessor of the Biomonitor, the Skinwatch is implanted just below the epidermis, and uses tiny LEDs to project glowing numerals through the skin. Skinwatches can be mounted anywhere, although the hand, wrist and fingers are the most common. Advanced versions can be reset by pressing the display gently until the right number combinations come up; really advanced versions have alarms that beep quietly. Use your imagination.",
        surgery: "n",
        type: "fashionware",
        cost: 50,
        humanityLoss: "1"
    },
    {
        id: "cyber-fashion-3",
        name: "Light Tattoo",
        description: "These are light emitting chemical patches inserted under the first couple layers of skin. They store light and emit it in colors or patterns.",
        surgery: "n",
        type: "fashionware",
        cost: 20,
        humanityLoss: "0.5"
    },
    {
        id: "cyber-fashion-4",
        name: "Shift-Tact",
        description: "These are colored contact lenses, designed to mimic certain aspects of more expensive cyberoptics. Mirrored contacts in all tints, temperature or emotion sensitive contacts that change color on demand, logo or patterned contacts. These are available in most fashionable bodyware shops. Check it out.",
        surgery: "n",
        type: "fashionware",
        cost: 200,
        humanityLoss: "0.5"
    },
    {
        id: "cyber-fashion-5",
        name: "ChemSkins",
        description: "These are special dyes and chemicals which are impregnated or rubbed into the skin. Some change the skin color to a new shade as desired. Others are temperature sensitive, and shift colors in vibrant patterns when warmed or cooled. Very expensive chemskins are sensitive to hormonal changes; you could buy a chemskin that would make yellow and black tiger stripes appear on your skin when you became angry or excited.",
        surgery: "n",
        type: "fashionware",
        cost: 200,
        humanityLoss: "1d6/2"
    },
    {
        id: "cyber-fashion-6",
        name: "Synthskins",
        description: "A more sophisticated version of light tattoo technology, a synthskin is a layer of color-shifting plastic bonded to the character's outer skin. A synthskin can be adjusted to display colors, patterns, light-flares or other special effects, using tuning chips (cost 100eb) which are plugged into a socket in the skin (usually under the hairline).",
        surgery: "n",
        type: "fashionware",
        cost: 400,
        humanityLoss: "1d6"
    },
    {
        id: "cyber-fashion-7",
        name: "Techhair",
        description: "The shafts of this artificial hair are impregnated with various types of reactive chemicals. Some types are temperature sensitive and change color or stand up depending on the weather. Others contain the same pigments used in light tattoos, storing and emitting colored light in patterns. Still others can change color as desired by using special chemical shampoos. Techhair can be implanted in mohawks, hair weaves, full hairpieces, manes, ruffs, whiskers and other less obvious (but interesting) places.",
        surgery: "m",
        type: "fashionware",
        cost: 200,
        humanityLoss: "2"
    },
];

const memoryChips = [
    { skill: "Personal Grooming", cost: 100 },
    { skill: "Wardrobe and Style", cost: 100 },
    { skill: "Accounting", cost: 150 },
    { skill: "Anthropology", cost: 150 },
    { skill: "Biology", cost: 150 },
    { skill: "Botany", cost: 150 },
    { skill: "Chemistry", cost: 150 },
    { skill: "Education and general knowledge", cost: 200 },
    { skill: "Geology", cost: 150 },
    { skill: "History", cost: 150 },
    { skill: "Language", cost: 200 },
    { skill: "Mathematics", cost: 200 },
    { skill: "Physics", cost: 200 },
    { skill: "Programming", cost: 300 },
    { skill: "Stock Market", cost: 300 },
    { skill: "Wilderness Survival", cost: 200 },
    { skill: "Zoology", cost: 150 },
    { skill: "Daytimer Chip", cost: 100 },
];

const reflexChips = [
    { skill: "Archery", cost: 300 },
    { skill: "Dance", cost: 150 },
    { skill: "Driving", cost: 150 },
    { skill: "Fencing", cost: 300 },
    { skill: "Handgun", cost: 300 },
    { skill: "Heavy Weapons", cost: 400 },

    { skill: "Aikido", cost: 350 },
    { skill: "Animal Kung Fu", cost: 350 },
    { skill: "Boxing", cost: 350 },
    { skill: "Capoeira", cost: 350 },
    { skill: "Choi li fut", cost: 350 },
    { skill: "Judo", cost: 350 },
    { skill: "Karate", cost: 350 },
    { skill: "Taw Kwon Do", cost: 350 },
    { skill: "Thai kick boxing", cost: 350 },
    { skill: "Wrestling", cost: 350 },

    { skill: "Melee", cost: 150 },
    { skill: "Motorcycle", cost: 150 },
    { skill: "Operate Heavy Machinery", cost: 200 },
    { skill: "Pilot (Gyro)", cost: 300 },
    { skill: "Pilot (Fixed Wing)", cost: 300 },
    { skill: "Pilot (Dirigible)", cost: 300 },
    { skill: "Pilot (Vector Thurst Vehicle)", cost: 350 },
    { skill: "Rifle", cost: 300 },
    { skill: "Submachinegun", cost: 300 },
];

export const neuralware: Cyberware[] = [
    {
        id: "cyber-neuralware-1",
        name: "Kerenzikov Boosterware",
        description: "Kerenzikov boosterware is always activated; the character is always reacting with a higher than normal reaction speed. Since Kerenzikov often boosts responses to greater than 10, it has a high humanity cost, as the user must learn to readjust his or her actions to a world that appears to be moving in slow motion. Because of this, Kerenzikov boost can be installed at two levels of augmentation (+1 or +2 to Initiative, HL is 1D6 or 2D6).",
        surgery: "n",
        type: "neuralware",
        cost: 500,
        humanityLoss: "1d6"
    },
    {
        id: "cyber-neuralware-2",
        name: "Speedware (Sandevistan)",
        description: "Speedware (also known as Sandevistan) kicks in only when desired, eliminating much of the need to adapt one's entire life to an inhumanly fast reaction time. The character must first subvocalize a mental command word before boost is activated, then wait one turn before the boost kicks in. He will remain boosted for five full turns (+3 to initiative rolls) before the boost cuts out. He must then subvocalize the command again, and wait 2 turns before regaining a boosted state.",
        surgery: "n",
        type: "neuralware",
        cost: 1600,
        humanityLoss: "1d6/2"
    },
    {
        id: "cyber-neuralware-3",
        name: "Tactile Boost",
        description: "This increases any Awareness roll involving touch by +2. The boost can be turned on or off at will, taking one turn to do so.",
        surgery: "n",
        type: "neuralware",
        cost: 100,
        humanityLoss: "2"
    },
    {
        id: "cyber-neuralware-4",
        name: "Olfactory Boost",
        description: "This increases any Awareness roll involving smell by +2. In addition, the subject adds +2 to his Shadow/Track skills (he can track by smell), and has a 50% chance of locating a scent to begin tracking with unless the target has taken particular pains to disguise its scent). The boost can be turned on or off at will, taking one turn to do so",
        surgery: "n",
        type: "neuralware",
        cost: 100,
        humanityLoss: "2"
    },
    {
        id: "cyber-neuralware-5",
        name: "Pain Editor",
        description: "This coprocessor overrides the pain receptors of the brain, making the subject impervious to torture, deprivation or physical hardship. It doesn't mean he isn't getting hurt, just that he won't notice it until he collapses (make Endurance Skill checks, but at two levels of difficulty lower than normal).",
        surgery: "n",
        type: "neuralware",
        cost: 200,
        humanityLoss: "2d6"
    },
    {
        id: "cyber-neuralware-6",
        name: "Cybermodem Link",
        description: "This is the basic processor that translates Net information into images. It replaces the more limited interface programs of the early 'teens, and allows the Netrunner to perceive a wider variety of environments than its predecessors.",
        surgery: "n",
        type: "neuralware",
        cost: 100,
        humanityLoss: "1"
    },
    {
        id: "cyber-neuralware-7",
        name: "Vehicle Link",
        description: " This allows the user to control a vehicle through direct mental control. Cybervehicles include cars, AV-4s, aircraft, rotorcraft or motorcycles which have had their normal control systems replaced by a computer. The character plugs directly into the computer using interface plugs and cables, sending commands through his own nervous system. Power servos then steer wheels, depress accelerators, and control braking. Cybervehicles are inhumanly responsive - like driving an extension of yourself. As a result, a cyberassisted vehicle will automatically give you a +2 on any driving, piloting or motorcycle driving skill you are using at the time. To modify a normal vehicle to cybervehicle stats costs an additional 40% of the base vehicle cost.",
        surgery: "n",
        type: "neuralware",
        cost: 100,
        humanityLoss: "3"
    },
    {
        id: "cyber-neuralware-8",
        name: "Smartgun Link",
        description: " Smartguns are modified versions of normal firearms, linked to an internal microcomputer, which in turn is jacked to a human operator. A smartgun uses a small sonic or laser projector to lock onto the target, scanning it thousands of times per second. As the gun traverses the desired target, the computer link picks up your mental fire signal (or incoming data from the targeting reticule of your cyberoptic) and triggers the gun. Smartguns are far more accurate than most other guns; using them automatically gives you a +2 to any firearms attack you are making. The cost of adapting a normal gun to smartgun configuration is twice the normal cost of the gun.",
        surgery: "n",
        type: "neuralware",
        cost: 100,
        humanityLoss: "2"
    },
    {
        id: "cyber-neuralware-9",
        name: "Machine Tech Link",
        description: "This allows the user to interface with (and control) any auto-factory or heavy machine operating from a MLINK-based control system. You can also control small machines/appliances in non-factory situations.",
        surgery: "n",
        type: "neuralware",
        cost: 100,
        humanityLoss: "2"
    },
    {
        id: "cyber-neuralware-10",
        name: "DataTerm Link",
        description: "This co-processor allows the user to directly access and store information from a DataTerm, transferring it to a Times Square Marquee, or a LCD screen for display (in game terms, this allows the character to access information as if a DataTerm were available, even if it isn't).",
        surgery: "n",
        type: "neuralware",
        cost: 100,
        humanityLoss: "2"
    },
    {
        id: "cyber-neuralware-11",
        name: "Interface Plug",
        description: `
        These are the staple of Cyberpunk culture. Usually installed in the bones of the wrist, spine or skull, they tap into major nerve trunks and interface with the neural processor to send and receive signals. The plug itself can be used to insert information and reflex "skill chips", or as a plug in for a set of interface cables (allowing you to directly control any device you have the proper "link" with). In game terms, interface plugs allow the player to directly link to many types of machines, such as cybermodems or cybervehicles.
        Interface plugs are quite common; many companies will even pay for their installation. Quite a few factory and construction workers now "stud" directly into their machines. Interface plugs are critical to people like Netrunners (who must have them to gain the speed and ability to run the Net), and Solos (who use them to operate smartguns).
        Most people wear their plugs on wrists for ease of use. Occasionally, a true cybertechie will mount them at the temples (a plug head), just behind the cars (called a frankenstein) or in the back of the head (a puppethead). Some cover them with inlaid silver or gold caps, others with wristwarmers. Once again, a matter of style.
        `,
        surgery: "m",
        type: "neuralware",
        cost: 200,
        humanityLoss: "1d6"
    },
    {
        id: "cyber-neuralware-12",
        name: "Chipware Socket",
        description: "A small socket used only for inserting chipware (see above). With a chipware socket, you can use your interface plugs to control other things (such as weapons or vehicles), white still having access to MRAM and APTR information. Holds 10 chips.",
        surgery: "n",
        type: "neuralware",
        cost: 200,
        humanityLoss: "1d6/2"
    },
    ...reflexChips.map(c => ({
        id: "reflex-chip1" + c.skill.replace(" ", "-").toLowerCase(),
        name: "Reflex Chip Level 1 " + c.skill,
        description: `
        These are chips for Reflex-based skills only, such as weapon firing or hand-to-hand combat knowledge. These Augmented Programm TRCs feedloop - record a specific neural signal from one source, record it in memory, then use the recording to activate a series of muscle reactions in another source. Theoretically, these chips should allow even the lowliest "grunt" to have the skills of a karate master, the shooting ability of Wyatt Earp, and the reflexes of an Olympic athlete. But the limits of programming restrict what you can learn from a chip to a relatively low level (about +1 to +3).
        In addition, a Reflex chip must adapt to your specific neural and muscular patterns, adjusting its instructions to fit your body and vice versa (after all, the karate master who was the pattern for the chip might have been five foot ten and you might be six foot three). It learns your body movements by sampling your responses as you practice using the chip. This process is known as chipping in and is required before the chip can be fully functional.
        Chipping in takes two full days of practice for every level of, the chip. This means, for example, if you've been chipped for Martial Arts +3, it will take six days of practice before the chip has "learned" enough about your body to be fully functional. If you only get two days of practice, the chip will function as a level +1 - practice for four days, and it's raised to +2.
        `,
        surgery: "n",
        type: "neuralware",
        cost: c.cost * 1,
        humanityLoss: 0
    } as any)),
    ...reflexChips.map(c => ({
        id: "reflex-chip2" + c.skill.replace(" ", "-").toLowerCase(),
        name: "Reflex Chip Level 2 " + c.skill,
        description: `
        These are chips for Reflex-based skills only, such as weapon firing or hand-to-hand combat knowledge. These Augmented Programm TRCs feedloop - record a specific neural signal from one source, record it in memory, then use the recording to activate a series of muscle reactions in another source. Theoretically, these chips should allow even the lowliest "grunt" to have the skills of a karate master, the shooting ability of Wyatt Earp, and the reflexes of an Olympic athlete. But the limits of programming restrict what you can learn from a chip to a relatively low level (about +1 to +3).
        In addition, a Reflex chip must adapt to your specific neural and muscular patterns, adjusting its instructions to fit your body and vice versa (after all, the karate master who was the pattern for the chip might have been five foot ten and you might be six foot three). It learns your body movements by sampling your responses as you practice using the chip. This process is known as chipping in and is required before the chip can be fully functional.
        Chipping in takes two full days of practice for every level of, the chip. This means, for example, if you've been chipped for Martial Arts +3, it will take six days of practice before the chip has "learned" enough about your body to be fully functional. If you only get two days of practice, the chip will function as a level +1 - practice for four days, and it's raised to +2.
        `,
        surgery: "n",
        type: "neuralware",
        cost: c.cost * 2,
        humanityLoss: 0
    } as any)),
    ...reflexChips.map(c => ({
        id: "reflex-chip3" + c.skill.replace(" ", "-").toLowerCase(),
        name: "Reflex Chip Level 3 " + c.skill,
        description: `
        These are chips for Reflex-based skills only, such as weapon firing or hand-to-hand combat knowledge. These Augmented Programm TRCs feedloop - record a specific neural signal from one source, record it in memory, then use the recording to activate a series of muscle reactions in another source. Theoretically, these chips should allow even the lowliest "grunt" to have the skills of a karate master, the shooting ability of Wyatt Earp, and the reflexes of an Olympic athlete. But the limits of programming restrict what you can learn from a chip to a relatively low level (about +1 to +3).
        In addition, a Reflex chip must adapt to your specific neural and muscular patterns, adjusting its instructions to fit your body and vice versa (after all, the karate master who was the pattern for the chip might have been five foot ten and you might be six foot three). It learns your body movements by sampling your responses as you practice using the chip. This process is known as chipping in and is required before the chip can be fully functional.
        Chipping in takes two full days of practice for every level of, the chip. This means, for example, if you've been chipped for Martial Arts +3, it will take six days of practice before the chip has "learned" enough about your body to be fully functional. If you only get two days of practice, the chip will function as a level +1 - practice for four days, and it's raised to +2.
        `,
        surgery: "n",
        type: "neuralware",
        cost: c.cost * 3,
        humanityLoss: 0
    } as any)),
    ...memoryChips.map(c => ({
        id: "memory-chip1" + c.skill.replace(" ", "-").toLowerCase(),
        name: "Memory Chip Level 1 " + c.skill,
        description: `
        These are chips for information only, used for storage of raw data on a specific subject. A memory chip operates just like a skill of the same type, is rated from +1 to +3, and is applied to the same stat as the original skill (for example, AV-4 Tech would be combined with your TECH stat, while a Language chip would relate to your INT stat). MRAM chips do not require a previous knowledge of the skill involved and have no chipping-in time.
        `,
        surgery: "n",
        type: "neuralware",
        cost: c.cost * 1,
        humanityLoss: 0
    } as any)),
    ...memoryChips.map(c => ({
        id: "memory-chip2" + c.skill.replace(" ", "-").toLowerCase(),
        name: "Memory Chip Level 2 " + c.skill,
        description: `
        These are chips for information only, used for storage of raw data on a specific subject. A memory chip operates just like a skill of the same type, is rated from +1 to +3, and is applied to the same stat as the original skill (for example, AV-4 Tech would be combined with your TECH stat, while a Language chip would relate to your INT stat). MRAM chips do not require a previous knowledge of the skill involved and have no chipping-in time.
        `,
        surgery: "n",
        type: "neuralware",
        cost: c.cost * 2,
        humanityLoss: 0
    } as any)),
    ...memoryChips.map(c => ({
        id: "memory-chip3" + c.skill.replace(" ", "-").toLowerCase(),
        name: "Memory Chip Level 3 " + c.skill,
        description: `
        These are chips for information only, used for storage of raw data on a specific subject. A memory chip operates just like a skill of the same type, is rated from +1 to +3, and is applied to the same stat as the original skill (for example, AV-4 Tech would be combined with your TECH stat, while a Language chip would relate to your INT stat). MRAM chips do not require a previous knowledge of the skill involved and have no chipping-in time.
        `,
        surgery: "n",
        type: "neuralware",
        cost: c.cost * 3,
        humanityLoss: 0
    } as any))
];


export const implants: Cyberware[] = [
    {
        id: "implant-1",
        name: "Nasal Filter",
        description: "These filters increase Saves against poison sleepdrugs or other breathable toxins by +4.",
        surgery: "m",
        type: "implants",
        cost: 60,
        humanityLoss: "2"
    },
    {
        id: "implant-2",
        name: "Gills",
        description: "This implant allows the user to breath relatively clean water (saves vs poison must be made if the water source is polluted or contains toxic chemicals) for up to 4 hours.",
        surgery: "ma",
        type: "implants",
        cost: 400,
        humanityLoss: "3d6"
    },
    {
        id: "implant-3",
        name: "Independent Air Supply",
        description: "A small artificial organ filled with a spongy oxygen fixing foam implanted in the lower lungs it allows an inactive character to hold his breath for up to 25 minutes, or an active character up to 10 minutes.",
        surgery: "ma",
        type: "implants",
        cost: 300,
        humanityLoss: "2d6"
    },
    {
        id: "implant-4",
        name: "Mr Studd Sexual Implant",
        description: "All night, every night and she'll never know. Use your imagination and add +1 to your Seduction checks. Available also in the Midnight Lady version for the distaff side.",
        surgery: "ma",
        type: "implants",
        cost: 300,
        humanityLoss: "2d6"
    },
    {
        id: "implant-5",
        name: "Contraceptive Implant",
        description: "Implanted under the left armpit it prevents pregnancy for up to five years. Available for both sexes.",
        surgery: "n",
        type: "implants",
        cost: 100,
        humanityLoss: "0.5"
    },
    {
        id: "implant-6",
        name: "SubDermal Pocket",
        description: "2\"x4\" plastic pocket hidden under the skin with a pressure sensitive seal. Useful for couriers Detection requires a DIFFICULT Awareness check.",
        surgery: "m",
        type: "implants",
        cost: 200,
        humanityLoss: "2d6"
    },
    {
        id: "implant-7",
        name: "Adrenal Booster",
        description: "An artificial gland which releases adrenal hormones on command. Adds +1 to REF for up to 1D6+2 turns, three times per day.",
        surgery: "m",
        type: "implants",
        cost: 400,
        humanityLoss: "2d6"
    },
    {
        id: "implant-8",
        name: "Subdermal Armor",
        description: "This is a mesh/ballistic plastic armor inserted under the skin. To detect subdermal armor requires a DIFFICULT Awareness roll. Subdermal armor covers the torso only.",
        surgery: "cr",
        type: "implants",
        cost: 1200,
        humanityLoss: "2d6"
    },
    {
        id: "implant-10",
        name: "Motion Detector",
        description: "Detects motion (direction and strength) in a 20 sq. m. area with a 70% effectiveness. Can be mounted in the palm or heel.",
        surgery: "m",
        type: "implants",
        cost: 200,
        humanityLoss: "2d6"
    },
    {
        id: "implant-11",
        name: "Digital Recorder",
        description: "This unit can record input from internal microphones, from a digital recording link, a digital camera or all three. The unit is stored in its own subdermal pouch and can record up to 2 hours of information on each chip.",
        surgery: "m",
        type: "implants",
        cost: 200,
        humanityLoss: "2"
    },
    {
        id: "implant-12",
        name: "Audio video tape recorder",
        description: "This unit uses micro-cassettes to store input from its internal microphone, video cam or digital recording link. It is stored in its own subdermal pouch for easy access. Each cassette holds 2 hours of information.",
        surgery: "m",
        type: "implants",
        cost: 300,
        humanityLoss: "2"
    },
    {
        id: "implant-13",
        name: "Radar Sensor",
        description: "100m range radar unit implanted in shoulder, with emitter in skull. Implant causes visible bulge in forehead.",
        surgery: "m",
        type: "implants",
        cost: 200,
        humanityLoss: "2"
    },
    {
        id: "implant-14",
        name: "Sonar Implant",
        description: "50m range sonar unit implanted in skull.",
        surgery: "m",
        type: "implants",
        cost: 300,
        humanityLoss: "2"
    },
    {
        id: "implant-15",
        name: "Radiation Detector",
        description: "10m range, 80% detection effectiveness. Can be implanted in any body area, with a beep alarm mounted on the mastoid bone.",
        surgery: "m",
        type: "implants",
        cost: 200,
        humanityLoss: "2"
    },
    {
        id: "implant-16",
        name: "Chemical Analyzer",
        description: "This modification to the nasal passages analyses smells and breaks them down to their chemical components. The results can be output to an LCD screen Biomonitor or Times Square marquee.",
        surgery: "m",
        type: "implants",
        cost: 200,
        humanityLoss: "2"
    },
    {
        id: "implant-17",
        name: "Voice Synthetizer",
        description: "This system allows the user to mimic any voice or tone previously recorded by it's memory chip. The chip can store up to 10 \"voices\". This system also gives the user a +4 to any Disguise attempt (now you really sound like the person you're imitating).",
        surgery: "m",
        type: "implants",
        cost: 600,
        humanityLoss: "1d6"
    },
    {
        id: "implant-18",
        name: "AudioVox",
        description: "This system allows the user to control vocal tones volume and tone quality with the precision of a musical synthesizer. Special effects (reverb, tremolo, sustain, and choral voices), loudspeaker volumes and vocal delay programming (for singing with yourself) are also possible. This effect adds +2 to any vocal Performance Skill check.",
        surgery: "n",
        type: "implants",
        cost: 700,
        humanityLoss: "2d6"
    },
];


export const bioware: Cyberware[] = [
    {
        id: "bioware-1",
        name: "Grafted Muscle",
        description: "This is vat-grown muscle grafted onto your own, with healing. With this modification, you may increase your Body Type stat up to 2 points, paying 1000 eb per point. It can be combined with Muscle/Bone Lace.",
        surgery: "ma",
        type: "bioware",
        cost: 1000,
        humanityLoss: "2d6"
    },
    {
        id: "bioware-2",
        name: "Muscle and bone lace",
        description: "Also known as viral transformation, this enhancement involves two types of nanoids. The first type threads synthetic muscle through the natural muscle fibers anchoring and strengthening them. The second type wraps the bones in a tight weave of metal and plastic threads, making them stronger and thicker. The result is an increase of +2 to the character's Body Type stat. This increase is both in strength and the ability to absorb physical damage. This enhancement is virtually indetectable and takes about two weeks (Body Type increases by 1 each week).",
        surgery: "n",
        type: "bioware",
        cost: 1500,
        humanityLoss: "1d6/2"
    },
    {
        id: "bioware-3",
        name: "Skin Wave",
        description: "This enhancement uses nanoids to weave the top three layers of skin with a dense polymer thread. The result is a bare skin SP of 12 equivalent to light body armor. The process is relatively discreet (a DIFFICULT Awareness check to notice) and takes about two weeks (SP increases by 6 each week).",
        surgery: "n",
        type: "bioware",
        cost: 2000,
        humanityLoss: "2d6"
    },
    {
        id: "bioware-4",
        name: "Enhanced Antibodies",
        description: "These are tailored antibodies capable of attacking the most powerful viruses in game play they double the rate of healing.",
        surgery: "n",
        type: "bioware",
        cost: 3000,
        humanityLoss: "1d6/2"
    },
    {
        id: "bioware-5",
        name: "Toxin Binders",
        description: "These are nanoids designed to bond with body toxins and poisons. This enhancement adds +4 to all poison saves.",
        surgery: "n",
        type: "bioware",
        cost: 3000,
        humanityLoss: "1d6/2"
    },
    {
        id: "bioware-6",
        name: "Nanosurgeons",
        description: "These are microscopic machines adapted to surgical repair. Some seal off damaged blood vessels, while others repair damaged tissue cartilage and bone with polymer microstiches. This enhancement doubles normal healing time.",
        surgery: "n",
        type: "bioware",
        cost: 6000,
        humanityLoss: "1d6/2"
    },
];

export const cyberweapons: Cyberware[] = [
    {
        id: "cyberweapon-1",
        name: "Scratchers",
        description: "Implanted metal or carbo-glas fingernails. The incredible sharpness of the material makes these as deadly as razor blades (1D6/2 per hand damage). Scratchers cut on the bias, requiring the user to slice crossways, not rip downwards. Most people lacquer their scratchers, making them indistinguishable from normal nails (the enamel has no effect on the sharpness). These are not considered lethal (and therefore black market) cyberwear, and can be purchased in any local clinic.",
        surgery: "n",
        type: "cyberweapon",
        cost: 100,
        humanityLoss: "2d6"
    },
    {
        id: "cyberweapon-2",
        name: "Implanted Fangs (Vampires)",
        description: "Implanted fangs, usually made up of carbo-glas or superchromed metal. You can have a full set implanted (called the Sharkgrin Special, it causes 1D6/2 in bite damage), or canines only (1D6/3 damage). These are considered to be \"decorative, \" not black market cyberwear, and can be purchased in any local clinic. Vampires can be augmented with poison injectors (which are black cyberware) for double the normal price.",
        surgery: "n",
        type: "cyberweapon",
        cost: 200,
        humanityLoss: "3d6"
    },
    {
        id: "cyberweapon-3",
        name: "Rippers",
        description: " Longer, heavier versions of scratchers (1D6+3 per hand damage). The top two joints of each finger are replaced with a plastic and metal sheath, in which three inch carbo-glas claws are housed. The rippers can be extended by clawing the hand in a catlike fashion. Most people wear false fingernails over their rippers, making them much harder to spot (a DIFF task). Rippers are considered a form of black market cybertech and as such is not accessible through the average on-the-Mall clinic. Rippers cut in all directions, and are considered Edged weapons for AP purposes.",
        surgery: "m",
        type: "cyberweapon",
        cost: 400,
        humanityLoss: "3d6"
    },
    {
        id: "cyberweapon-4",
        name: "Wolvers",
        description: "The longest and deadliest of the implant blades, wolvers are implanted along the back of the hand. When the hand is clenched in a fist, the thin, triangular blades telescope and lock into place, remaining extended a full foot until the hand is relaxed. Damage is 3D6/hand. Treat as Edged weapons for AP purposes.",
        surgery: "m",
        type: "cyberweapon",
        cost: 600,
        humanityLoss: "3d6+1"
    },
    {
        id: "cyberweapon-5",
        name: "Big Knucks",
        description: "Reinforced knucklebones, giving the fist the impact value of a pair of brass knuckles (1D6+2). This is considered a form of black market cybertech, and as such is not accessible through the average on-the-Mall clinic.",
        surgery: "m",
        type: "cyberweapon",
        cost: 500,
        humanityLoss: "3d6"
    },
    {
        id: "cyberweapon-6",
        name: "Slice N' Dice",
        description: "Mono-filament wire spool mounted in end of one finger, with a weighted, false fingernail to give it balance and swing. Monomolecular wire will cut through almost any organic material and most plastics. Can be used as a garrotte, cutter or slicewhip. This is considered a form of black market cybertech, and as such is not accessible through the average on-the-Mall clinic.",
        surgery: "m",
        type: "cyberweapon",
        cost: 700,
        humanityLoss: "3d6"
    },
    {
        id: "cyberweapon-7",
        name: "Cybersnake",
        description: "This is a simpler version of the cybersnake found in the Hardwired supplement. This version has far less features and is limited to making a rake attack only. The rake has a range of 1 meter and inflicts 1D6 in damage each time it hits. The cybersnake may be mounted in any body orifice 1\" or larger, or may be implanted in the shoulders using a special mount.",
        surgery: "ma",
        type: "cyberweapon",
        cost: 1200,
        humanityLoss: "4d6"
    },
];

export const cyberoptic: Cyberware[] = [
    {
        id: "cyberoptic-2",
        name: "ColorShift",
        description: "These cyberoptics can shift color or iris pattern on demand. A full color shift takes about a minute. Mirrored, transparent, glitter tilted or lighted versions are also available.",
        surgery: "n",
        type: "cyberoptic",
        cost: 300,
        humanityLoss: "0.5"
    },
    {
        id: "cyberoptic-3",
        name: "Image Enhancement",
        description: "High-res graphics capability allows user to enhance and refine images viewed. When activated, increases Awareness skill by +2, allowing user to pick up visual cues in greater detail.",
        surgery: "n",
        type: "cyberoptic",
        cost: 300,
        humanityLoss: "1"
    },
    {
        id: "cyberoptic-4",
        name: "Targeting Scope",
        description: "This projects a targeting sight into the field of vision at will. The targeting scope will read range to specific objects, speed of movement, bearing and size, as well as providing several types of scope reticle for aligning weapons. When chipped into a smartgun, the scope will match the targeting sensors of the gun with what you are looking at, then flash a \"ready signal\" when the target is acquired. In game terms, this option allows you to add +1 only to smartgun attacks.",
        surgery: "n",
        type: "cyberoptic",
        cost: 400,
        humanityLoss: "2"
    },
    {
        id: "cyberoptic-5",
        name: "Times Square Marquee",
        description: "Scrolling red-letter screen in upper edge of vision, linked to either a software chip readout or a radio link.",
        surgery: "n",
        type: "cyberoptic",
        cost: 300,
        humanityLoss: "1"
    },
    {
        id: "cyberoptic-6",
        name: "Teleoptics",
        description: "This is the equivalent of a 20x power telescope, allowing the user to see distant objects clearly.",
        surgery: "n",
        type: "cyberoptic",
        cost: 150,
        humanityLoss: "0.5"
    },
    {
        id: "cyberoptic-7",
        name: "Micro-optics",
        description: "This is the equivalent of a laboratory microscope, allowing the user to see microscopic images, such as fingerprints, scratches on locks, etc.",
        surgery: "n",
        type: "cyberoptic",
        cost: 150,
        humanityLoss: "0.5"
    },
    {
        id: "cyberoptic-8",
        name: "Anti Dazzle",
        description: "Auto stepdown compensates for harsh sunlight, flares, etc., neutralizing effects from strobes, flashbombs and bright headlights. Never need sunglasses again.",
        surgery: "n",
        type: "cyberoptic",
        cost: 200,
        humanityLoss: "0.5"
    },
    {
        id: "cyberoptic-9",
        name: "Low Lite",
        description: "Allows user to see clearly in dim fight conditions, down to very faint moonlight or distant street lamps.",
        surgery: "n",
        type: "cyberoptic",
        cost: 200,
        humanityLoss: "0.5"
    },
    {
        id: "cyberoptic-10",
        name: "Thermograph Sensor",
        description: "Allows user to see heat patterns of objects, people. Cooler things show up as dark to light blue, hotter things as red or orange, and the hottest of all as yellow or white. Used to distinguish differing heat sources through lights structural material, or the presence of cybernetics (which are always cooler than normal body temperatures). Can also determine the operating time of certain machinery by measuring its cooling gradient.",
        surgery: "n",
        type: "cyberoptic",
        cost: 200,
        humanityLoss: "1"
    },
    {
        id: "cyberoptic-11",
        name: "Infrared",
        description: "Allows user to see in near total darkness, using heat emissions for image reception.",
        surgery: "n",
        type: "cyberoptic",
        cost: 200,
        humanityLoss: "1"
    },
    {
        id: "cyberoptic-12",
        name: "Ultraviolet",
        description: "This system allows the user to perceive images irradiated by ultraviolet light, or to detect florescent powders or tracing agents, or to use ultraviolet flashlights (indetectable by normal optics) for illumination.",
        surgery: "n",
        type: "cyberoptic",
        cost: 200,
        humanityLoss: "1"
    },
    {
        id: "cyberoptic-13",
        name: "MicroVideo Optic",
        description: "This is a cyberoptic mounted video camera which records its view on an internal video tape (20min). This recorder can also be downloaded through interface plugs to an external source. Takes up two option spaces.",
        surgery: "n",
        type: "cyberoptic",
        cost: 300,
        humanityLoss: "0.5"
    },
    {
        id: "cyberoptic-14",
        name: "Digital Camera",
        description: "This cyberoptic mounted camera takes up two option spaces. Up to 20 images can be recorded on the built-in digital chip and downloaded through interface cables to an external recorder, internal recorder, or an internal LCD screen. As new pictures are taken, the previous ones are erased.",
        surgery: "n",
        type: "cyberoptic",
        cost: 300,
        humanityLoss: "0.5"
    },
    {
        id: "cyberoptic-15",
        name: "Dartgun",
        description: "One shot dartgun. Range of 1 meter, +2 WA. Poison dart will penetrate up to SP6 automatically. SP8 50% chance, soft armors only. Takes 3 spaces.",
        surgery: "n",
        type: "cyberoptic",
        cost: 200,
        humanityLoss: "2"
    }

]

export const cyberaudio: Cyberware[] = [
    {
        id: "cyberaudio-2",
        name: "Amplified Hearing",
        description: " This system improves hearing and sound recognition ability, adding +1 to any sound-related Awareness check",
        surgery: "n",
        type: "cyberaudio",
        cost: 200,
        humanityLoss: "1"
    },
    {
        id: "cyberaudio-3",
        name: "Radio link",
        description: "A microminiature radio transceiver, usually mounted at the base of the skull and using your fillings as the antennae. It is activated by clicking the teeth together sharply. To talk, you merely sub vocalize (mutter under your breath). Reception is carried out in one of two ways: 1) a receiver directly vibrates the mastoid bone, giving you a small tinny voice in the back of your head, or 2) linked to a cyberoptics Marquee option, incoming messages are flashed into the upper edge of your field of vision as red scrolling letters. In game terms, having a radio implant gives you the ability to talk to any receiver on the same band frequency for up to 1 mile. It also means you occasionally get someone else's radio messages.",
        surgery: "n",
        type: "cyberaudio",
        cost: 100,
        humanityLoss: "1"
    },
    {
        id: "cyberaudio-4",
        name: "Phone Splice",
        description: " An improved radio splice, this implant is wired to communicate directly to your personal cellular phone. In practice, it allows you to do everything the radio splice does, but you must have your phone within 3 meters of you, and it must already be turned on and the number dialed. Audio spike is commonly used by busy Corporates who want to be able to answer calls, even in a meeting. One of the biggest advantages of audio splice is it's range - anywhere your phone will go, you can go. Even the Moon.",
        surgery: "n",
        type: "cyberaudio",
        cost: 150,
        humanityLoss: "1"
    },
    {
        id: "cyberaudio-5",
        name: "Scrambler",
        description: "This implant improves your radio or audio spike with a scrambler, so it cannot be listened into. In game terms, this makes all radio or audiospike communications private, unless the interceptor has a descrambler unit and a lot of time on his hands.",
        surgery: "n",
        type: "cyberaudio",
        cost: 100,
        humanityLoss: "0.5"
    },
    {
        id: "cyberaudio-6",
        name: "Bug Detector",
        description: "This mini-receiver is designed to pick up signals transmitted by all types of radio bugs. When the bug is active, its transmissions make a small beeping noise in the back of your head, getting louder as you get closer to the bug. In game terms, this gives you a 6 out of 10 chance (roll 1D10, choose your six numbers) of detecting any bugs within 10 feet of you. A normal option for Corporates, Fixers and Solos.",
        surgery: "n",
        type: "cyberaudio",
        cost: 200,
        humanityLoss: "0.5"
    },
    {
        id: "cyberaudio-7",
        name: "Voice Stress Analyzer",
        description: "This system acts as a lie detector, detecting minute changes in vocal patterns and tones and comparing these to a pre-recorded set of parameters. You must first use the analyser on the subject while he/she is in an unstressed situation or is telling the truth. All subsequent tests will give you a +2 to Human Perception or Interrogation skill checks on that particular subject.",
        surgery: "n",
        type: "cyberaudio",
        cost: 200,
        humanityLoss: "1"
    },
    {
        id: "cyberaudio-8",
        name: "Sound Editing",
        description: "This system allows the user to edit out distracting noises or \"zero in\" on a particular sound. Activation of this system adds +2 to any sound-related Awareness check. Sound editing can be used in conjunction with Amplified Hearing or Enhanced Hearing.",
        surgery: "n",
        type: "cyberaudio",
        cost: 150,
        humanityLoss: "0.5"
    },
    {
        id: "cyberaudio-9",
        name: "Enhanced Hearing Range",
        description: "This subsystem allows the user to hear tones in the subsonic and supersonic ranges.",
        surgery: "n",
        type: "cyberaudio",
        cost: 150,
        humanityLoss: "2"
    },
    {
        id: "cyberaudio-10",
        name: "Wearman",
        description: "A variant of the radio splice, the WearMan mounts twin vibration speakers on your mastoid bones, making your skull into a audio system of concert hall quality. A tiny chip mount wired into the earlobe allows you to plug in a variety of music chips, all fashioned to look like earnings. Or you can plug in direct to your interface plugs. Each chip contains about 100 songs. Selections are fast forwarded by squeezing the earring gently, once per selection. When the chip a removed, the WearMan turns off. A teeny bop fave.",
        surgery: "n",
        type: "cyberaudio",
        cost: 100,
        humanityLoss: "0.5"
    },
    {
        id: "cyberaudio-11",
        name: "Radar Detector",
        description: "This system produces a loud beep whenever a radar beam is encountered. It also has a 40% chance of triangulating the source; when the direction of the beam is determined, the beep changes to a clear tone.",
        surgery: "n",
        type: "cyberaudio",
        cost: 150,
        humanityLoss: "0.5"
    },
    {
        id: "cyberaudio-12",
        name: "Homing Tracer",
        description: "This option allows the character to follow a homing tone broadcast from an external sender. Range is 1 km. The tone increases in volume as the user gets closer to his target. The homing tracer comes with two senders, about the size and shape of a pin. Extra senders cost 25eb each.",
        surgery: "n",
        type: "cyberaudio",
        cost: 200,
        humanityLoss: "0.5"
    },
    {
        id: "cyberaudio-13",
        name: "Tight Beam Radio Link",
        description: "This option allows tight beam radio communication for up to 1 mile, as long as both parties are within line of sight to each other and not blocked by any object thicker than 1 foot.",
        surgery: "n",
        type: "cyberaudio",
        cost: 200,
        humanityLoss: "1"
    },
    {
        id: "cyberaudio-14",
        name: "Wide Band Radio Scanner",
        description: "This option automatically scans all major police, fire, ambulance, and Trauma Team communication bands. The user can set this scanner to cover one specific band, downloading any incoming messages to his own internal radio link or Times Square marquee.",
        surgery: "n",
        type: "cyberaudio",
        cost: 100,
        humanityLoss: "2"
    },
    {
        id: "cyberaudio-15",
        name: "Micro-recorder Link",
        description: "Downloads anything heard by the user to either an internal or external (via interface plugs) sound recorder.",
        surgery: "n",
        type: "cyberaudio",
        cost: 100,
        humanityLoss: "0.5"
    },
    {
        id: "cyberaudio-16",
        name: "Digital Recording Link",
        description: "This option allows anything heard by the user to be recorded on an internal microchip (2hrs). Recordings can be downloaded to an internal recorder or via interface plugs to an external recorder.",
        surgery: "n",
        type: "cyberaudio",
        cost: 100,
        humanityLoss: "0.5"
    },
    {
        id: "cyberaudio-17",
        name: "Level Damper",
        description: " This system automatically compensates for loud noises, such as stun-bomb attacks or sonic weapons. Characters with this option can ignore all effects of these weapons.",
        surgery: "n",
        type: "cyberaudio",
        cost: 300,
        humanityLoss: "0.5"
    }
];

export const cyberlimbOptions: Cyberware[] = [
    {
        id: "ciberlimb-3",
        name: "Quick Change Mount",
        description: "These allow the user to change cyberlimbs without using tools. The limb is bayonet mounted, and can be removed by depressing a thumb catch and twisting to the left. Quick-change mounts may also be used at the wrist or ankle. Joints to allow a variety of hands or feet to be used. To calculate HL, average the HC's of all the options you're using with the mount, then double it.",
        surgery: "n",
        type: "cyberlimb",
        cost: 200,
        humanityLoss: "2"
    },
    {
        id: "ciberlimb-4",
        name: "Hydraulic Rams",
        description: "Common to Soviet cyberwear, rams are bulkier and heavier than myomar fibers (the limb will not pass inspection as real no matter how well covered by Realskinn), but can take more damage (30 SOP to disable, 40 to destroy). Limb strength is also increased (3x crush, punch, and kicking damage).",
        surgery: "n",
        type: "cyberlimb",
        cost: 200,
        humanityLoss: "3"
    },
    {
        id: "ciberlimb-5",
        name: "Thickened Myomar strands",
        description: "These give limbs greater strength (2x normal damages) and durability (+5 SDP). Leaps are increased by 50%.",
        surgery: "n",
        type: "cyberlimb",
        cost: 250,
        humanityLoss: "2"
    },
    {
        id: "ciberlimb-6",
        name: "Reinforced Joints",
        description: "These are made of titanium steel instead of stainless and add +5 SDP to the cyberlimb.",
        surgery: "n",
        type: "cyberlimb",
        cost: 200,
        humanityLoss: "1"
    },
    {
        id: "ciberlimb-7",
        name: "Artificial Shoulder Mount",
        description: "These are swivel joints which can be mounted to a back mounted frame. This allows up to two extra arms to be mounted at waist level. The unit has an SDP of 25.",
        surgery: "n",
        type: "cyberlimb",
        cost: 1500,
        humanityLoss: "2d6"
    },
    {
        id: "ciberlimb-8",
        name: "Microwave / EMP Shielding",
        description: "Protects your cyberlimb from electromagnetic pulse and microwave attacks. Shielding may be placed on any type of limb no matter what covering is used; it is placed internally, using up one space in the limb.",
        surgery: "n",
        type: "cyberlimb",
        cost: 300,
        humanityLoss: "1"
    },
    {
        id: "ciberlimb-9",
        name: "Plastic Covering",
        description: "White all cyberlimbs come in a stripped or uncovered state, they can be covered in a variety of ways. The cheapest method is a plastic covering, available in a variety of colors with airbrushing or transparent with imbedded tights and holography. A plastic covering may also be chromed (a popular option) or covered with a metallic skin tinted in golds blues greens reds or silvers. ",
        surgery: "n",
        type: "cyberlimb",
        cost: 200,
        humanityLoss: "1"
    },
    {
        id: "ciberlimb-10",
        name: "RealSkinn",
        description: "The most expensive option is Realskinn, a flexible plastic that looks very much like skin with follicles hairs, small scars and imperfections, it has a 75% chance of passing as a \"meat\" limb to all but the closest inspection.",
        surgery: "n",
        type: "cyberlimb",
        cost: 200,
        humanityLoss: "0"
    },
    {
        id: "ciberlimb-11",
        name: "Superchrome",
        description: "",
        surgery: "n",
        type: "cyberlimb",
        cost: 200,
        humanityLoss: "3"
    },
    {
        id: "ciberlimb-9",
        name: "Armor",
        description: "In lieu of a covering, the cyberlimb can be armored with Kevlar and ballistic plastic. This armor covering protects the limb with an SP of 20 However, you may not cover or chrome an armored limb.",
        surgery: "n",
        type: "cyberlimb",
        cost: 200,
        humanityLoss: "1d6"
    }
];

export const cyberhands: Cyberware[] = [
    {
        id: "cyberhand-1",
        name: "Standard Hand",
        description: "This resembles a normal hand four fingers and a thumb. The hand is covered superchromed or armored as part of the arm.",
        surgery: "n",
        type: "cyberhand",
        cost: 150,
        humanityLoss: "0"
    },
    {
        id: "cyberhand-2",
        name: "Ripper Hand",
        description: "This is a normal hand with ripper blades mounted in the upper hand and wrist area.",
        surgery: "n",
        type: "cyberhand",
        cost: 600,
        humanityLoss: "2d6"
    },
    {
        id: "cyberhand-3",
        name: "HammerHand",
        description: "This hand is made of hardened titanium and has a powerful explosive shell driven ram that acts like a jackhammer. You punch, the shell goes off driving the fist for ward with incredible velocity and power (1D10 damage). A port in the top ejects the shell and opens to receive a new one (replacements cost 3eb).",
        surgery: "n",
        type: "cyberhand",
        cost: 600,
        humanityLoss: "2d6"
    },
    {
        id: "cyberhand-4",
        name: "BuzzHand",
        description: "This hand can be pulled back to reveal small, spinning mono wires around a titanium hub. The high speed \"weed wacker\" shears through most materials like butter. Damage is 2D6+2 soft armors reduced 2 pts/hit.",
        surgery: "n",
        type: "cyberhand",
        cost: 600,
        humanityLoss: "2d6"
    },
    {
        id: "cyberhand-5",
        name: "Tool Hand",
        description: "This hand's four fingers conceal small microtools: 1) screwdriver with changeable heads, 2) adjustable wrench, 3) battery-powered soldiering iron, 4) adjustable socket wrench The lower edge of the palm is hardened to make a dandy hammer.",
        surgery: "n",
        type: "cyberhand",
        cost: 200,
        humanityLoss: "2"
    },
    {
        id: "cyberhand-6",
        name: "Grapple Hand",
        description: "This hand's ringers extend back wards to create a five fingered throwing grapple. A small spool in the wrist contains 30 meters of fine super strong line capable of supporting 200 lbs.",
        surgery: "n",
        type: "cyberhand",
        cost: 350,
        humanityLoss: "3"
    },
    {
        id: "cyberhand-7",
        name: "Extension Hand",
        description: "This hand can extend from a telescoping wrist mount up to 1 meter. Can support up to 200 lbs.",
        surgery: "n",
        type: "cyberhand",
        cost: 350,
        humanityLoss: "2"
    },
    {
        id: "cyberhand-8",
        name: "Spike Hand",
        description: "This hand contains a hardened titanium spike which telescopes out of the wrist and through the lower palm. Can be Poisoned and is useful for climbing. Damage is 1D6+3 AP.",
        surgery: "n",
        type: "cyberhand",
        cost: 500,
        humanityLoss: "2d6"
    },
    {
        id: "cyberhand-9",
        name: "Modular Hand",
        description: "This unit contains: 1) Drug injector, 2) 1 meter garotte line extending out of fingertip, 3) One inch monomolecular blade for cutting, 4) Picklock In addition, there is a 2\"x2\" Palm Storage Space.",
        surgery: "n",
        type: "cyberhand",
        cost: 600,
        humanityLoss: "2"
    }
];

export const cyberfeet: Cyberware[] = [
    {
        id: "cyberleg-1",
        name: "Standard Foot",
        description: "",
        surgery: "n",
        type: "cyberfoot",
        cost: 200,
        humanityLoss: "0"
    },
    {
        id: "cyberleg-2",
        name: "Talon Foot",
        description: "This foot can extend narrow blades similar to scratchers for 1D6 damage. Treat as Edged weapon for AP damage.",
        surgery: "n",
        type: "cyberfoot",
        cost: 600,
        humanityLoss: "2d6"
    },
    {
        id: "cyberleg-3",
        name: "Tool Foot",
        description: "The toes of this foot contain 1) screwdriver with changeable heads, 2) adjust able wrench, 3) battery powered soldiering iron, 4) adjustable socket wrench, 5) wire saw blade.",
        surgery: "n",
        type: "cyberfoot",
        cost: 300,
        humanityLoss: "2"
    },
    {
        id: "cyberleg-4",
        name: "Web Foot",
        description: " Extends thin webs from either side of foot, as well as webs between toes. Doubles normal swimming speed, plus add +3 to Swimming skills.",
        surgery: "n",
        type: "cyberfoot",
        cost: 500,
        humanityLoss: "2"
    },
    {
        id: "cyberleg-5",
        name: "Grip Foot",
        description: "Toes of this foot can extend and curl around a 2\" bar. The soles are covered in a tacky rubberized material for increased traction. Adds +2 to Climbing skills.",
        surgery: "n",
        type: "cyberfoot",
        cost: 500,
        humanityLoss: "2"
    },
    {
        id: "cyberleg-6",
        name: "Spike Heel Foot",
        description: "A 6\" spike projects from the heel of this foot, allowing the user to make deadly rear kicks (damage is 2D6 AP). Can be used for anchoring or climbing.",
        surgery: "n",
        type: "cyberfoot",
        cost: 500,
        humanityLoss: "2d6"
    }
];

export const cyberlimbBuildIns: Cyberware[] = [
    {
        id: "cyberlimb-buildin-1",
        name: "AV Tape Recorder",
        description: "This unit uses microcassettes to store input from its internal microphone video cam or digital recording link.",
        surgery: "n",
        type: "cyberlimbBuiltIns",
        cost: 250,
        humanityLoss: "1"
    },
    {
        id: "cyberlimb-buildin-2",
        name: "Cybermodem",
        description: "This option allows the user to carry a small (and very expensive) cybermodem with him at all times. The modem must be jacked into a DataTerm, computer or other telecommunications line in order to be used Power (for up to 3 hours) is provided by a rechargeable battery (recharges in 1 hour), or through an external power cord. Program chips are changed through an access port in the limb. The cybermodem is directly jacked into the nervous system through its own internal cables, and does not require external interface plugs.",
        surgery: "n",
        type: "cyberlimbBuiltIns",
        cost: 3000,
        humanityLoss: "1"
    },
    {
        id: "cyberlimb-buildin-3",
        name: "Digital Recorder",
        description: "This unit can record input from internal microphones, digital recording links, digital cameras, or all three.",
        surgery: "n",
        type: "cyberlimbBuiltIns",
        cost: 300,
        humanityLoss: "1"
    },
    {
        id: "cyberlimb-buildin-4",
        name: "Storage Space",
        description: "This is a 2x2x6 inch storage space with a locking cover.",
        surgery: "n",
        type: "cyberlimbBuiltIns",
        cost: 50,
        humanityLoss: "0.5"
    },
    {
        id: "cyberlimb-buildin-5",
        name: "MiniCam",
        description: "This is a small digital camera which pops up from a mount in the upper arm internal chip stores 20 images and can be easily changed",
        surgery: "n",
        type: "cyberlimbBuiltIns",
        cost: 200,
        humanityLoss: "2"
    },
    {
        id: "cyberlimb-buildin-6",
        name: "MiniVid",
        description: "A pop up video camera with mini cassettes that can store up to 4 hours of recorded images.",
        surgery: "n",
        type: "cyberlimbBuiltIns",
        cost: 400,
        humanityLoss: "2"
    },
    {
        id: "cyberlimb-buildin-7",
        name: "Hidden Holster",
        description: "Leg only. A hidden storage space for holding one autopistol and 1 clip of extra ammo. The size of the leg (based on Body Type) limits the size of weapon which may be stored.",
        surgery: "n",
        type: "cyberlimbBuiltIns",
        cost: 100,
        humanityLoss: "1"
    },
    {
        id: "cyberlimb-buildin-8",
        name: "LCD Screen Readout",
        description: "This 2\"x4\" TV screen can display color graphic images. It is normally covered with a transparent screen guard images can be taken from digital recorders, minivids and mirocams, and cyberoptics. A cable can be extended from an AUX port and plugged into any standard interface plug to transfer images from someone else's cyberoptics or recorders.",
        surgery: "n",
        type: "cyberlimbBuiltIns",
        cost: 200,
        humanityLoss: "1"
    },
    {
        id: "cyberlimb-buildin-9",
        name: "Techscanner",
        description: "This device can be hooked up to the diagnostic systems of most vehicles, appliances and personal electronics to determine possible problems and troubleshoot breakdowns. Reliability is 60%. On a successful roll, the difficulty of a repair task is reduced by 3 (you know what's wrong, and you just have to fix it).",
        surgery: "n",
        type: "cyberlimbBuiltIns",
        cost: 400,
        humanityLoss: "3"
    }
];

export const cyberlimbWeapons: Cyberware[] = [
    {
        id: "cyberlimb-weapon-1",
        name: "Grenade Launcher",
        description: "",
        surgery: "n",
        type: "cyberlimbWeapon",
        cost: 400,
        humanityLoss: "2d6"
    },
    {
        id: "cyberlimb-weapon-2",
        name: "Micro-Missile Launcher",
        description: "This launcher contains four miniature missiles (explosive upped gyro rounds with heat seeking guidance and steering vents). Like the popup gun, the micromissile launcher is stored in the limb and pops out when needed, launching two missiles per turn. The missiles are self-guided (+2WA) and can follow a target through one direction change of 900 or less, giving them the ability to track around a corner (3 in 10 chance of losing target). Reloads cost 50eb each. Damage is 4D6 per missile, range 200m.",
        surgery: "n",
        type: "cyberlimbWeapon",
        cost: 900,
        humanityLoss: "2d6"
    },
    {
        id: "cyberlimb-weapon-3",
        name: "Popup Gun",
        description: "This is a standard automatic handgun concealed in a cyberarm. The action is mounted inside a popup housing which is covered when not in use. For this reason, you must always remember to uncover your arm when using a popup. Clips are inserted in the side of the action, popup guns are designed to use caseless ammunition only. The size of the cyberarm (based on Body Type) limits the size of weapon which may be mounted (similar to hidden holsters). Note you may elect to mount any pistol of the correct size listed in the Outfitting section. A light SMG equals a Med pistol and a medium SMG equals a Hvy Pistol for this purpose.",
        surgery: "n",
        type: "cyberlimbWeapon",
        cost: 800,
        humanityLoss: "2d6"
    },
    {
        id: "cyberlimb-weapon-4",
        name: "Flame Thrower",
        description: "This is a small, high pressure flame jet with a range of 1 meter, and 4 shots. Damage is 2D6 the 1 st md., 1D6/2 for 2 mds. afterwards. Soft armor is reduced 2 levels per attack.",
        surgery: "n",
        type: "cyberlimbWeapon",
        cost: 600,
        humanityLoss: "2d6"
    },
    {
        id: "cyberlimb-weapon-5",
        name: "Weapon Mount & Link",
        description: "This is an heavy duty hard point mounted either on the underside of a cyberarm, the outside thigh of a cyberlimb, or the top of a shoulder. You may attach externally mounted versions of standard weapons to this mount, jacking their control cables into the side of the hard point. You may not wear armor or clothing on the limb while the mount is in use. Available weapons include: grenade launcher, micro missile launcher, externally mounted autopistols (based on body type).",
        surgery: "n",
        type: "cyberlimbWeapon",
        cost: 100,
        humanityLoss: "3"
    },
    {
        id: "cyberlimb-weapon-6",
        name: "2 Shot Capacitor Laser",
        description: "This micro laser is designed to produce a very powerful pulse of limited duration (3D6 for each one second shot). Range is atrocious (10 meters), and recharging requires plugging into a power socket for one hour. However, it can be a particularity effective weapon for assassination or silent attacks. WA=+3.",
        surgery: "n",
        type: "cyberlimbWeapon",
        cost: 800,
        humanityLoss: "2d6"
    },
];

const linearFrames: Cyberware[] = [
    {
        id: "frame-1",
        name: "Frame Sigma",
        description: `
        Strength 12, damage modifier +4. Linear frames come in three strengths. When using the linear frame, you will use its strength value instead of your normal Body Type value for any lifting, bending, carrying or breaking task. Remember; for all their advanced construction, implanted linear frames are still quite heavy (50-100 kg) and bulky. You can't swim in them, and they have a -1 penalty to your REF. But if you want to toss a car out of the way, they're just the ticket. All linear frames lift 50x their Strength value. (Example: Sigma can dead lift 600 kg.).
        `,
        surgery: "ma",
        type: "linearFrame",
        cost: 6000,
        humanityLoss: "2d6"
    },
    {
        id: "frame-2",
        name: "Frame Beta",
        description: `
        Strength 14, damage modifier +6. Linear frames come in three strengths. When using the linear frame, you will use its strength value instead of your normal Body Type value for any lifting, bending, carrying or breaking task. Remember; for all their advanced construction, implanted linear frames are still quite heavy (50-100 kg) and bulky. You can't swim in them, and they have a -1 penalty to your REF. But if you want to toss a car out of the way, they're just the ticket. All linear frames lift 50x their Strength value. (Example: Sigma can dead lift 600 kg.).
        `,
        surgery: "ma",
        type: "linearFrame",
        cost: 8000,
        humanityLoss: "2d6"
    },
    {
        id: "frame-3",
        name: "Frame Omega",
        description: `
        Strength 16, damage modifier +8. Linear frames come in three strengths. When using the linear frame, you will use its strength value instead of your normal Body Type value for any lifting, bending, carrying or breaking task. Remember; for all their advanced construction, implanted linear frames are still quite heavy (50-100 kg) and bulky. You can't swim in them, and they have a -1 penalty to your REF. But if you want to toss a car out of the way, they're just the ticket. All linear frames lift 50x their Strength value. (Example: Sigma can dead lift 600 kg.).
        `,
        surgery: "ma",
        type: "linearFrame",
        cost: 10000,
        humanityLoss: "2d6"
    },
];

const bodyPlatings: Cyberware[] = [
    {
        id: "body-plating-1",
        name: "Cowl",
        description: "This is a body plate that covers the skull. It is anchored by mini-bolts to the scalp, and resembles the old skullcaps from bad science fiction or fantasy epics. SP=25.",
        surgery: "ma",
        type: "bodyPlating",
        cost: 200,
        humanityLoss: "1d6"
    },
    {
        id: "body-plating-2",
        name: "Faceplate",
        description: "The standard faceplate covers the entire face, with ports for breathing, eating and seeing. The armored plastic material is woven with fine myomar muscle fibers and is relatively flexible. Facial nervelinks allow limited (and somewhat stiff) changes of expression. This modification doesn't have to be ugly; many people find the silvery contours and smooth features quite attractive; somewhat like the \"sexy robot\" airbrushings of the late 20th century. However, many cyborgs like to have their faceplates sculpted into bizarre and often frightening images; monsters out of mythology, or terrifying robotic shapes. It's up to you. SP=25.",
        surgery: "cr",
        type: "bodyPlating",
        cost: 400,
        humanityLoss: "4d6"
    },
    {
        id: "body-plating-3",
        name: "Torso Plate",
        description: "This section covers the entire upper and tower torso, back and front, with expansion joints at the sides, groin and waist to allow free movement. (SP=25). Reduce your REF by -3.",
        surgery: "ma",
        type: "bodyPlating",
        cost: 2000,
        humanityLoss: "3d6"
    },
    {
        id: "body-plating-4",
        name: "Front Optic Mount",
        description: "This mount allows up to five cyberoptics to be installed in a shielded cluster in the upper face. The eyes are removed and the orbital sockets used to mount the receiver hardware for the optic mount. Optic mounts come in several styles: there are thin visor slits (ala Robocop), rotating camera clusters (like an old fashioned movie camera), or one main optic with smaller ones arranged in a circle around it. Needless to say, this really screws up your attractiveness stat, automatically reducing it to -1.",
        surgery: "ma",
        type: "bodyPlating",
        cost: 1000,
        humanityLoss: "4d6"
    },
    {
        id: "body-plating-5",
        name: "Sense Extensor",
        description: "These are flattened antennae and optic mounts, about a foot to two feet long. A single cyberoptic and a microphone are mounted in the tip, allowing you to observe things around corners without sticking your whole body into the line of fire. Sensory \"booms\" are usually mounted on the head or on the upper spine.",
        surgery: "n",
        type: "bodyPlating",
        cost: 500,
        humanityLoss: "3d6"
    },
];

export const allCyberById = [
    ...neuralware,
    ...cyberoptic,
    ...cyberaudio,
    ...cyberhands,
    ...cyberfeet,
    ...cyberlimbOptions,
    ...cyberlimbWeapons,
    ...bodyPlatings,
    ...cyberlimbBuildIns,
    ...fashionware,
    ...implants,
    ...bioware
].reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
}, {} as any);


export const cyberwareInventory = {
    other: [
        {
            title: "Fashionware",
            items: fashionware
        },
        {
            title: "Implants",
            items: implants
        },
        {
            title: "Bioware",
            items: bioware
        },
        {
            title: "Linear Frames",
            items: linearFrames
        },
        {
            title: "Cyberweapon",
            items: cyberweapons
        },
        {
            title: "Body Platings",
            items: bodyPlatings
        },
    ],
    neural: [{
        title: "Neuralware",
        items: neuralware
    }],
    leftEye: [{
        title: "Cyberoptic",
        items: cyberoptic
    }],
    rightEye: [{
        title: "Cyberoptic",
        items: cyberoptic
    }],
    audio: [{
        title: "Cyberaudio",
        items: cyberaudio
    }],
    leftArm: [{
        title: "Cyberlimb Options",
        items: cyberlimbOptions
    },
    {
        title: "Cyberlimb Hands",
        items: cyberhands
    },
    {
        title: "Cyberlimb Weapons",
        items: cyberlimbWeapons
    },
    {
        title: "Cyberlimb Built-in",
        items: cyberlimbBuildIns
    }],
    rightArm: [{
        title: "Cyberlimb Options",
        items: cyberlimbOptions
    },
    {
        title: "Cyber Hands",
        items: cyberhands
    },
    {
        title: "Cyberlimb Weapons",
        items: cyberlimbWeapons
    },
    {
        title: "Cyberlimb Built-in",
        items: cyberlimbBuildIns
    }],
    leftLeg: [{
        title: "Cyberlimb Options",
        items: cyberlimbOptions
    },
    {
        title: "Cyber Feet",
        items: cyberfeet
    },
    {
        title: "Cyberlimb Weapons",
        items: cyberlimbWeapons
    },
    {
        title: "Cyberlimb Built-in",
        items: cyberlimbBuildIns
    }],
    rightLeg: [{
        title: "Cyberlimb Options",
        items: cyberlimbOptions
    },
    {
        title: "Cyber Feet",
        items: cyberfeet
    },
    {
        title: "Cyberlimb Weapons",
        items: cyberlimbWeapons
    },
    {
        title: "Cyberlimb Built-in",
        items: cyberlimbBuildIns
    }],
};

export const characterCyber = [
    {
        id: "neural",
        title: "Neuralware"
    },
    {
        id: "rightEye",
        title: "Right Eye"
    },
    {
        id: "leftEye",
        title: "Left Eye"
    },
    {
        id: "leftArm",
        title: "Left Arm"
    },
    {
        id: "rightArm",
        title: "Right Arm"
    },
    {
        id: "leftLeg",
        title: "Left Leg"
    },
    {
        id: "rightLeg",
        title: "Right Leg"
    },
    {
        id: "audio",
        title: "Audio"
    },
    {
        id: "other",
        title: "Other"
    },
]
