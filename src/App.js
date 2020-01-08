import React, { useState } from 'react';
import CardsCategory from './components/CardsCategory/CardsCategory';
import Filters from './components/Filters/Filters';
import { useCards } from './hooks/Cards.hook';
import { useCategorizedCards } from './hooks/CategorizedCards.hook';
import { useFilteredCards } from './hooks/FilteredCards.hook';

const App = () => {

  const cards = useCards();
  const [currentFilters, setCurrentFilters] = useState({});
  const [filteredCards] = useFilteredCards(cards, currentFilters);
  const [categorizedCards] = useCategorizedCards(filteredCards);

  return (
    <>
      <Filters onFiltersChange={setCurrentFilters}/>
      <div className="container">
        {
          Object.entries(categorizedCards).map(
            ([categoryName, cards], i) =>
              <CardsCategory key={i}
                             categoryName={categoryName}
                             cards={cards}/>
          )
        }
      </div>
    </>
  );
};

export default App;
