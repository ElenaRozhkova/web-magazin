'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Card.module.scss';
import { Modal } from './../components/Modal';

function Card({ card }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const categoryColors = {
    "Frontend": "#83FA9D",
    "Middleware": "#FAD883",
    "DevOps": "#B783FA",
    "Full-Stack": "#83DDFA",
    "Backend": "#FAA083"
  };

  return (
    <>
      <article className={styles.card} id={card._id} onClick={openModal}>
        <div className={styles.card__kategorie} style={{ backgroundColor: categoryColors[card.kategorie] }}>
          <h4>{card.kategorie}</h4>
        </div>
        <h2 className={styles.card__title}>{card.name}</h2>
        <div className="image-container">
          <Image
            src={card.link}
            width={390}
            height={390}

            alt={card.name}
          />
        </div>
        <h3 className={styles.card__subtitle}>{card.subtitle}</h3>
      </article>
      {isModalOpen && (
        <Modal
          onClose={closeModal}>
          <div className={styles.modal__container}>
            <div className="image-container">
              <Image
                src={card.link}
                width={390}
                height={390}
                alt={card.name}
              /></div>

            <div className={styles.container__right}>
              <div className={styles.container__text}>
                <div className={styles.card__kategorie} style={{ backgroundColor: categoryColors[card.kategorie] }}>
                  <h4>{card.kategorie}</h4>
                </div>
                <h2 className={styles.card__title}>{card.name}</h2>
                <p>{card.content}</p>
              </div>
              <div className={styles.container__buttons}>
                <button type="button" className={styles.payButton}> Kaufen </button>
                <h3 className={styles.card__subtitle}>{card.subtitle}</h3>
              </div>
            </div>
          </div>
        </Modal>


      )}
    </>
  );
}

export default Card;
