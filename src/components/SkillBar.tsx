import React, { FC } from "react";
import './SkillBar.css';
import { SkillDetail } from "../model/skills";
import { statAbbr } from "../model/statistics";

type Props = {
    skillDetail: SkillDetail;
    value: number;
    pool: number;
    bonus: number;
    onChange: (value: number) => void;
    onClick: (s: SkillDetail) => void;
};

export const SkillBar: FC<Props> = ({ skillDetail, value, pool, onChange, onClick, bonus }) => {

    const blocks: boolean[] = [...Array(value).fill(true), ...Array(10 - value).fill(false)];

    function onClickBlock(index: number) {
        const newValue = index + 1;
        // Deselect last
        if (value === newValue) {
            return onChange(newValue - 1);
        }
        // We decrease value 
        if (value > newValue) {
            return onChange(newValue);
        }
        // We are trying to increase
        if ((pool - newValue) < 0) {
            return;
        }
        onChange(newValue);
    }

    return <div className="skill-bar-container">
        <div className="skill-bar">
            <label onClick={() => onClick(skillDetail)}>{skillDetail.title}</label>
            {blocks.map((filled, index) => <div
                onClick={() => onClickBlock(index)}
                key={index}
                className={filled ? `skill-block filled` : `skill-block empty empty-${index}`} />)}
            <div className="skill-num-box skill-num-box-value">{value}</div>
            {<div className="skill-num-box skill-num-box-value-stat-bonus"> {skillDetail.stat ? '+' + bonus + ' ' + (statAbbr as any)[skillDetail.stat] : '-'}</div>}
            <div className="skill-num-box skill-num-box-total">{bonus + value}</div>
        </div>
    </div>
};
