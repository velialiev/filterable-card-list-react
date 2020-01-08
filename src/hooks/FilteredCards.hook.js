import { useEffect, useState } from 'react';

export const useFilteredCards = (cards, currentFilters) => {
  const [filteredCards, setFilteredCards] = useState(cards);

  const filterCards = (filtersValue) => {
    setFilteredCards(
      cards.filter(card =>
        Object.keys(filtersValue).every((key) => {
          if (key === 'text') {
            return !filtersValue[key] || card[key].toLowerCase().includes(filtersValue[key].toLowerCase());
          }
          return !filtersValue[key] || card[key] === filtersValue[key];
        }),
      ),
    );
  };

  useEffect(() => {
    filterCards(currentFilters);
  }, [cards, currentFilters]);

  return [filteredCards, setFilteredCards];
};
