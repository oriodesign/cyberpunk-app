import React, { FC } from 'react';
import './Menu.css';
import { MenuItem } from './MenuItem';

type Props = {
    setRoute: (route: string) => void;
}

export const Menu: FC<Props> = ({ setRoute }) => {
    return <div className="menu">
        <div className="menu-inner">

            <MenuItem title="Role" route="select-role" setRoute={setRoute} />
            <div className="menu-item-separator"></div>

            <MenuItem title="Character Points" route="character-points" setRoute={setRoute} />
            <div className="menu-item-separator"></div>

            <MenuItem title="Skills" route="select-skills" setRoute={setRoute} />
            <div className="menu-item-separator"></div>

            <MenuItem title="Gear" route="select-gear" setRoute={setRoute} />
            <div className="menu-item-separator"></div>

            <MenuItem title="Cyberware" route="select-cyberware" setRoute={setRoute} />
            <div className="menu-item-separator"></div>
        </div>
    </div>
};
