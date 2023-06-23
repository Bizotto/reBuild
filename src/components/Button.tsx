import React from 'react';

export function Button() {
  return (
    <div className="fixed rounded-full shadow-lg shadow-slate-400 bottom-4 right-4 flex flex-col items-end flex-1 justify-center">
      <a
        className=" border-2 rounded-full border-none px-2 text-white bg-blue-600 text-bold hover:bg-blue-800 transition-colors h-14 flex text-lg items-center justify-center"
        href="/ourteam"
      >
        Conheça nosso time
      </a>
    </div>
  );
}
