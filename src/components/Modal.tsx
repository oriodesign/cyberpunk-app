import React, { FC, useEffect } from 'react';

import './Modal.css';
type Props = {
}

export const Modal: FC<Props> = ({ children }) => {

    useEffect(() => {

        const y = window.scrollY;
        document.body.style.position = 'fixed';
        window.scrollTo(0, 0);

        return () => {
            document.body.style.position = '';
            window.scrollTo(0, y || 0);
        };
    });

    return <div className="modal">
        <div className="modal-inner">{children}</div>
    </div>
};
