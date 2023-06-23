import React from 'react';
import Image from 'next/image';
import imagem2 from '@/assets/imagem2.svg';

export function Purpose() {
  return (
    <div className="px-10 py-10">
      <div className="grid grid-cols-2">
        <div className="flex flex-1 ml-10 items-center justify-center">
          <Image src={imagem2} alt="Foto da ong" />
        </div>
        <div>
          <h1 className="mb-2 text-[40px] items-center justify-center font-bold flex flex-1">
            Proposta de valor
          </h1>
          <p className="text-justify text-lg">
            A proposta de valor do projeto REBUILD tem cunho social, e visa
            auxiliar a ONG a automatizar seus serviços por meio de serviços de
            scraping, economizando tempo e recursos da organização.
          </p>
        </div>
      </div>
    </div>
  );
}
