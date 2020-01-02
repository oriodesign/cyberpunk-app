import React, { FC, useEffect } from 'react';

import './Modal.css';
import { createPortal } from 'react-dom';
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

    return createPortal(<div className="modal">
        <div className="modal-inner">{children}</div>
    </div>, document.getElementById("modal")!!)
};
