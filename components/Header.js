import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div>
      {/* Left */}
      <div className="flex items-center justify-between max-w-6xl">
        {/* hidden to be hidden at mobile */}
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
            layout="fill"
            className="object-contain"
          />
        </div>

        {/* hidden to be hidden at mobile */}
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
            layout="fill"
            className="object-contain"
          />
        </div>
        <h1>Right side</h1>
      </div>
      {/* Middle */}
      {/* Right */}
    </div>
  );
}
