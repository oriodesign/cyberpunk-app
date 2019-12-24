import React, { FC } from 'react';

import { Cyberware, cyberSurgeryDetail, CyberBodyPart } from '../model/cyberware';
import { Character } from '../model/character';

import './CyberwareItem.css';
type Props = {
    item: Cyberware;
    bodyPart: CyberBodyPart;
    character: Partial<Character>;
    setBuyingCyberware: (cyberware: Cyberware) => void;
    setFocusedCyberware: (cyberware: Cyberware) => void;
}

export const CyberwareItem: FC<Props> = ({ item, bodyPart, character, setBuyingCyberware, setFocusedCyberware }) => {
    const cyberware = character.cyberware!! as any;
    const canAfford = (character.cash!! - item.cost) >= 0;
    const isInstalled = cyberware[bodyPart] && cyberware[bodyPart].includes(item.id);

    return <tr className="cyberware-item" key={item.id}>
        <td onClick={() => setFocusedCyberware(item)} className="cyberware-item-name">{item.name}</td>
        <td className="cyberware-item-surgery">{(cyberSurgeryDetail as any)[item.surgery].title}</td>
        <td className="cyberware-item-humanity">{item.humanityLoss}</td>
        {!!cyberware[bodyPart] && !isInstalled && canAfford && <td onClick={() => setBuyingCyberware(item)} className="cyberware-item-buy">Buy {item.cost}</td>}
        {!!cyberware[bodyPart] && !isInstalled && !canAfford && <td className="cyberware-item-buy danger">Buy {item.cost}</td>}
        {isInstalled && <td className="cyberware-item-installed">Installed</td>}
        {!cyberware[bodyPart] && <td className="cyberware-item-lock"><img src="/img/icons/lock.svg" /></td>}
    </tr>;
};
