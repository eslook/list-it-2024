/**
 * A component that wraps content and accepts RichText as value.
 * Applies content styling which supports RichText, as
 * was previously cleared by the reset stylesheet.
 *
 * Content can be passed either via value or children.
 * This allows user to write markup within the JSX to receive the Content styling,
 * or simply pass RichText Editor content and have the Content material parse it
 * as HTML, via dangerouslySetInnerHTML.
 */
import React from 'react';
import styles from './content.module.scss';

interface ContentProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  /**
   * The element to render the content in.
   */
  element?: keyof JSX.IntrinsicElements;
  /**
   * The size of the title, inherits by default
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The content to render, passed as value.
   */
  value?: string;
  /**
   * The content to render, passed as children.
   */
  children?: React.ReactNode;
  /**
   * Additional class name
   */
  className?: string;
}

const Content: React.FC<ContentProps> = ({
  element: Element = 'div',
  value,
  size,
  children,
  className,
}) => {
  const classes = [styles.content];
  if (size) classes.push(styles[`is-${size}`]);
  if (className) classes.push(className);
  return (
    <Element
      className={classes.join(' ')}
      {...(value ? { dangerouslySetInnerHTML: { __html: value } } : {})}>
      {value ? null : children}
    </Element>
  );
};

export default Content;
