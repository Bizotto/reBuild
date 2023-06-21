import Image from 'next/image';
import React from 'react';
import python from '@/assets/python.svg';
import nodejs from '@/assets/nodejs.svg';
import sql from '@/assets/SQL.svg';
import anaconda from '@/assets/anaconda.svg';
import react from '@/assets/React.svg';
import imagem1 from '@/assets/imagem1.svg';
import imagem2 from '@/assets/imagem2.svg';
import logo from '@/assets/log.svg';
import cirulos from '@/assets/circulosLogo.svg';

export default function Home() {
  return (
    <main className="flex-row flex-1">
      <div
        id="sobre"
        className="py-10 shadow-2xl rounded-xl px-10 bg-[#6B96F1]"
      >
        <h1 className="mb-2 text-2xl items-center justify-center font-bold flex flex-1">
          Sobre a ONG
        </h1>
        <div className="flex flex-1 items-center justify-center mb-2">
          <Image src={cirulos} alt="Círculos de Hospitalidade" />
        </div>

        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          accusamus ad officia cupiditate inventore voluptatibus ipsa
          perferendis nostrum reiciendis nam commodi repellendus dolorem,
          laborum odit autem. Nihil pariatur praesentium qui!
        </p>

        <div className="mt-10 mb-2 mx-16 flex flex-1 items-center justify-between">
          <Image src={imagem1} alt="Foto da ong" />
          <Image src={imagem2} alt="foto da ong" />
        </div>
      </div>

      <div id="objetivo" className="mt-10 flex-row mx-10 flex-1">
        <h1 className="mb-2 text-2xl items-center justify-center font-bold flex flex-1">
          Proposta de valor | Objetivo
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          dolores, maiores harum itaque est architecto illo dolorum ne
        </p>
      </div>
      <div className="mt-10 flex-row mx-10 flex-1">
        <h1 className="mb-2 text-2xl items-center justify-center font-bold flex flex-1">
          Linguagens
        </h1>
        <div className="items-center justify-between font-bold flex flex-1 mx-20 mt-6">
          <Image className="w-20 h-20" src={python} alt="python" />
          <Image className="w-20 h-20" src={nodejs} alt="node" />
          <Image className="w-20 h-20" src={sql} alt="SQL" />
          <Image className="w-20 h-20" src={anaconda} alt="anaconda" />
          <Image className="w-20 h-20" src={react} alt="react" />
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-slate-600 mt-10" />
      <div className="flex flex-1 bg-[#efefef] items-center justify-start ">
        <footer className="items-center justify-between mt-5 flex-1 mx-10 mb-5 flex">
          <Image className="w-20 h-20" src={logo} alt="logo" />
          <p className="">Made with 🖤 by Cesusc</p>
        </footer>
      </div>
    </main>
  );
}
