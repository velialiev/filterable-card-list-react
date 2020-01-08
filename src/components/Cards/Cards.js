import React from 'react';
import styles from './Cards.module.scss'
import Card from '../Card/Card';

const Cards = ({ cards }) => {
  return (
    <div className={styles.cards}>
      { cards.map(card => <Card key={card.id} card={card} />) }
    </div>
  );
};

export default Cards;
