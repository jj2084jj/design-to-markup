import Title from '@/components/ui/title/title';
import { useEffect, useRef } from 'react';
import styles from './video-section.module.scss';


export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedRef.current) {
            video.play().catch((error) => {
              console.error('비디오 재생 에러', error);
            });
            hasPlayedRef.current = true;
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.videoSection}>
      <Title
        title='테스트용 영상 단락'
        description={
          <>
            면접 과제용으로 제작된 샘플 영상 단락입니다. <br />
            사용자가 해당 단락이 화면에 보일 경우 영상이 재생되게 구현하세요.
          </>
        }
      />
      <div className={`${styles.videoWrap} container`}>
        <video ref={videoRef} controls src='/video/main.mp4' muted width='100%' preload='metadata'/>
      </div>
    </section>
  );
}
