import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { FormPosts } from './Post/FormPosts';

const MyPosts = ({
  posts, addNewPost,
}) => {
  const postsElement = posts
    .map((post) => <Post message={post.message} key={post.id} likesCount={post.likesCount} />);

  const addNewPosts = (values) => {
    addNewPost(values.value);
  };

  return (
    <div className={s.content}>
      <FormPosts addNewPosts={addNewPosts} />
      <div className={s.posts}>
        { postsElement }
      </div>
    </div>
  );
};

export { MyPosts };
