import { useEffect, useState } from 'react';
import HeaderPc from './header-pc';
import HeaderMobile from './header-m';

export interface HeaderProps {isMobile:boolean,isScroll:boolean}
export default function Header({isMobile,isScroll}:HeaderProps) {



  return (
    <>
    {isMobile ? <HeaderMobile  isScroll={isScroll}/>:<HeaderPc isScroll={isScroll} />}
     
         
         
    </>
  );
}
