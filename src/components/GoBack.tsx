import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export function GoBack() {
  return (
    <Link href="./">
      <ArrowLeftCircleIcon
        className="absolute text-black active:text-black hover:text-gray-700 hover:scale-125 transform transition duration-300 top-10 left-10"
        width={60}
        height={60}
      />
    </Link>
  );
}
