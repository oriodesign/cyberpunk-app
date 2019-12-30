export const fumbles = {
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
            result: ""
        },
        {
            range: [5, 7],
            result: ""
        },
        {
            range: [8, 10],
            result: ""
        },
    ],
    emp: [
        {
            range: [1, 4],
            result: ""
        },
        {
            range: [5, 6],
            result: ""
        },
        {
            range: [7, 10],
            result: ""
        },
    ],
    int: [
        {
            range: [1, 4],
            result: ""
        },
        {
            range: [5, 7],
            result: ""
        },
        {
            range: [8, 10],
            result: ""
        },
    ]
};