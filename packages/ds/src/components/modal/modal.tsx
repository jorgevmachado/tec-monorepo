import React from 'react';

import './Modal.scss';

interface ModalProps {
children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
return (
<div className="modal">
    <h1>Modal Component</h1>
    {children}
</div>
);
};
