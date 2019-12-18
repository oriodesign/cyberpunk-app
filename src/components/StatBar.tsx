import React, { FC } from "react";
import './StatBar.css';
import { StatDetail } from "../model/statistics";

type Props = {
    statDetail: StatDetail;
    value: number;
    pool: number;
    onChange: (value: number) => void;
    onClick: (s: StatDetail) => void;
};

export const StatBar: FC<Props> = ({ statDetail, value, onChange, pool, onClick }) => {

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
        if (value < 3) {
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
            <h2 onClick={() => onClick(statDetail)}>{statDetail.title}</h2>
            <img alt={statDetail.title} onClick={() => onClick(statDetail)} src={`/img/stats/${statDetail.id}.svg`} />
        </div>

    </div>
}