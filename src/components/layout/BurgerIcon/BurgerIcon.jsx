'use client';
import { useState } from 'react';

export default function BurgerIcon({ setActive }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setActive(open);
  };
  return (
    <div
      onClick={handleClick}
      className={`relative size-40 cursor-pointer flex flex-col items-end justify-center gap-8 transition-all duration-500 lg:hidden lg:invisible ${open && 'rotate-180 duration-500'} max-[390px]:size-30!`}
    >
      <div
        className={`w-[50%] h-4 bg-white duration-600 ${open && 'absolute w-full duration-500 rotate-45 '} `}
      ></div>
      <div
        className={`h-4 bg-white transition-all duration-200 w-[75%] ${open && 'absolute scale-x-0 duration-100'}`}
      ></div>
      <div className={`w-full h-4 bg-white ${open && 'absolute duration-500 -rotate-45'}`}></div>
    </div>
  );
}
