import React from 'react';
import Image from 'next/image';
import logo from '@/assets/log.svg';
import cesusc from '@/assets/cesusc.svg';

export function Footer() {
  return (
    <div>
      <div className="w-full h-[0.5px] bg-slate-600 mt-10" />
      <div className=" pr-10 flex flex-1 bg-[#efefef] items-center justify-start ">
        <footer className="items-center justify-start mt-5 flex-1 mx-10 mb-5 flex">
          <Image className="w-20 h-20" src={logo} alt="logo" />
          <Image className="w-20 h-20" src={cesusc} alt="logo cesusc" />
        </footer>
        <p>Made with 🖤 by Cesusc</p>
      </div>
    </div>
  );
}
