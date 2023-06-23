import React from 'react';
import Image from 'next/image';
import imagem1 from '@/assets/imagem1.svg';
import { Button } from './Button';

export function About() {
  return (
    <div className="pb-10 px-10 bg-[#f6faff]">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="mb-5 text-[40px] items-center justify-center font-bold flex flex-1">
            Sobre a ONG
          </h1>
          <p className="text-justify text-lg pb-3">
            Círculos de Hospitalidade teve início em 2015, pela fundadora e
            presidente Bruna Kadletz, que passou a atuar na busca de auxiliar os
            refugiados e migrantes a conseguirem recomeçar a vida em
            Florianópolis. Atualmente, a ONG atende regularmente mais de vinte e
            cinco nacionalidades, com projetos de alcance nacional, auxiliando
            desde a obtenção da documentação de regularização dos migrantes no
            Brasil, até assegurar que os migrantes e refugiados tenham trabalho
            no Brasil, exercendo seus direitos e deveres.
          </p>
          <Button />
        </div>

        <div className="flex flex-1 ml-10 items-center justify-center">
          <Image src={imagem1} alt="Foto da ong" />
        </div>
      </div>
    </div>
  );
}
