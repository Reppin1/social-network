import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

const Profile = ({ store }) => (
  <div className={s.content}>
    <ProfileInfo />
    <MyPostsContainer
      store={store}
    />
  </div>
);

export { Profile };
