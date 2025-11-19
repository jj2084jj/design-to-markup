import Button from '@/components/ui/button/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HeaderMobile({isScroll}: {isScroll: boolean}) {
  const [activeMenu, setActiveMenu] = useState(false);
  const router= useRouter();  
  useEffect(()=>{
    setActiveMenu(false);
  },[router])

  return (
    <>
      <header className={`${styles.headerMobile} ${isScroll ? styles.activeScroll : ''}`}>
        <div>
          <Image src={'/images/common/icon/logo.svg'} alt='로고' width={109} height={22} />
        </div>
        <div>
          <Button
            variant='default'
            className={styles.menu}
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
          >
            {activeMenu ? ( <Image
                src={'/images/common/icon/menu-close.svg'}
                alt='메뉴 아이콘'
                width={24}
                height={24}
              />
              
            ) : (
             <Image
                src={'/images/common/icon/menu.svg'}
                alt='메뉴 아이콘'
                width={24}
                height={24}
              />
            )}
          </Button>
        </div>
      </header>

      {activeMenu && (
        <div className={styles.mobileMenu}>
          <div>
            <nav>
              <Link className={styles.menuBold} href='/'>Home</Link>
              <Link className={styles.menuBold} href='#'>Service</Link>
              <Link href='#'>Service menu 1</Link>
              <Link href='#'>Service menu 2</Link>
              <Link href='#'>Service menu 3</Link>
              <Link href='#'>Service menu 4</Link>
            </nav>
            <div className={styles.langSelect}>
            <Button
              variant='language'
              iconLeft='/images/common/icon/earth-icon.svg'
              iconRight='/images/common/icon/icon.svg'
            >
              한국어
            </Button>
            </div>
          </div>
          <Button variant='primary'>Login</Button>
        </div>
      )}
    </>
  );
}
