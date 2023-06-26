import React from 'react';
import { Line } from './Line';
import Image from 'next/image';
import Link from 'next/link';
import link from '@/assets/linkedin.svg';
import git from '@/assets/git.svg';

interface Player {
  name: string;
  role: string;
  linkedin: string;
  image: any;
  github: string;
}

export function PlayerCard({ name, role, github, linkedin, image }: Player) {
  return (
    <>
      <Line />
      <div className="flex items-center gap-4">
        <Image className="rounded-full w-48" src={image} alt="Profile pic" />

        <div className="flex-row justify-center">
          <p className="text-[40px] font-bold">{name}</p>
          <p className="text-[20px] font-bold">{role}</p>
          <div className="items-center space-y-10 mb-2">
            <Link
              className="text-2xl flex gap-2 items-center text-gray-500 hover:text-gray-900"
              href={linkedin}
            >
              <Image width={40} height={40} src={link} alt="Linkedin" />
              Linkedin
            </Link>
          </div>
          <div className="items-center space-y-10">
            <Link
              className="text-2xl flex gap-2 items-center text-gray-500 hover:text-gray-900"
              href={github}
            >
              <Image width={40} height={40} src={git} alt="Github" />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
