import Link from 'next/link';
import React from 'react';

export function Button() {
  return (
    <div className="fixed rounded-full hover:scale-110 transform transition duration-300 shadow-md shadow-slate-900 bottom-4 right-4 flex flex-col items-end flex-1 justify-center">
      <Link
        className=" border-2 rounded-full border-none px-2 active:bg-blue-900 duration-300 text-white bg-blue-600 text-bold hover:bg-blue-800 transition-colors h-14 flex text-lg items-center justify-center"
        href="/ourteam"
      >
        Conheça nosso time
      </Link>
    </div>
  );
}
