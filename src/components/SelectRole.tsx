import React, { FC, useState } from 'react';
import { roles, Role } from '../model/role';
import { RoleOption } from './RoleOption';
import { Character } from '../model/character';
import './SelectRole.css';
import { allSkillDetails } from '../model/skills';
type Props = {
    character: Partial<Character>;
    setCharacter: (c: Partial<Character>) => void;
    setRoute: (c: string) => void;
};

export const SelectRole: FC<Props> = ({ character, setCharacter, setRoute }) => {

    const [focusedRole, setFocusedRole] = useState<Role>();

    function setRole(role: Role) {
        setCharacter({
            ...character,
            skills: undefined,
            role: role.id
        });
        setRoute("menu");
        setFocusedRole(undefined);
    }


    return <div className="page">

        <h1 className="page-title">Select Role</h1>


        {!focusedRole && <div>
            <div className="select-role-container">
                <div className="select-role">
                    {roles.map(r => <RoleOption role={r} setRole={setFocusedRole} />)}

                </div>
            </div>
            <button className="neon-button danger" onClick={() => setRoute("menu")}>Cancel</button>
        </div>}


        {focusedRole && <div className="focused-role row">
            <div className="left-col hide-mobile">
                <img alt={focusedRole.title} src={`/img/${focusedRole.id}.jpg`} />
            </div>
            <div className="right-col">
                <h1>{focusedRole.title}</h1>
                <h2>{focusedRole.subtitle}</h2>
                <p>{focusedRole.description}</p>
                <p><strong>Career Skills: </strong>{allSkillDetails.filter(s => s.career.some(cs => cs === focusedRole.id)).map(s => s.title).join(", ")}.</p>

                <div className="separator" />

                <div>
                    <button className="neon-button danger" onClick={() => setFocusedRole(undefined)}>Cancel</button>
                    <button className="neon-button" onClick={() => setRole(focusedRole)}>Confirm</button>
                </div>
            </div>
        </div>}

    </div>
};