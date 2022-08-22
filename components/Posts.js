import React, { useEffect, useState } from 'react';
import Post from './Post';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useSession } from 'next-auth/react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  const [postSize, setPostSize] = useState(0);

  useEffect(() => {
    const onsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs);
        setPostSize(posts.length);
      }
    );
    return onsubscribe;
  }, [postSize]);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImage={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}
