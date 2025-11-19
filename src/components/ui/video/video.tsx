import { useEffect, useRef } from "react";
import styles from './video.module.scss';

export default function Video({src}:{src:string}) {
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
    <div className={`${styles.videoWrap} container`}>
        <video ref={videoRef} controls src={src} muted width='100%' preload='metadata'/>
      </div>
  );
}