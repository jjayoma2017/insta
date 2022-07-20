import React from 'react';
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
} from '@heroicons/react/outline';

export default function Post({ id, username, userImage, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}

      <div className="flex items-center p-5">
        <img
          src={userImage}
          alt={username}
          className="h-12 rounded-full object-cover border p-1 mr-3`"
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5 " />
      </div>

      {/* Post Image */}
      <img src={img} alt={username} className="object-cover w-full" />

      {/* Post Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
    </div>
  );
}
