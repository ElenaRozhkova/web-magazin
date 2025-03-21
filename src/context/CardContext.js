'use client';
import { createContext, useState, useContext } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([]);

    const addCard = (newCard) => {
        // Используем существующий _id из объекта карточки
        const newId = cards.length + 1;
        setCards(prev => [...prev, { ...newCard, id: newId }]);
    };

    const deleteCard = (id) => {
        const updatedCards = cards
            .filter(card => card.id !== id) // Удаляем карточку
            .map((card, index) => ({ ...card, id: index + 1 })); // Пересчитываем ID для оставшихся карточек
        setCards(updatedCards);
    };

    const clearCart = () => {
        setCards([]); // Очищаем корзину
    };

    return (
        <CardContext.Provider value={{ cards, addCard, deleteCard, clearCart }}>
            {children}
        </CardContext.Provider>
    );
};

export const useCardContext = () => useContext(CardContext);
