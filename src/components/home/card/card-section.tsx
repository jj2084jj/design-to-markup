import Button from '@/components/ui/button/button';
import Title from '@/components/ui/title/title';
import Image from 'next/image';
import { useEffect,  useRef, useState } from 'react';
import { slider_data } from '../constants';
import styles from './card-section.module.scss';
import { isDesktop } from '@/utils/isMobile';

export default function CardSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
const sliderRef = useRef<HTMLDivElement>(null);
  

useEffect(()=>{
  if(sliderRef.current===null) return 

  if(isDesktop()){
    return setSliderWidth(480)
  }
  return setSliderWidth(242)

  },[sliderRef])

  return (
    <section className={styles.cardSection}>
      <Title
        title='테스트용 이미지 카드 단락입니다'
        description={
          <>
            면접 과제용으로 제작된 샘플 단락입니다. <br />
            인터렉션, 코드 구조등을 자유롭게 구현하세요.{' '}
          </>
        }
      />

      <div className={styles.cardSliderWrap}>
        <div
          className={styles.cardSlider}
          style={{
            transform: `translateX(-${activeSlide * sliderWidth}px)`,
          }}
        >
          {slider_data.map((item, index) => {
            return (
              <div ref={sliderRef} key={index} className={styles.cardItem}>
                <div className={styles.cardItemImg}>
                  <Image alt={`${item.title} 설명`} src={item.image} width={460} height={587} />
                </div>
                <div className={styles.cardItemDesc}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.cardSliderNav}>
          {/* 슬라이더 네비게이션 구현 영역 */}
          {slider_data.map((_, index) => {
            return (
              <Button
                variant='dot'
                active={activeSlide === index}
                onClick={() => {
                  setActiveSlide(index);
                }}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
