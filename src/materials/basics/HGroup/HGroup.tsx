/**
 * The <hgroup> element allows the grouping of a heading with any secondary content, such as
 * subheadings, an alternative HGroup, or tagline. Each of these types of content represented as a <p> element within the <hgroup>.
 *
 * By providing the isReversed prop, the content will visually appear before the title, while remaining semantically below it.
 * This resolves many cases in which design places a label above a title, which would semantically consider the label as belonging to the previous title.
 *
 * Read more about hgroup at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup
 */
import React from 'react';
import styles from './hgroup.module.scss';

interface HGroupProps {
  /**
   * Whether the HGroup should be reversed, making
   * the content appear visually before the title
   * while remaining semantically below it
   */
  isReversed?: boolean;
  /**
   * The content of the hgroup
   */
  children: React.ReactNode;
}

const HGroup: React.FC<HGroupProps> = ({ isReversed = false, children }) => {
  const classes = [styles.hgroup];
  if (isReversed) classes.push(styles['is-reversed']);

  return <hgroup className={classes.join(' ')}>{children}</hgroup>;
};

export default HGroup;
