import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import styles from './CardsCategory.module.scss'

const CardsCategory = ({ categoryName, cards }) => {

  const [isPreview, setIsPreview] = useState(true);

  const getCardsPreview = (cardsNumber) => {
    return cards.slice(0, cardsNumber);
  };

  return (
    <div className={styles['cards-category']}>
      <h2 className={styles['cards-category-name']}>
        {categoryName}
      </h2>

      <Cards cards={isPreview ? getCardsPreview(3) : cards} />

      <div className={styles['preview-toggle-btn-wrap']}>
        <input type="button"
               className="btn btn-secondary"
               value={isPreview ? 'Show more' : 'Show less'}
               onClick={() => setIsPreview(!isPreview)} />
      </div>
    </div>
  );
};

export default CardsCategory;
