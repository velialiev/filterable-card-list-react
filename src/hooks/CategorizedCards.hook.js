import { useEffect, useState } from 'react';

export const useCategorizedCards = (cards) => {
  const [categorizedCards, setCategorizedCards] = useState([]);

  const categorize = (cards) => {
    const result = [];

    cards.forEach((card) => {
      if (result[card.category]) {
        result[card.category].push(card);
        return;
      }

      result[card.category] = [card];
    });

    return result;
  };

  useEffect(() => {
    setCategorizedCards(
      categorize(cards)
    );
  }, [cards]);

  return [categorizedCards, setCategorizedCards];
};
