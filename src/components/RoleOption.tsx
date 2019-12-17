import React, { FC } from 'react';
import { Role } from '../model/role';
import './RoleOption.css';
type Props = {
    role: Role;
    setRole: (role: Role) => void;
}

export const RoleOption: FC<Props> = ({ role, setRole }) => {

    const { id, title } = role;

    return <div onClick={() => setRole(role)} className="role-option">
        <img alt={title} src={`/img/${id}.jpg`} />
        <h1>{title}</h1>
    </div>
};
