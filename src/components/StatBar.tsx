import React, { FC } from "react";
import './StatBar.css';

type Props = {
    id: string;
    title: string;
    value: number;
    pool: number;
    onChange: (value: number) => void;
};

export const StatBar: FC<Props> = ({ id, value, onChange, pool, title }) => {

    const blocks: boolean[] = [...Array(value).fill(true), ...Array(10 - value).fill(false)];

    function plus() {
        if (pool < 1) {
            return;
        }
        if (value > 9) {
            return;
        }
        onChange(value + 1);
    }
    function minus() {
        if (value < 1) {
            return;
        }
        onChange(value - 1);
    }

    return <div className={`stat-bar-wrapper stat-value-${value}`}>
        <div className="stat-bar">
            <div className="stat-value">{value}</div>
            {blocks.map((filled, index) => <div key={index} className={filled ? `stat-block filled` : `stat-block empty empty-${index}`} />)}
            <div className="stat-buttons-wrapper">
                <div onClick={plus} className="stat-plus">+</div>
                <div onClick={minus} className="stat-minus">-</div>
            </div>
        </div>
        <div className="stat-title-wrapper">
            <h2>{title}</h2>
            <img src={`/img/stats/${id}.svg`} />
        </div>

    </div>
}