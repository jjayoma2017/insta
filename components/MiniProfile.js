import Image from 'next/image';
import React from 'react';

export default function MiniProfile() {
  return (
    <div className="bg-white flex items-center justify-between mt-14 ml-10">
      <Image
        src="https://media-exp2.licdn.com/dms/image/C5603AQH3J_1kphIvhQ/profile-displayphoto-shrink_400_400/0/1517429465337?e=1663804800&v=beta&t=RYZazLKN-2Ttsqcnn6riV0kqzVJfChjfn68_tIfNgio"
        className="rounded-full cursor-pointer border p-[2px]"
        alt=""
        width={64}
        height={64}
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">jjayoma</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}
