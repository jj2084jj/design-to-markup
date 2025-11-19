import React from 'react';
import styles from './title.module.scss';
import { isDesktop } from '@/utils/isMobile';

export interface TitleProps {
  title: React.ReactNode;
  description: React.ReactNode;
  span?: React.ReactNode;
  className?: string;
}

export default function Title({ title, description, span }: TitleProps) {
  return (
    <hgroup className={isDesktop() ? styles.hgroup: styles.hgroupMobile}>
      {span && <span>{span}</span>}
      <h2>{title}</h2>
      <p>{description}</p>
    </hgroup>
  );
}
