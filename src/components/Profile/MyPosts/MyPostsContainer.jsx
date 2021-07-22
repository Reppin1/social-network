import React from 'react';
import { MyPosts } from './MyPosts';
import { addPostActiveCreator, onPostChangeActiveCreator } from '../../../redux/profile-reducer';

const MyPostsContainer = ({ store }) => {
  const state = store.getState();
  const addNewPost = () => {
    store.dispatch(addPostActiveCreator());
  };

  const changeOnPostText = (text) => {
    store.dispatch(onPostChangeActiveCreator(text));
  };

  return (
    <MyPosts
      addNewPost={addNewPost}
      changeOnPostText={changeOnPostText}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export { MyPostsContainer };
