// import s from './MyPosts.module.css';
import { Post } from './Post/Post';

const MyPosts = () => (
  <div>
    My Post
    <div>
      <textarea />
      <button type="button">add</button>
    </div>
    <div>
      <Post message="asdasfv" likesCount="0" />
      <Post message="ANIDSANSL" likesCount="23" />
    </div>
  </div>
);

export { MyPosts };
