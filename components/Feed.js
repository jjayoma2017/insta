import React from 'react';
import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3">
      <section className="md:col-span-2 md:max-w-6xl   mx-auto">
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:col-span-1 bg-white">
        <div className="fixed w-[380px]">
          {/* Mini  Profile*/}
          <MiniProfile />

          {/* Suggestions */}
        </div>
      </section>
    </main>
  );
}
