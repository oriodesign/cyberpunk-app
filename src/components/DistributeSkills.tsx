import React, { FC, useState } from 'react';
import './DistributeSkills.css';
import { Character, CharacterSkills } from '../model/character';
import { allSkillDetails, SkillDetail } from '../model/skills';
import { SkillBar } from './SkillBar';
import { statisticsList } from '../model/statistics';

type Props = {
    character: Partial<Character>;
    setCharacter: (c: Partial<Character>) => void;
    setRoute: (c: string) => void;
};

const MAX_POINTS = 40;

export const DistributeSkills: FC<Props> = ({ character, setCharacter, setRoute }) => {

    const [focusedSkill, setFocusedSkill] = useState<SkillDetail>();
    const focusedSkillStat = focusedSkill && focusedSkill.stat && statisticsList.find(s => s.id === focusedSkill.stat);

    const [skills, setSkills] = useState<CharacterSkills>({});
    const stats = character.statistics!!;
    const careerSkills = allSkillDetails.filter(s => s.career.some(cs => cs === character.role));

    const usedPoints = Object.keys(skills).reduce((acc, curr) => acc + skills[curr], 0);

    const pool = MAX_POINTS - usedPoints;

    function onChange(id: string, value: number) {
        setSkills({
            ...skills,
            [id]: value
        });
    }
    function onClick(s: SkillDetail) {
        setFocusedSkill(s);
    }

    function onConfirm() {
        setCharacter({
            ...character,
            skills: { ...skills }
        });
        setRoute("menu");
    }

    return <div className="page">


        <h1>Career Skills</h1>

        <div className="separator" />

        <h2>Career points left {pool}</h2>

        <p>Distribute your points in your career skills.</p>

        <div className="separator" />

        {careerSkills.map(cs => <SkillBar
            key={cs.id}
            onChange={(value) => onChange(cs.id, value)}
            onClick={onClick}
            skillDetail={cs}
            bonus={cs.stat ? stats[cs.stat] : 0}
            value={skills[cs.id] || 0}
            pool={pool} />)}


        <div className="separator" />

        {focusedSkill && <div className="sidepanel">
            <h1>{focusedSkill.title}</h1>

            {focusedSkillStat && <h2>Related Stat: {focusedSkillStat.title}</h2>}

            <p>{focusedSkill.description}</p>

            <button className="neon-button" onClick={() => setFocusedSkill(undefined)}>Close</button>
        </div>}

        <div>
            <button className="neon-button danger" onClick={() => setRoute("menu")}>Cancel</button>
            {pool === 0 && <button className="neon-button" onClick={() => onConfirm()}>Confirm</button>}
        </div>

    </div>
};