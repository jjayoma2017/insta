import React from 'react';
import Post from './Post';

export default function Posts() {
  const posts = [
    {
      id: '1',
      username: 'joelj',
      userImage:
        'https://media-exp2.licdn.com/dms/image/C5603AQH3J_1kphIvhQ/profile-displayphoto-shrink_400_400/0/1517429465337?e=1663804800&v=beta&t=RYZazLKN-2Ttsqcnn6riV0kqzVJfChjfn68_tIfNgio',
      img: 'https://images.unsplash.com/photo-1658237783206-e1ae5b72eeb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      caption: 'Thanks for your nice picture',
    },
    {
      id: '2',
      username: 'jeanC',
      userImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAqlJJr5-i3FltlVjPCDVwT1JUV-s9Hzav9eeQck-l3hbyLapqCpu3LezAe2T1u7rFzgs&usqp=CAU',
      img: 'https://images.unsplash.com/photo-1658239828542-daa29a4cd472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2354&q=80',
      caption: 'Nice View',
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImage={post.userImage}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
