'use client';
import { useState, useContext } from 'react';
import Image from 'next/image';
import styles from '../styles/Card.module.scss';
import { Modal } from './../components/Modal';
import ModalContentCard from './ModalContentCard';
import ModalIstGekauft from './ModalIstGekauft';
import { categoryColors } from '@/constants/constants';
import Corb from './Corb';
import { useCardContext } from '@/context/CardContext';

function Card({ card }) {
  const [isModalOpenCard, setIsModalOpenCard] = useState(false);
  const [isModalOpenCorb, setIsModalOpenCorb] = useState(false);
  const [isModalKaufen, setIsModalKaufen] = useState(false);

  const { addCard, clearCart } = useCardContext();

  const openModalCard = () => setIsModalOpenCard(true);
  const closeModalCard = () => setIsModalOpenCard(false);


  const handleInCorb = () => {
    addCard(card); // Добавьте карточку в корзину
    setIsModalOpenCard(false);
    setIsModalOpenCorb(true);
  };

  const handleKaufen = () => {
    setIsModalOpenCorb(false);
    setIsModalKaufen(true);
    clearCart();
  };

  return (
    <>
      <article className={styles.card} id={card._id} onClick={openModalCard}>
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
      {isModalOpenCard && (
        <Modal onClose={closeModalCard}>
          <ModalContentCard card={card} handleInCorb={handleInCorb} />
        </Modal>
      )}
      {isModalOpenCorb && (
        <Modal onClose={() => setIsModalOpenCorb(false)}>
          <Corb onClose={() => setIsModalOpenCorb(false)} handleKaufen={handleKaufen} />
        </Modal>
      )}

      {isModalKaufen && (
        <Modal onClose={() => setIsModalKaufen(false)}>
          <ModalIstGekauft onClose={() => {
            clearCart()
            setIsModalKaufen(false)
          }
          }
          />
        </Modal>
      )}
    </>
  );
}

export default Card;
