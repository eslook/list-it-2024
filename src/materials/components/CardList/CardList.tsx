import React from 'react';
import Container from '@/materials/basics/Container';
import styles from './card-list.module.scss';

interface CardListProps {
  children: React.ReactNode;
}

const CardList: React.FC<CardListProps> = ({ children }) => {
  return (
    <div className={styles['card-list']}>
      <Container>
        <ul className={styles['card-list-itemst']}>
          {React.Children.map(children, (child, index) => (
            <li className={styles['card-list-item']} key={index}>
              {child}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default CardList;
