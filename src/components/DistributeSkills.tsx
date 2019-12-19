import React, { FC, useState } from 'react';
import './DistributeSkills.css';
import { Character, CharacterSkills } from '../model/character';
import { allSkillDetails, SkillDetail } from '../model/skills';
import { SkillBar } from './SkillBar';
import { statisticsList } from '../model/statistics';
import { getStartingCash, getStartingJobTitle } from '../repository/characterRepository';

type Props = {
    character: Partial<Character>;
    setCharacter: (c: Partial<Character>) => void;
    setRoute: (c: string) => void;
};

const MAX_POINTS = 40;

export const DistributeSkills: FC<Props> = ({ character, setCharacter, setRoute }) => {

    const [focusedSkill, setFocusedSkill] = useState<SkillDetail>();
    const focusedSkillStat = focusedSkill && focusedSkill.stat && statisticsList.find(s => s.id === focusedSkill.stat);

    const [skills, setSkills] = useState<CharacterSkills>(character.skills || {});
    const stats = character.statistics!!;
    const careerSkills = allSkillDetails.filter(s => s.career.some(cs => cs === character.role));
    const pickupSkills = allSkillDetails.filter(s => !s.special && s.career.every(cs => cs !== character.role));

    const usedCareerSkillPoints = Object.keys(skills)
        .filter(skillId => careerSkills.some(sd => sd.id === skillId))
        .reduce((acc, curr) => acc + skills[curr], 0);

    const usedPickupSkillsPoints = Object.keys(skills)
        .filter(skillId => pickupSkills.some(sd => sd.id === skillId))
        .reduce((acc, curr) => acc + skills[curr], 0);

    const careerSkillsPoints = MAX_POINTS - usedCareerSkillPoints;
    const pickupSkillsPoints = character.statistics!!.reflexes + character.statistics!!.intelligence - usedPickupSkillsPoints;

    const startingCash = getStartingCash(character.role!!, skills);
    const startingJob = getStartingJobTitle(character.role!!, skills);


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
            skills: { ...skills },
            cash: startingCash,
            job: startingJob
        });
        setRoute("menu");
    }

    return <div className="page">


        <h1>Career Skills</h1>

        <div className="separator" />

        <div className="row">
            <div className="left-col">

                <h2>Career points left {careerSkillsPoints}</h2>

                <div className="separator" />

                {careerSkills.map(cs => <SkillBar
                    key={cs.id}
                    onChange={(value) => onChange(cs.id, value)}
                    onClick={onClick}
                    skillDetail={cs}
                    bonus={cs.stat ? stats[cs.stat] : 0}
                    value={skills[cs.id] || 0}
                    pool={careerSkillsPoints} />)}

                <p>Based on your Career skill you will start with <strong>{startingCash}$</strong>.</p>

                <p>Based on your score your occupation is likely to be: <strong>{startingJob}</strong>.</p>

            </div>
            <div className="right-col">
                <h2>Pickup points left {pickupSkillsPoints}</h2>

                <div className="separator" />

                {pickupSkills.map(s => <SkillBar
                    key={s.id}
                    onChange={(value) => onChange(s.id, value)}
                    onClick={onClick}
                    skillDetail={s}
                    bonus={s.stat ? stats[s.stat] : 0}
                    value={skills[s.id] || 0}
                    pool={pickupSkillsPoints} />)}

            </div>
        </div>

        <div className="separator" />

        {focusedSkill && <div className="sidepanel">
            <h1>{focusedSkill.title}</h1>

            {focusedSkillStat && <h2>Related Stat: {focusedSkillStat.title}</h2>}

            <p>{focusedSkill.description}</p>

            <button className="neon-button" onClick={() => setFocusedSkill(undefined)}>Close</button>
        </div>}

        <div>
            <button className="neon-button danger" onClick={() => setRoute("menu")}>Cancel</button>
            {careerSkillsPoints === 0 && pickupSkillsPoints === 0 && <button className="neon-button" onClick={() => onConfirm()}>Confirm</button>}
        </div>

    </div>
};