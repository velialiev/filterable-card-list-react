import React from 'react';
import styles from './Card.module.scss'

const Card = ({ card }) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-picture']}>
        <img src="https://avatars.mds.yandex.net/get-pdb/985791/25a243bc-9b31-4e8d-a18e-8c16a2ff008b/s1200"
             alt=""/>
      </div>
      <div className={styles['card-content']}>
        <span className={styles['card-category-name']}>
          {card.category}
        </span>
        <span className={styles['card-level']}>
          {card.level}
        </span>
        <p className={styles['card-description']}>
          {card.text}
        </p>
      </div>
    </div>
  );
};

export default Card;
