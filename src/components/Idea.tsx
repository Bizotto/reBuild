import React from 'react';

export function Idea() {
  return (
    <div className="pt-10 flex flex-col gap-4 px-10 items-center">
      <h1 className="items-center text-[40px] text-2xl justify-center font-bold pb-4">
        Ideia
      </h1>
      <p className="text-justify text-lg max-w-[500px]">
        O REBUILD iniciou-se quando a ONG Círculos de Hospitalidade buscou a
        Faculdade CESUSC, informando que necessitava de uma solução para
        otimizar o tempo de trabalho dos voluntários da organização,
        substituindo os trabalhos manuais de preenchimento e validação de
        informações por uma solução Automatizada.
      </p>
    </div>
  );
}
