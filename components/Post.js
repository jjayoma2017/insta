import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

import { useSession } from 'next-auth/react';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

export default function Post({ id, username, userImage, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [hasLike, setHasLike] = useState(false);
  const [likes, setLikes] = useState([]);

  async function sendComment(event) {
    event.preventDefault(); // prevent the page to refresh when button is clicked
    const commentToSend = comment;
    setComment('');
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  }

  async function likePost() {
    if (hasLike) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      });
    }
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'posts', id, 'likes'),
      (snapshot) => {
        setLikes(snapshot.docs);
      }
    );
  }, [id, comments.length]);

  useEffect(() => {
    setHasLike(likes.findIndex((like) => like.id === session?.user.uid) !== -1);
  }, [likes.length]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [id, comments.length]);
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

      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLike ? (
              <HeartIconFilled
                className="btn text-red-400"
                onClick={likePost}
              />
            ) : (
              <HeartIcon className="btn" onClick={likePost} />
            )}

            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* Post Comments */}

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-2">
              <img
                src={comment.data().userImage}
                alt="userImage"
                className="h-7 rounded-full object-cover"
              />
              <p className="font-semibold">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {/* Post input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Enter your comment..."
            className="border-none flex-1 focus:ring-0"
          />
          <button
            type="submit"
            onClick={sendComment}
            disabled={!comment.trim()}
            className="text-blue-400 font-bold disabled:text-blue-200"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}
