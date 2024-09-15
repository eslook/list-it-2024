import React from 'react';
import styles from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Value for the title attribute, for buttons with indescernible content such as "Read more";
   * set title "Read more about cats in the wild" to provide more information
   */
  title?: string;
  /**
   * The type of button
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * The content of the button
   */
  children: React.ReactNode;
  /**
   * The click event handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Additional class name
   */
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  type = 'button',
  disabled = false,
  children,
  onClick,
  className,
  ...props
}) => {
  const classes = [styles.button];
  if (className) classes.push(className);
  return (
    <button
      className={classes.join(' ')}
      title={title}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
