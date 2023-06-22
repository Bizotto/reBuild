import logo from '@/assets/log.svg';
import Image from 'next/image';
import React from 'react';

export function Header() {
  return (
    <div className="pb-10 bg-[#6B96F1]">
      <div className="pt-10 shadow-xl flex-row flex-1 text-white rounded-b-3xl justify-center items-center bg-[url(../assets/header-background.svg)]">
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
            Modi, laudantium. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iste laboriosam recusandae, ad corrupti rem impedit, unde
            voluptatibus magni labore accusantium itaque autem totam suscipit id
            distinctio natus. Doloremque aut libero inventore dolorum veniam
            beatae totam. Eaque maiores consequatur facere mollitia voluptates
            sed rerum sit corporis praesentium consectetur sequi non
            necessitatibus odio fuga voluptatum reprehenderit cupiditate debitis
            nemo, accusantium iusto dolor. Vel iusto, deleniti saepe, voluptatum
            nesciunt ea expedita praesentium similique suscipit quasi id
            blanditiis omnis esse nostrum. Explicabo quod fugiat assumenda iste
            alias, eum at aliquid dicta ullam quaerat dolorum.
          </p>
        </div>
      </div>
    </div>
  );
}
