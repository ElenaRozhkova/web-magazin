'use client';
import React, { useContext } from 'react';
import styles from '../styles/Corb.module.scss';
import stylesBtn from '../styles/Card.module.scss';
import Image from 'next/image';
import { CardContext } from '../context/CardContext';

const Corb = ({ handleKaufen }) => {
    const { cards, deleteCard } = useContext(CardContext);

    const handleDelete = (id) => {
        deleteCard(id); // Используйте функцию deleteCard из контекста
    };
    // Вычисляем сумму всех card.subtitle
    // Вычисляем сумму всех чисел, извлеченных из card.subtitle
    const summe = cards.reduce((total, card) => {
        const numberMatch = card.subtitle.match(/\d+/); // Ищем число в строке
        const number = numberMatch ? parseFloat(numberMatch[0]) : 0; // Преобразуем найденное число
        return total + number; // Складываем
    }, 0);

    // Получаем текст из первой карточки (или любой другой логики)

    const extractText = (subtitle) => {
        const textMatch = subtitle.match(/[^\d]+/g); // Ищем текст (все, что не цифры)
        return textMatch ? textMatch.join(' ').trim() : ''; // Объединяем и убираем лишние пробелы
    };

    const text = cards.length > 0 ? extractText(cards[0].subtitle) : '';


    return (
        <>
            <div className={styles.corb}>
                <h3>Warenkorb</h3>
                <ul className={styles.cards}>
                    {cards.length > 0 ? (
                        cards.map((card) => (
                            <li key={card.id} className={styles.card}>
                                <div className={styles.card_left}>
                                    <div className={styles.card_name}>
                                        <button className={styles.id}>{card.id}</button>
                                        <h2 className={styles.title}>{card.name}</h2>
                                    </div>
                                    <div>
                                        <h3>{card.subtitle}</h3>
                                    </div>
                                </div>
                                <div className={styles.btn_delete} onClick={() => handleDelete(card.id)}>
                                    <Image
                                        src='/images/delete.png'
                                        width={48}
                                        height={48}
                                        alt={card.name}
                                    />
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className={styles.empty}>Der Warenkorb ist leer.</li>
                    )}
                </ul>
            </div>
            <div className={stylesBtn.container__buttons}>
                <button type="button" className={stylesBtn.payButton} onClick={handleKaufen}>Kaufen</button>
                <h3 className={styles.card_subtitle}>{summe} {text}</h3>
            </div>
        </>
    );
};

export default Corb;
