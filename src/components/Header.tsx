import logo from '@/assets/log.svg';
import Image from 'next/image';
import React from 'react';

export function Header() {
  return (
    <div className="pt-10 flex-row flex-1 text-white  justify-center items-center shadows-xl bg-[url(../assets/header-background.svg)]">
      <div className="flex flex-1 justify-center items-center">
        <Image src={logo} alt="Logo" />
      </div>

      <div className="mt-10">
        <h1 className="flex flex-1items-center justify-center font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-900 via-blue-600 to to-blue-300">
          Juntando pessoas
        </h1>
        <h2 className="flex flex-1 items-center justify-center text-transparent font-extrabold text-5xl bg-clip-text bg-gradient-to-r from-purple-900 via-blue-600 to to-blue-300">
          Acabando com fonteiras
        </h2>
      </div>

      <div id="ideia" className="mt-10 px-10 pb-10">
        <h1 className="items-center mb-2 text-2xl justify-center font-bold flex flex-1">
          Ideia
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quo
          minima! Ipsa expedita, fugit aliquid autem quod non corporis facilis
          deleniti assumenda! Assumenda magni cum distinctio nesciunt harum.
          Modi, laudantium.
        </p>
      </div>
    </div>
  );
}
