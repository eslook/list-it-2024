import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import styles from './image.module.scss';

interface ImageProps extends NextImageProps {
  /**
   * The source of the image
   */
  src: string;
  /**
   * Additional class name
   */
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  className,
  /**
   * The remaining NextImageProps are spread over the NextImage component
   */
  ...props
}) => {
  const classes = [styles.image];
  if (className) classes.push(className);

  // Depending on source set unoptimized if:
  // - the image is not hosted on the same domain (ie not in the public folder)
  // - the image cannot be optimized, like gifs
  const unoptimized =
    !src.startsWith('/') ||
    (process.env.VERCEL_URL && !src.includes(process.env.VERCEL_URL)) ||
    src.endsWith('.gif');

  return (
    <figure className={classes.join(' ')}>
      <NextImage src={src} unoptimized={unoptimized} {...props} />
    </figure>
  );
};

export default Image;
