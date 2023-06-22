import React from 'react';
import Image from 'next/image';
import cirulos from '@/assets/circulosLogo.svg';
import imagem1 from '@/assets/imagem1.svg';

export function About() {
  return (
    <div className="pb-10 bg-white">
      <div
        id="sobre"
        className="shadow-xl rounded-b-3xl pb-10 px-10 bg-[#6B96F1]"
      >
        <h1 className="mb-2 text-2xl items-center justify-center font-bold flex flex-1">
          Sobre a ONG
        </h1>
        <div className="grid grid-cols-2">
          <div>
            <Image src={cirulos} alt="Círculos de Hospitalidade" />
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              rerum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi accusamus ad officia cupiditate inventore voluptatibus ipsa
              perferendis nostrum reiciendis nam commodi repellendus dolorem,
              laborum odit autem. Nihil pariatur praesentium qui!
            </p>
          </div>

          <div className="flex flex-1 ml-10 items-center justify-center">
            <Image src={imagem1} alt="Foto da ong" />
          </div>
        </div>
      </div>
    </div>
  );
}
