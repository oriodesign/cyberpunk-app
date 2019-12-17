import React, { FC } from 'react';
import './MenuItem.css';
type Props = {
    title: string;
    route: string;
    setRoute: (route: string) => void;
}

export const MenuItem: FC<Props> = ({ title, route, setRoute }) => {
    return <div onClick={() => setRoute(route)} className="menu-item neon-button">
        {title}
    </div>
};
