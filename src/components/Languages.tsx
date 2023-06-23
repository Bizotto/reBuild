import python from '@/assets/python.svg';
import nodejs from '@/assets/nodejs.svg';
import sql from '@/assets/SQL.svg';
import anaconda from '@/assets/anaconda.svg';
import react from '@/assets/React.svg';
import looker from '@/assets/looker.svg';
import Image from 'next/image';

export function Languages() {
  return (
    <div className="mt-10 flex flex-col gap-8">
      <h1 className="text-[40px] items-center justify-center flex font-bold">
        Linguagens
      </h1>
      <div className="items-center justify-between md:justify-center font-bold flex gap-4 flex-wrap">
        <Image className="w-20 h-20" src={python} alt="python" />
        <Image className="w-20 h-20" src={nodejs} alt="node" />
        <Image className="w-20 h-20" src={sql} alt="SQL" />
        <Image className="w-20 h-20" src={anaconda} alt="anaconda" />
        <Image className="w-20 h-20" src={react} alt="react" />
        <Image className="w-20 h-20" src={looker} alt="python" />
      </div>
    </div>
  );
}
