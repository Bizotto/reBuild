import Image from 'next/image';
import React from 'react';
import python from '@/assets/python.svg';
import nodejs from '@/assets/nodejs.svg';
import sql from '@/assets/SQL.svg';
import anaconda from '@/assets/anaconda.svg';
import react from '@/assets/React.svg';
import imagem2 from '@/assets/imagem2.svg';
import cirulos from '@/assets/circulosLogo.svg';

import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Purpose } from '@/components/Purpose';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex-row flex-1">
      <Header />
      <About />
      <Purpose />
      <div
        id="sobre"
        className="shadow-xl px-10 pb-10 rounded-b-3xl bg-[#6B96F1]"
      >
        <h1 className="mb-2 text-2xl items-center justify-center font-bold flex flex-1">
          Sobre
        </h1>
        <div className="grid grid-cols-2">
          <div className="flex flex-1 ml-10 items-center justify-center">
            <Image src={imagem2} alt="Foto da ong" />
          </div>
          <div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              rerum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi accusamus ad officia cupiditate inventore voluptatibus ipsa
              perferendis nostrum reiciendis nam commodi repellendus dolorem,
              laborum odit autem. Nihil pariatur praesentium qui!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex-row mx-10 flex-1">
        <h1 className="mb-2 text-2xl items-center justify-center font-bold flex flex-1">
          Linguagens
        </h1>
        <div className="items-center justify-between font-bold flex flex-1 mx-80 mt-6">
          <Image className="w-20 h-20" src={python} alt="python" />
          <Image className="w-20 h-20" src={nodejs} alt="node" />
          <Image className="w-20 h-20" src={sql} alt="SQL" />
          <Image className="w-20 h-20" src={anaconda} alt="anaconda" />
          <Image className="w-20 h-20" src={react} alt="react" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
