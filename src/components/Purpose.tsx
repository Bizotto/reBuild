import React from 'react';
import Image from 'next/image';
import imagem2 from '@/assets/imagem2.svg';

export function Purpose() {
  return (
    <div className="flex flex-col-reverse md:flex-row flex-[2] gap-4">
      <div className="flex flex-1 ml-10 items-center justify-center">
        <Image src={imagem2} alt="Foto da ong" />
      </div>
      <div className="flex-1">
        <h1 className="mb-2 text-[40px] items-center justify-center font-bold flex flex-1">
          Proposta de valor
        </h1>
        <p className="text-justify text-lg">
          A proposta de valor do projeto REBUILD tem cunho social, e visa
          auxiliar a ONG a automatizar seus serviços por meio de serviços de
          limpeza e organização, economizando tempo e recursos.
        </p>
      </div>
    </div>
  );
}
