import React, { FC } from 'react';

import './DamageBar.css';
type Props = {
    damage: number;
}

const damageLevels = [
    "Light", "Serious", "Critical", "Mortal 0",
    "Mortal 1", "Mortal 2", "Mortal 3", "Mortal 4", "Mortal 5", "Mortal 6"
]

export const DamageBar: FC<Props> = ({ damage }) => {

    return <div className="damage-bar">

        <div className="damage-bar-row">
            {damageLevels.map((d, i) => <div className={damage > (i * 4) ? "damage-bar-level active" : "damage-bar-level"}>
                <div className="damage-bar-label">
                    {d}
                </div>
                <div className="damage-points">
                    {[0, 1, 2, 3].map(p => <div className={damage > (i * 4) + p ? "damage-point active" : "damage-point"}></div>)}
                </div>
                <div className="damage-stun-modifier">
                    Stun=-{i}
                </div>
            </div>)}
        </div>

    </div>
};
