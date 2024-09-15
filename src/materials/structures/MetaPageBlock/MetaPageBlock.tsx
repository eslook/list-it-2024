import React from 'react';
import styles from './meta-page-block.module.scss';
import Title from '@/materials/basics/Title';
import Container from '@/materials/basics/Container';
import HGroup from '@/materials/basics/HGroup';
import Content from '@/materials/basics/Content';
import Link from '@/materials/basics/Link';

export interface MetaPageBlockProps {
  /**
   * Optional code of the meta context
   */
  code?: string;
  /**
   * Title in the block
   */
  title: string;
  /**
   * Description in the block
   */
  description?: string;
  /**
   * Text of the action in the block
   */
  action?: string;
  /**
   * Function of the action in the block,
   * defaults to linking to the home page
   */
  actionFunc?: () => void;
}

const MetaPageBlock: React.FC<MetaPageBlockProps> = ({
  code,
  title,
  description,
  action,
  actionFunc,
}) => {
  const classes = [styles['meta-page-block']];
  return (
    <div className={classes.join(' ')}>
      <Container className={styles['meta-page-block-body']}>
        <HGroup isReversed={true}>
          <Title size={1} element="h2" value={title} />
          {code && <Content element="p" size="large" value={code} />}
        </HGroup>
        {description && (
          <Content element="p" size="large" value={description} />
        )}
        {action &&
          (actionFunc ? (
            <button onClick={actionFunc}>{action}</button>
          ) : (
            <Link href="/">{action}</Link>
          ))}
      </Container>
    </div>
  );
};

export default MetaPageBlock;
