import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import styles from './button.module.scss';

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'default'| 'primary' | 'tab' | 'dot' | 'language';
  active?: boolean;
  onClick?: () => void;
  className?: string;
  iconLeft?: string;
  iconRight?: string;
  iconAlt?: string;
}

export default function Button({
  children,
  variant = 'primary',
  active = false,
  onClick,
  className,
  iconLeft,
  iconRight,
  iconAlt = '아이콘',
  ...props
}: ButtonProps) {
  const buttonClasses = classNames(
    {
      [styles.button]: variant === 'default',
      [styles.tabItem]: variant === 'tab',
      [styles.sliderDot]: variant === 'dot',
      [styles.langBtn]: variant === 'language',
      [styles.primary]: variant === 'primary',
      [styles.active]: active,
    },
    className,
  );

  if (variant === 'language') {
    return (
      <button className={buttonClasses} onClick={onClick}>
        {iconLeft && <Image src={iconLeft} alt={iconAlt} width={16} height={16} />}
        {children}
        {iconRight && <Image src={iconRight} alt={iconAlt} width={12} height={12} />}
      </button>
    );
  }

  return (
    <button {...props} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
