import React, { FC } from 'react';
import './Menu.css';
import { MenuItem } from './MenuItem';
import { Character } from '../model/character';

type Props = {
    setRoute: (route: string) => void;
    character: Partial<Character>
}

export const Menu: FC<Props> = ({ setRoute, character }) => {

    const isSkillsDisabled = !character.statistics;
    const isGearDisabled = !character.cash;
    const isCyberwearDisabled = !character.cash;

    return <div className="menu">
        <div className="menu-inner">

            {character.status === "completed" && <>
                <MenuItem disabled={isSkillsDisabled} title="Skills" route="select-skills" setRoute={setRoute} />
                <MenuItem disabled={isGearDisabled} title="Gear" route="select-gear" setRoute={setRoute} />
                <MenuItem disabled={isCyberwearDisabled} title="Cyberware" route="select-cyberware" setRoute={setRoute} />
            </>}


            {character.status === "creating" && <>
                <MenuItem disabled={false} title="Role" route="select-role" setRoute={setRoute} />
                <MenuItem disabled={false} title="Character Points" route="character-points" setRoute={setRoute} />
                <MenuItem disabled={isSkillsDisabled} title="Skills" route="select-skills" setRoute={setRoute} />
                <MenuItem disabled={isGearDisabled} title="Gear" route="select-gear" setRoute={setRoute} />
                <MenuItem disabled={isCyberwearDisabled} title="Cyberware" route="select-cyberware" setRoute={setRoute} />
            </>}

        </div>
    </div>
};
