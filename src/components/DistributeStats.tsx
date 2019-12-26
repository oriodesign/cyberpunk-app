import React, { FC, useState } from 'react';
import './DistributeStats.css';
import { Character, CharacterStatistics, deriveStats } from '../model/character';
import { statisticsList, StatDetail } from '../model/statistics';
import { StatBar } from './StatBar';



type Props = {
    character: Partial<Character>;
    setCharacter: (c: Partial<Character>) => void;
    setRoute: (c: string) => void;
}

const MIN_STAT = 2;

const baseStats = {
    intelligence: MIN_STAT,
    reflexes: MIN_STAT,
    cool: MIN_STAT,
    technicalAbility: MIN_STAT,
    luck: MIN_STAT,
    attractiveness: MIN_STAT,
    movementAllowance: MIN_STAT,
    empathy: MIN_STAT,
    bodyType: MIN_STAT,
};

export const DistributeStats: FC<Props> = ({ setRoute, character, setCharacter }) => {

    const [statistics, setStatistics] = useState<CharacterStatistics>(character.statistics || baseStats);

    const [focusedCharacteristic, setFocusedCharacteristic] = useState<StatDetail>();
    const total = character.statsPoints || 0;
    const usedPoints = statisticsList.reduce((acc, curr) => (statistics as any)[curr.id] + acc, 0);
    const pointsAvailable = total - usedPoints;
    const derivedStats = deriveStats(statistics);


    function onStatChange(id: string, value: number) {
        setStatistics({
            ...statistics,
            [id]: value
        });
    }

    function onConfirm() {
        setCharacter({
            ...character,
            statistics: { ...statistics },
            humanity: statistics.empathy * 10,
            cash: 0,
            skills: undefined,
            job: undefined,
            inventory: [],
            cyberware: {
                other: []
            }
        });
        setRoute("menu");
    }

    return <div className="distribute-stats page">

        <h1 className="page-title">
            <span>Character Points</span>
            <span className="total-points-left"><span>points left</span> <strong>{pointsAvailable}</strong></span>
        </h1>

        <div className="row">
            <div className="left-col">
                <div className="stat-section">
                    {statisticsList.map(s => <StatBar
                        key={s.id}
                        onChange={(value) => onStatChange(s.id, value)}
                        onClick={setFocusedCharacteristic}
                        statDetail={s}
                        value={(statistics as any)[s.id]}
                        pool={pointsAvailable} />)}
                </div>

            </div>
            <div className="right-col">
                <div className="derived-stats-section">

                    <h2>Derived stats from Movement</h2>
                    <article>
                        <h3>Run in 3.2s</h3>
                        <span>{derivedStats.run}m</span>
                    </article>
                    <article>
                        <h3>Leap</h3>
                        <span>{derivedStats.leap}m</span>
                    </article>

                    <div className="separator" />

                    <h2>Derived stats from Body Type</h2>

                    <article>
                        <h3>Carry</h3>
                        <span>{derivedStats.carry}kg</span>
                    </article>
                    <article>
                        <h3>Dead lift</h3>
                        <span>{derivedStats.lift}kg</span>
                    </article>
                    <article>
                        <h3>Save Number</h3>
                        <span>{derivedStats.saveNumber}</span>
                    </article>
                    <article>
                        <h3>Body type modifier</h3>
                        <span>{derivedStats.bodyTypeModifier} Damage</span>
                    </article>

                    <div className="separator" />

                    <h2>Derived stats from Empathy</h2>
                    <article>
                        <h3>Humanity</h3>
                        <span>{derivedStats.humanity}</span>
                    </article>

                    <div className="separator" />

                    <h2>Derived stats from Intelligence and Reflexes</h2>
                    <article>
                        <h3>Pickup skills points</h3>
                        <span>{statistics.intelligence + statistics.reflexes}</span>
                    </article>
                </div>
            </div>
        </div>

        <div className="separator" />

        {focusedCharacteristic && <div className="sidepanel">
            <h1>{focusedCharacteristic.title}</h1>
            <p>{focusedCharacteristic.description}</p>
            <button className="neon-button" onClick={() => setFocusedCharacteristic(undefined)}>Close</button>
        </div>}

        <div>
            <button className="neon-button danger" onClick={() => setRoute("menu")}>Cancel</button>
            {pointsAvailable === 0 && <button className="neon-button" onClick={() => onConfirm()}>Confirm</button>}
        </div>

    </div>
};
