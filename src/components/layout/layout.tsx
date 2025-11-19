import { useEffect, useState } from 'react';
import Header from '../ui/header/header';
import { isMobile } from '@/utils/isMobile';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  // 마운트 플래그 한 번만
  useEffect(() => {
    setMounted(true);
  }, []);

  
 const mobile = isMobile();

  
 
   useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setIsScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);


 if (!mounted) return null;
  
  return (
    <section className={`${!mobile ? 'pcContainer':'mobileContainer'}`} >
      <Header isScroll={isScroll} isMobile={mobile}/>
      {children}
    </section>
  );
}
