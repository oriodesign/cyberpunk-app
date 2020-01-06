import React, { FC, useState } from 'react';
import './SkillModal.css';
import { Character } from '../model/character';
import { Modal } from './Modal';
import { DiceRoller } from './DiceRoller';
import { findFumble } from '../data/fumblesData';
import { skillStatMap, skillTitlesMap, skillDescriptionMap } from '../data/skillData';

type Props = {
    character: Partial<Character>;
    skill: string;
    closeModal: () => void;
}

export const SkillModal: FC<Props> = ({ character, closeModal, skill }) => {

    const [result, setResult] = useState<number>();
    const [fumble, setFumble] = useState<number>();
    const skillStat = skillStatMap[skill];

    const bonus: number = character.skills!![skill] + ((character.statistics as any)[skillStat]);
    const isFumble = result ? result - bonus === 1 : false;
    const fumbleLabel = fumble ? findFumble(skillStat, fumble) : undefined;

    return <Modal>
        <h1>Skill: {skillTitlesMap[skill]}</h1>
        <p>{skillDescriptionMap[skill]}</p>

        <DiceRoller
            critical={false}
            onRolled={setResult}
            count={1}
            reroll={true}
            min={1}
            max={2}
            bonus={bonus} />

        {result && <p>Result: {result}</p>}

        {isFumble && <div>
            <p>Fumble Roll</p>
            <DiceRoller
                critical={false}
                onRolled={setFumble}
                count={1}
                reroll={true}
                min={1}
                max={10}
                bonus={0} />

            {fumble && <p>Fumble ({fumble}): {fumbleLabel}</p>}

        </div>}

        <div className="separator" />

        <div onClick={() => closeModal()} className="neon-button danger">Close</div>

    </Modal>;
};
