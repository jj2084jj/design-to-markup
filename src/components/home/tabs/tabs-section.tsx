import Button from '@/components/ui/button/button';
import Title from '@/components/ui/title/title';
import Image from 'next/image';
import { useState } from 'react';
import { tabs_data } from '../constants';
import styles from './tabs-section.module.scss';

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className={styles.tabsContainer}>
      <Title
        title='테스트용 탭 영역 단락 입니다'
        description={
          <>
            면접 과제용으로 제작된 샘플 탭 단락입니다. <br />
            인터렉션, 코드 구조등을 자유롭게 구현하세요.
          </>
        }
      />
      <div className={`${styles.tabWrap} container`}>
        <div className={styles.tabLabel}>
          {tabs_data.map((item, index) => {
            return (
              <Button
                key={index}
                variant='tab'
                active={activeTab === index}
                onClick={() => {
                  setActiveTab(index);
                }}
              >
                {item.title}
              </Button>
            );
          })}
        </div>
        <div>
          {tabs_data[activeTab] && (
            <div className={styles.tabContent}>
              <Image
                priority
                src={tabs_data[activeTab].image}
                alt={`탭 이미지 ${activeTab}`}
                width={892}
                height={620}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
