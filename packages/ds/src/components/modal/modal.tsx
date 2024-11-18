import React, { useEffect } from 'react';

import { TContext, joinClass } from '../../utils';

import './Modal.scss';

import Icon from '../../elements/icon';
import Text from '../../elements/text';

export interface ModalProps {
    title?: string;
    isOpen: boolean;
    spacing?: 'md' | 'lg';
    context?: TContext;
    onClose(): void;
    children: React.ReactNode;
    closeOnEsc?: boolean;
    closeOnOutsideClick?: boolean;
    removeBackgroundScroll?: boolean;
}

export default function Modal({
    title,
    isOpen,
    spacing = 'md',
    context = 'primary',
    onClose,
    children,
    closeOnEsc,
    closeOnOutsideClick,
    removeBackgroundScroll,
    ...props
}: ModalProps) {
    
    const onCloseFunction = () => {
        if ( removeBackgroundScroll) {
            document.body.style.overflow = 'auto';
        }
        onClose();
    };

    useEffect(() => {
        if (removeBackgroundScroll && isOpen) {
            document.body.style.overflow = 'hidden';
        }
    }, [isOpen]);

    useEffect(() => {
        if (closeOnEsc) {
            const keyDownHandler = (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    event.preventDefault();
                    onCloseFunction();
                }
            };

            window.addEventListener('keydown', keyDownHandler);

            return () => window.removeEventListener('keydown', keyDownHandler);
        }
    }, [closeOnEsc]);
    
    
    return  isOpen ? (
        <>
            <div
                className="modal__backdrop modal__fade-in"
                onClick={() => closeOnOutsideClick && onCloseFunction}/>
            <div {...props} className={joinClass(['modal', 'modal__fade-in', `modal__spacing--${spacing}`])}>
                <Icon
                    icon="close"
                    onClick={onCloseFunction}
                    tabIndex={0}
                    className="modal__close"
                    aria-label="close modal"
                    data-testid="on-close"
                />

                <Text tag="h2" weight="bold" variant="xlarge" tabIndex={0}>{title}</Text>

                <div tabIndex={0}>{children}</div>
            </div>
        </>
    ) : null;
};
