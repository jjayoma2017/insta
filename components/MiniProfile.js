import Image from 'next/image';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="bg-white flex items-center justify-between mt-14 ml-10">
      {session && (
        <>
          <Image
            src={session?.user.image}
            className="rounded-full cursor-pointer border p-[2px]"
            alt=""
            width={64}
            height={64}
          />
          <div className="flex-1 ml-4">
            <h2 className="font-bold">{session.user.username}</h2>
            <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
          </div>
          <button
            className="font-semibold text-blue-400 text-sm"
            onClick={signOut}
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
}
