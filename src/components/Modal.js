'use client'
import modalStyles from './../styles/Modal.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export const Modal = ({ onClose, children }) => {

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose(); // Schließt das Modal, wenn außerhalb geklickt wird
            }
        };

        // Event Listener hinzufügen
        document.addEventListener('mousedown', handleClickOutside);

        // Event Listener entfernen, wenn die Komponente unmontiert wird
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className={modalStyles.overlay}>
            <div className={modalStyles.modal} ref={modalRef}>
                {children}

                <button onClick={onClose} className={modalStyles.closeButton}>
                    <Image
                        src="/images/close.svg"
                        width={50}
                        height={50}
                        alt="Close"
                    />
                </button>

            </div>
        </div>
    );
};
