import React, { FC } from 'react';

import './Modal.css';
type Props = {
}

export const Modal: FC<Props> = ({ children }) => {

    return <div className="modal">
        <div className="modal-inner">{children}</div>
    </div>
};
