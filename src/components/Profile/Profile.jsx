import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import { MyPostContainer } from './MyPosts/MyPostsContainer';

const Profile = (props) => (
  <div className={s.content}>
    <ProfileInfo profile={props.profile} />
    <MyPostContainer
      store={props.posts}
    />
  </div>
);

export { Profile };
