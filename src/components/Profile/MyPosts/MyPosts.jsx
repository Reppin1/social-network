import React, { useRef } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

const MyPosts = ({
  posts, newPostText, addNewPost, changeOnPostText,
}) => {
  const postsElement = posts
    .map((post) => <Post message={post.message} likesCount={post.likesCount} />);

  const newPostElement = useRef(null);

  const addPost = () => {
    addNewPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    changeOnPostText(text);
  };

  return (
    <div className={s.content}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea
            placeholder="type post"
            onChange={onPostChange}
            ref={newPostElement}
            value={newPostText}
          />
        </div>
        <div>
          <button type="button" onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElement }
      </div>
    </div>
  );
};

export { MyPosts };
