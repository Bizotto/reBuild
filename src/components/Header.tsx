import logo from '@/assets/log.svg';
import Image from 'next/image';
import React from 'react';

export function Header() {
  return (
    <div className="pb-10 bg-[#f6faff]">
      <div className="pt-10 shadow-lg shadow-slate-700 flex-row flex-1 text-white rounded-b-3xl justify-center items-center bg-[url(../assets/header-background.svg)]">
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

        <div className="py-10 px-10 ">
          <h1 className="items-center text-[40px] mb-5 text-2xl justify-center font-bold flex flex-1">
            Ideia
          </h1>
          <p className="text-justify text-lg">
            O REBUILD iniciou-se quando a ONG Círculos de Hospitalidade buscou a
            Faculdade CESUSC, informando que necessitava de uma solução para
            otimizar o tempo de trabalho dos voluntários da organização,
            substituindo os trabalhos manuais de preenchimento e validação de
            informações por uma solução de automação via scraping.
          </p>
        </div>
      </div>
    </div>
  );
}
