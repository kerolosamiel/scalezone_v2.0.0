'use client';
import { useMenu } from '@/providers/MenuContext';
import { cn } from 'cn';
import { useState } from 'react';

export default function BurgerIcon({ left = false, className = '' }) {
  const { isMenuOpen, closeMenu } = useMenu();
  return (
    <div
      onClick={closeMenu}
      className={cn(
        `relative size-40 cursor-pointer flex flex-col ${!left ? 'items-end' : 'items-start'} justify-center gap-8 transition-all duration-500 lg:hidden lg:invisible ${!isMenuOpen && 'rotate-180 duration-500'} max-[390px]:size-30!`,
        className
      )}
    >
      <div
        className={`w-[50%] h-4 bg-white duration-600 ${!isMenuOpen && 'absolute w-full duration-500 rotate-45 '} `}
      ></div>
      <div
        className={`h-4 bg-white transition-all duration-200 w-[75%] ${!isMenuOpen && 'absolute scale-x-0 duration-100'}`}
      ></div>
      <div
        className={`w-full h-4 bg-white ${!isMenuOpen && 'absolute duration-500 -rotate-45'}`}
      ></div>
    </div>
  );
}
