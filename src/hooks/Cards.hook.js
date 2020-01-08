import { useEffect, useState } from 'react';
import { getCards } from '../controllers/cards.controller';

export const useCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getCards();
      const serializedRes = await res.json();
      setCards(serializedRes);
    })();
  }, []);

  return cards; // readonly
};
