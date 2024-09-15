import React from 'react';
import styles from './container.module.scss';

interface ContainerProps {
  /**
   * The content of the button
   */
  children: React.ReactNode;
  /**
   * Additional class name
   */
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const classes = [styles.container];
  if (className) classes.push(className);
  return <div className={classes.join(' ')}>{children}</div>;
};

export default Container;
