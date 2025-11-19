import Title from '@/components/ui/title/title';
import Image from 'next/image';
import styles from './visual-section.module.scss';
import { isDesktop } from '@/utils/isMobile';
import { useMemo } from 'react';

export default function VisualSection() {

  const styleClasses = useMemo(()=>{
return {container: isDesktop() ? styles.visualSection : styles.visualSectionM,
    visualImage: isDesktop() ? styles.visualImage : styles.visualImageM,}
  },[])
    
  

  return (
    <section className={styleClasses.container}>
      <Title
        span='Syntekabio'
        title='이 페이지는 테스트 중입니다'
        description='면접 과제용으로 제작된 샘플 페이지입니다.'
      />
      <div className={`${styleClasses.visualImage} w-dim`}>
        {isDesktop() ? <Image
          src={'/images/main/visual-section/Ipad.png'}
          alt='비쥬얼 영역'
          width={907}
          height={644}
        /> : 
        <Image src={'/images/main/visual-section/iphone.png'} alt='비주얼 모바일' width={270} height={541} />
        }
        
        
      </div>
    </section>
  );
}
