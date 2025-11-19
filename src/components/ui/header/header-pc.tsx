import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/button/button';

export default function HeaderPc({isScroll}: {isScroll: boolean}) {
  return <header className={`${styles.header} ${isScroll ? styles.activeScroll : ''}`}>
      <div className={styles.leftInner}>
        <Link href='/'>
          <h1>
            <Image src={'/images/common/icon/logo.svg'} alt='로고' width={109} height={22} />
          </h1>
        </Link>
        <nav>
          <Link href='/'>Service menu 1</Link>
          <Link href='/'>Service menu 2</Link>
          <Link href='/'>Service menu 3</Link>
          <Link href='/'>Service menu 4</Link>
        </nav>
      </div>
      <div className={styles.rightInner}>
        <Button
          variant='language'
          iconLeft='/images/common/icon/earth-icon.svg'
          iconRight='/images/common/icon/icon.svg'
        >
          한국어
        </Button>

        <Button variant='primary'>Login</Button>
      </div>
    </header>;
}