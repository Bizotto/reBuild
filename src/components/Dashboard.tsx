import Image from 'next/image';
import React from 'react';
import dashboard from '@/assets/dashboard.svg';

export function Dashboard() {
  return (
    <div className="py-10 px-10">
      <h1 className="flex flex-1 itens-center justify-center font-bold text-[40px] pb-5">
        Dashboard
      </h1>
      <div className="flex flex-1 items-center justify-center">
        <Image src={dashboard} alt="Dashboard" />
      </div>
    </div>
  );
}
