import React, { FC } from 'react';
import './StatValue.css';

type Props = {
    value: number;
}

export const StatValue: FC<Props> = ({ value }) => {
    const blocks: boolean[] = [...Array(value).fill(true), ...Array(10 - value).fill(false)];


    return <div className="stat-value">
        {blocks.map((filled, i) => <div key={i} className={filled ? "stat-value-block filled" : "stat-value-block empty"} />)}
        <span className="stat-value-number">{value}</span>
    </div>
};
