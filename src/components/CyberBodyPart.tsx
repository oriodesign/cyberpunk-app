import React, { FC } from 'react';

import './CyberBodyPart.css';
import { BodyPartDetail } from '../model/cyberware';
import { Character } from '../model/character';
import { cyberSurgeryDetail } from '../data/cyberwareData';

type Props = {
    bodyPartDetail: BodyPartDetail;
    setBuyingBodyPart: (bodyPart: BodyPartDetail) => void;
    character: Partial<Character>
}

export const CyberBodyPart: FC<Props> = ({ character, bodyPartDetail, setBuyingBodyPart }) => {

    const canAfford = (character.cash!! - bodyPartDetail.cost) >= 0;

    return <article className="cyber-body-part">
        <div className="cyber-body-part-name">{bodyPartDetail.name}</div>

        <div className="cyber-body-part-surgery"><strong>Surgery: </strong> {(cyberSurgeryDetail as any)[bodyPartDetail.surgery].title}</div>
        <div className="cyber-body-part-humanity"><strong>Humanity Loss: </strong> {bodyPartDetail.humanityLoss}</div>
        <p className="cyber-body-part-description">{bodyPartDetail.description}</p>

        <div className="separator" />

        {canAfford && <div onClick={() => setBuyingBodyPart(bodyPartDetail)} className="cyber-body-part-buy neon-button">Buy {bodyPartDetail.cost}$</div>}
        {!canAfford && <div className="cyber-body-part-buy neon-button danger">Buy {bodyPartDetail.cost}$</div>}
    </article>
};
