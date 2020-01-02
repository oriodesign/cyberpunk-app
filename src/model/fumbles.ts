export const fumblesByCategory = {
    combat: [
        {
            range: [1, 4],
            result: "No fumble. You just screw up."
        },
        {
            range: [5, 5],
            result: "You drop your weapon."
        },
        {
            range: [6, 6],
            result: "Weapon discharges (make reliability roll for non autoweapon) or strikes something harmless.",
        },
        {
            range: [7, 7],
            result: "Weapon jams. Make reliability roll for non autoweapon) or imbeds itself in the ground for 1 turn.",
        },
        {
            range: [8, 8],
            result: "You manage to wound youself. Roll a location"
        },
        {
            range: [9, 10],
            result: "You manage to wound a member of your party."
        }
    ],
    reflex: [
        {
            range: [1, 4],
            result: "No fumble. You just mess up and make an idiot of youself."
        },
        {
            range: [5, 7],
            result: "You fail miserably, Take 1 point damage (sprain, fall...) plus make a Save vs Stun."
        },
        {
            range: [8, 10],
            result: "You fail abysmally. Take 1d6 damage and make a Save vs Stun with -1."
        },
    ],
    tech: [
        {
            range: [1, 4],
            result: "No fumble. You just can't get it together."
        },
        {
            range: [5, 7],
            result: "You not only fail, but you make it worse. You drop the tool you are working with or you lose the grip and you damage the thing you are working on. Raise the difficulty by 5 points to try again."
        },
        {
            range: [8, 10],
            result: "Wow. Did you ever blow it! You damaged the device beyond repair. Buy a new one."
        },
    ],
    emp: [
        {
            range: [1, 4],
            result: "No fumble, they just won't buy it."
        },
        {
            range: [5, 6],
            result: "So much for your people skills! You not only don't convince them; you leave them totally cold (-4 on your next EMP roll) to any other suggestion you might have."
        },
        {
            range: [7, 10],
            result: "Yow. You blew it royally. You not only didn't convince them, but now they are actually totally opposed to anything you want to do. Roll 1d10. On 1-4 they attempt to do you physical harm."
        },
    ],
    int: [
        {
            range: [1, 4],
            result: "No fumble; You just don't know how to do it."
        },
        {
            range: [5, 7],
            result: "You don't know anything about it. You don't know what's going on. Make a convince check with -2 to see if anyone else notices how dumb you are."
        },
        {
            range: [8, 10],
            result: "Wow. You are oblivious. You don't only don't know anything about the subject but everyone knows how ignorant you are."
        },
    ]
};