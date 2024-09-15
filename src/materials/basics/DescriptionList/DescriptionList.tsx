/**
 * The <dl> HTML element represents a description list. The element encloses a
 * list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements).
 * Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
 *
 * Read more about dl at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
 */
import React from 'react';
import Content from '@/materials/basics/Content';
import styles from './description-list.module.scss';

interface DescriptionListProps {
  /**
   * An array of key-value pairs for the description list,
   * where the key is the term and the value is the description
   */
  items: Record<string, string>[];
}

const DescriptionList: React.FC<DescriptionListProps> = ({ items }) => {
  if (items.length === 0) return;

  return (
    <dl className={styles['description-list']}>
      {items.map((item, index) => {
        const { key, value } = item;
        return (
          <div key={index}>
            <dt>{key}</dt>
            <Content element="dd" size="medium" value={value} />
          </div>
        );
      })}
    </dl>
  );
};

export default DescriptionList;
