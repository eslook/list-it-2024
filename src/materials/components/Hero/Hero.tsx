import React from 'react';
import styles from './hero.module.scss';
import Container from '@/materials/basics/Container';

export interface HeroProps {
  children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <div className={styles.hero}>
      <Container className={styles['hero-body']}>
        {React.Children.map(children, (child, index) => (
          <div className={styles['hero-column']} key={index}>
            {child}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Hero;
