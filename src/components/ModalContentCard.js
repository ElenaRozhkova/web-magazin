'use client';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Card.module.scss';
import { categoryColors } from '@/constants/constants';

const ModalContentCard = ({ card, handleInCorb }) => {
    return (
        <>
            <div className={styles.modal__container}>
                <div className="image-container modal">
                    <Image
                        src={card.link}
                        width={390}
                        height={390}
                        alt={card.name}
                    />
                </div>
                <div className={styles.container__right}>
                    <div className={styles.container__text}>
                        <div className={styles.card__kategorie} style={{ backgroundColor: categoryColors[card.kategorie] }}>
                            <h4>{card.kategorie}</h4>
                        </div>
                        <h2 className={styles.card__title}>{card.name}</h2>
                        <p>{card.content}</p>
                    </div>
                    <div className={styles.container__buttons}>
                        <button type="button" className={styles.payButton} onClick={handleInCorb}>
                            In den Warenkorb
                        </button>
                        <h3 className={styles.card__subtitle}>{card.subtitle}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalContentCard;
