import python from '@/assets/python.svg';
import nodejs from '@/assets/nodejs.svg';
import sql from '@/assets/SQL.svg';
import anaconda from '@/assets/anaconda.svg';
import react from '@/assets/React.svg';
import looker from '@/assets/looker.svg';
import Image from 'next/image';

export function Languages() {
  return (
    <div className="mt-10 flex-row mx-10 flex-1">
      <h1 className="mb-2 text-2xl items-center justify-center font-bold flex flex-1">
        Linguagens
      </h1>
      <div className="items-center justify-between font-bold flex flex-1 mx-80 mt-6">
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
