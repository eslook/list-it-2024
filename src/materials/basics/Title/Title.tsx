import React from 'react';
import styles from './title.module.scss';

interface TitleProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  /**
   * The HTML element to use for the title
   */
  element?: keyof JSX.IntrinsicElements;
  /**
   * The size of the title, also used as semantic size if no element is provided
   */
  size?: 1 | 2 | 3;
  /**
   * The text value of the title
   */
  value: string;
  /**
   * Whether the title should be visually hidden but
   * still accessible to screen readers
   */
  isSrOnly?: boolean;
}

const Title: React.FC<TitleProps> = ({
  element,
  size = 3,
  value,
  isSrOnly = false,
}) => {
  const Element = element || `h${size}`;
  const classes = [];
  if (isSrOnly) classes.push(styles['is-sr-only']);
  else {
    classes.push(styles.title);
    classes.push(styles[`is-${size}`]);
  }

  return <Element className={classes.join(' ')}>{value}</Element>;
};

export default Title;
