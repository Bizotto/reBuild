import React from 'react';

export function Button() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <a
        className=" border-2 rounded-full px-2 text-white bg-blue-600 text-bold hover:bg-blue-800 transition-colors h-14 flex text-lg items-center justify-center"
        href="/ourteam"
      >
        Conheça nosso time
      </a>
    </div>
  );
}
