import React from 'react';
import Image from 'next/image';
import logo from '@/assets/log.svg';
import cesusc from '@/assets/cesusc.svg';
import cirulos from '@/assets/circulosLogo.svg';

export function Footer() {
  return (
    <footer className="w-full bg-black p-4 items-center justify-between flex flex-col md:flex-row">
      <div className="flex items-center justify-start space-x-4">
        <Image className="w-20" src={cesusc} alt="logo cesusc" />
        <Image className="w-20" src={logo} alt="logo" />
        <Image className="w-60" src={cirulos} alt="Círculos de Hospitalidade" />
      </div>

      <p className="mt-4 md:mt-0 text-white">Made with 💜 by Cesusc</p>
    </footer>
  );
}
