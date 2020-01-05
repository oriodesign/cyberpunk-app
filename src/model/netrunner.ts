export const cyberdeckList = [
    {
        id: "deck-1",
        name: "Standard Cyberdeck",
        description: "Made of plastic. It has the size of a paperbook.",
        weight: 0.5,
        cost: 1000
    },
    {
        id: "deck-2",
        name: "Portable Deck",
        description: "These decks have internal, rechargeable power packs good for up to 4 hours (recharge is 1 hour for every hour of battery power). All combat, cyberlimb and cellular decks are of this type. A portable deck costs 2000eb.",
        weight: 0.5,
        cost: 2000
    },
    {
        id: "deck-3",
        name: "Cyberlimb Deck",
        description: "These are portable decks about the size of a pack of cigarettes. They can be installed into a cyberlimb (phone connection cables are jacked between the limb and the phone lines). The deck itself is hardwired right into the body along with the controlling links for the cyberlimb. This can be a very dangerous option - hardwired right in, it's impossible for your buddies to notice you frying and yank the cables on you. Instead, you just burn.",
        weight: 0.5,
        cost: 2000
    },
    {
        id: "deck-4",
        name: "Combat Assault Deck",
        description: "These decks are constructed of rugged ceramics and steel, capable of taking bullet hits and crash impacts (SP20). Most combat decks are designed to be portable, and have adapter cables which allow them to be plugged into any type of phone line. Around 3000 when available (a DIFFICULT Task).",
        weight: 0.5,
        cost: 3000
    },
    {
        id: "deck-5",
        name: "Cellular Deck",
        description: "These are portable decks designed to link up with a cellular phone net. They are very effective anywhere within a city, but are useless in rural areas (most have jacks for manual phone patches). A cellular deck has a 25% chance of losing cellular connection when used in a moving vehicle; a failed roll will automatically drop the Netrunner out of the Net. But it's a small price to pay for the high level of mobility offered by a cellular deck. A cellular deck costs 4000eb.",
        weight: 0.5,
        cost: 4000
    },
];



export const cyberdeckOptions = [
    {
        id: "deck-option-1",
        name: "Extra Memory",
        description: "For an additional 5,000eb, you can purchase an additional memory for your deck. This improves your program power to 20 MU, double its stock size.",
        cost: 5000
    },
    ...[1, 2, 3, 4, 5].map(i => ({
        id: "deck-option-speed-" + i,
        name: "Speed +" + i,
        description: "For an additional 2,000eb, you can increase your deck's speed by one level, up to a ceiling of 5. This can be a lifesaver, as deck speed determines who moves first in a Netrunner combat. And in this game, last is dead.",
        cost: 2000 * i
    })),
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({
        id: "deck-option-wall-" + i,
        name: "Data Wall +" + i,
        description: "For an additional 1,000eb, you can increase your deck's data wall protection by one level, up to a ceiling of 10. Data walls are important; they are the armor of the deck, resisting attacks from anti-system programs.",
        cost: 1000 * i
    })),
];