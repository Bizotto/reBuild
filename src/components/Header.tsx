import logo from '@/assets/log.svg';
import Image from 'next/image';
import React from 'react';

export function Header() {
  return (
    <div className="flex-row py-10 bg-center bg-[url(../assets/header-background.svg)] shadow-lg shadow-slate-600 rounded-b-3xl justify-center items-center overflow-hidden">
      <div className="z-50">
        <div className="flex flex-1 justify-center items-center">
          <Image src={logo} alt="Logo" />
        </div>

        <div className="mt-10">
          <h1 className="flex flex-1items-center justify-center font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-900 via-blue-600 to to-blue-300">
            Unindo pessoas
          </h1>
          <h2 className="flex flex-1 items-center justify-center text-transparent font-extrabold text-5xl bg-clip-text bg-gradient-to-r from-purple-900 via-blue-600 to to-blue-300">
            Desfazendo fronteiras
          </h2>
        </div>
      </div>
    </div>
  );
}
