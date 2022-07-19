import Image from 'next/image';
import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      {/* Left */}
      {/* hidden to be hidden at mobile */}
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
          layout="fill"
          className="object-contain"
          alt=""
        />
      </div>

      {/* hidden to be hidden at mobile */}
      <div className="cursor-pointer h-24 w-10 relative lg:hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
          layout="fill"
          className="object-contain"
          alt=""
        />
      </div>
      {/* Middle */}
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <SearchIcon className="h-5 text-gray-500" />{' '}
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
        />
      </div>
      {/* Right */}
      <h1>Right side</h1>
    </div>
  );
}
