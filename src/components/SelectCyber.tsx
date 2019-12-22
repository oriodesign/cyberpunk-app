import React, { FC, useState } from 'react';
import './SelectCyber.css';
import { Character } from '../model/character';
import { Cyberware, CyberBodyPart, cyberBodyPartDetails, cyberwareInventory } from '../model/cyberware';
import { BodyPart } from '../model/gear';


type Props = {
    character: Partial<Character>;
    setCharacter: (c: Partial<Character>) => void;
    setRoute: (route: string) => void;
}

export const SelectCyber: FC<Props> = ({ character, setCharacter, setRoute }) => {
    const [bodyPart, setBodyPart] = useState<CyberBodyPart>("other");
    const [focusedCyberware, setFocusedCyberware] = useState<Cyberware>();
    const cyberware = character.cyberware!!;
    const bodyPartDetail = cyberBodyPartDetails[bodyPart];
    const inventory = cyberwareInventory[bodyPart];

    function className(type: string): string {
        return type === bodyPart ? "body-part-button selected" : "body-part-type-button"
    };

    function buy(item: Cyberware, area: string) {

    }

    function onConfirm() {
        setRoute("menu");
    }

    return <div className="select-cyberware page">

        <h1 className="page-title">Cyberware</h1>

        <div className="row">
            <div className="left-col">

                <div className="body-part-selector">
                    {Object.keys(cyberBodyPartDetails).map((key) =>
                        <div className={className(key)} onClick={() => setBodyPart(key as any)}>{(cyberBodyPartDetails as any)[key].menuLabel}</div>
                    )}

                </div>

            </div>
            <div className="center-col">

                {!cyberware[bodyPart] && <div>
                    <div>{bodyPartDetail.name}</div>
                    <div>{bodyPartDetail.description}</div>
                    <div>{bodyPartDetail.surgery}</div>
                    <div>{bodyPartDetail.humanityLoss}</div>
                    <div>Buy {bodyPartDetail.cost}$</div>
                </div>}


                {!!cyberware[bodyPart] && <div>
                    {inventory.map(i => <div key={i.title}>
                        <h1>{i.title}</h1>
                        <table className="cyberware-list">
                            {i.items.map(item => <div key={item.id}>
                                <div>{item.name}</div>
                                <div>{item.surgery}</div>
                                <div>{item.humanityLoss}</div>
                                <div>Buy {item.cost}</div>
                            </div>)}
                        </table>
                    </div>
                    )}

                </div>}

            </div>

            <div className="right-col">

            </div>
        </div>


        {focusedCyberware && <div className="sidepanel">
            <h1>{focusedCyberware.name}</h1>

            <p>{focusedCyberware.description}</p>

            <button className="neon-button" onClick={() => setFocusedCyberware(undefined)}>Close</button>
        </div>}

        <div>
            <button className="neon-button danger" onClick={() => setRoute("menu")}>Cancel</button>
        </div>

    </div>
};