import React from 'react';
import { Link as NextLink, LinkProps as NextLinkProps } from '@/i18n/routing';
import styles from './link.module.scss';

interface LinkProps extends NextLinkProps {
  /**
   * Value for the title attribute, for links with indescernible content such as "Read more";
   * set title "Read more about cats in the wild" to provide more information
   */
  title?: string;
  /**
   * The URL the link points to
   */
  href: string;
  /**
   * Style of the link, either 'inactive' or 'button'
   * or neither for default
   */
  variant?: 'inactive' | 'button';
  /**
   * The content of the link
   */
  children: React.ReactNode;
  /**
   * Additional class name
   */
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  title,
  href,
  variant,
  children,
  className,
  /**
   * The remaining NextLinkProps are spread over the NextLink component
   */
  ...props
}) => {
  const classes = [styles.link];
  if (variant) classes.push(styles[`is-${variant}`]);
  if (className) classes.push(className);
  return (
    <NextLink
      className={classes.join(' ')}
      href={href}
      title={title}
      {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
