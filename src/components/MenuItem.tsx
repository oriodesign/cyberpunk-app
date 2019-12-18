import React, { FC } from 'react';
import './MenuItem.css';
type Props = {
    title: string;
    route: string;
    disabled: boolean;
    setRoute: (route: string) => void;
}

export const MenuItem: FC<Props> = ({ title, route, setRoute, disabled }) => {

    const className = `menu-item neon-button ${disabled && "disabled"}`;

    return <div onClick={() => !disabled && setRoute(route)} className={className}>
        {title}
    </div>
};
