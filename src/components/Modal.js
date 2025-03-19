'use client'
import modalStyles from './../styles/Modal.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Card.module.scss';

export const Modal = ({ onClose, link, kategorie, name, content, subtitle, categoryColors }) => {

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
                <div className={modalStyles.modal__container}>
                    <div>
                        <Image
                            src={link}
                            width={452}
                            height={452}
                            style={{ maxWidth: '452px', maxHeight: '452px', width: '100%', height: '100%', margin: 'auto' }}
                            alt={name}
                        /></div>

                    <div className={modalStyles.container__right}>
                        <div className={modalStyles.container__text}>
                            <div className={styles.card__kategorie} style={{ backgroundColor: categoryColors[kategorie] }}>
                                <h4>{kategorie}</h4>
                            </div>
                            <h2 className={styles.card__title}>{name}</h2>
                            <p>{content}</p>
                        </div>
                        <div className={modalStyles.container__buttons}>
                            <button type="button" className={modalStyles.payButton}> Kaufen </button>
                            <h3 className={styles.card__subtitle}>{subtitle}</h3>
                        </div>
                    </div>
                </div>

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
