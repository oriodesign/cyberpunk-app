import React, { FC, useState } from 'react';
import './SelectCyber.css';
import { Character } from '../model/character';
import { Cyberware, CyberBodyPart, BodyPartDetail } from '../model/cyberware';
import { BuyBodyPartModal } from './BuyBodyPartModal';
import { BuyCyberwareModal } from './BuyCyberwareModal';
import { CyberwareItem } from './CyberwareItem';
import { CyberBodyPart as Cb } from './CyberBodyPart';
import { cyberBodyPartDetails, cyberwareInventory } from '../data/cyberwareData';

type Props = {
    character: Partial<Character>;
    setCharacter: (c: Partial<Character>) => void;
    setRoute: (route: string) => void;
}

export const SelectCyber: FC<Props> = ({ character, setCharacter, setRoute }) => {
    const [bodyPart, setBodyPart] = useState<CyberBodyPart>("other");
    const [humanityRoll, setHumanityRoll] = useState();
    const [buyingCyberware, setBuyingCyberware] = useState<Cyberware>();
    const [buyingBodyPart, setBuyingBodyPart] = useState<BodyPartDetail>();
    const [focusedCyberware, setFocusedCyberware] = useState<Cyberware>();
    const cyberware = character.cyberware!!;
    const bodyPartDetail = cyberBodyPartDetails[bodyPart];
    const inventory = cyberwareInventory[bodyPart];

    function className(type: string): string {
        return type === bodyPart ? "body-part-type-button selected" : "body-part-type-button"
    };

    function onHumanityRoll(result: number) {
        setHumanityRoll(result);
        setCharacter({
            ...character,
            humanity: character.humanity!! - result,
            cash: character.cash!! - buyingBodyPart!!.cost,
            cyberware: {
                ...cyberware,
                [buyingBodyPart!!.id]: []
            }
        });
    }

    function onHumanityRollForCyberware(result: number) {
        const bc = buyingCyberware!!;

        setHumanityRoll(result);
        setCharacter({
            ...character,
            humanity: character.humanity!! - result,
            cash: character.cash!! - bc.cost,
            cyberware: {
                ...cyberware,
                [bodyPart]: [
                    ...cyberware[bodyPart]!!,
                    bc.id
                ]
            }
        });
    }

    function closeModal() {
        setBuyingBodyPart(undefined);
        setHumanityRoll(undefined);
        setBuyingCyberware(undefined);
    }

    return <div className="select-cyberware page">

        <h1 className="page-title">Cyberware</h1>

        <div className="row">
            <div className="left-col">

                <div className="body-part-selector">
                    {Object.keys(cyberBodyPartDetails).map((key) =>
                        <div
                            key={key}
                            className={className(key)}
                            onClick={() => setBodyPart(key as any)}>{(cyberBodyPartDetails as any)[key].menuLabel}</div>
                    )}

                </div>

            </div>
            <div className="center-col">

                {!cyberware[bodyPart] && <Cb
                    character={character}
                    bodyPartDetail={bodyPartDetail}
                    setBuyingBodyPart={setBuyingBodyPart} />}

                {!!cyberware[bodyPart] && bodyPart !== "other" && <div
                    className="installed-body-part"><strong>{bodyPartDetail.name}</strong> installed</div>}


                <div className="cyberware-list">
                    {inventory.map(i => <div className="cyberware-type-wrapper" key={i.title}>
                        <h1>{i.title}</h1>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Surgery</th>
                                        <th>Hum. <br />Loss</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {i.items.map(item => <CyberwareItem
                                        bodyPart={bodyPart}
                                        character={character}
                                        item={item}
                                        key={item.id}
                                        setFocusedCyberware={setFocusedCyberware}
                                        setBuyingCyberware={setBuyingCyberware} />)}
                                </tbody>

                            </table></div>
                    </div>
                    )}

                </div>

            </div>

            <div className="right-col">
                <div className="cash-display">{character.cash!!}$</div>
                <div className="humanity-display">{character.humanity!!} Humanity</div>
            </div>
        </div>


        {focusedCyberware && <div className="sidepanel">
            <h1>{focusedCyberware.name}</h1>
            <p>{focusedCyberware.description}</p>
            <button className="neon-button" onClick={() => setFocusedCyberware(undefined)}>Close</button>
        </div>}

        {buyingBodyPart && <BuyBodyPartModal
            bodyPart={bodyPartDetail}
            closeModal={closeModal}
            humanityRoll={humanityRoll}
            onHumanityRoll={onHumanityRoll} />}

        {buyingCyberware && <BuyCyberwareModal
            cyberware={buyingCyberware}
            closeModal={closeModal}
            humanityRoll={humanityRoll}
            onHumanityRollForCyberware={onHumanityRollForCyberware}
        />}

        <div>
            <button className="neon-button danger" onClick={() => setRoute("menu")}>Cancel</button>
        </div>

    </div>
};