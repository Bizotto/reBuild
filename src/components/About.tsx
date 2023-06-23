import React from 'react';
import Image from 'next/image';
import imagem1 from '@/assets/imagem1.svg';

export function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 px-10 flex-[2]">
      <div className="space-y-5 flex-1">
        <h1 className="text-[40px] items-center justify-center font-bold flex">
          Sobre a ONG
        </h1>
        <p className="text-justify text-lg">
          Círculos de Hospitalidade teve início em 2015, pela fundadora e
          presidente Bruna Kadletz, que passou a atuar na busca de auxiliar os
          refugiados e migrantes a conseguirem recomeçar a vida em
          Florianópolis. Atualmente, a ONG atende regularmente mais de vinte e
          cinco nacionalidades, com projetos de alcance nacional, auxiliando
          desde a obtenção da documentação de regularização dos migrantes no
          Brasil, até assegurar que os migrantes e refugiados tenham trabalho no
          Brasil, exercendo seus direitos e deveres.
        </p>
      </div>

      <div className="flex items-center justify-center flex-1">
        <Image src={imagem1} alt="Foto da ong" />
      </div>
    </div>
  );
}
