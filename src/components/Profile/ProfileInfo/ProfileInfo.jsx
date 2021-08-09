import s from './ProfileInfo.module.css';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileStatus } from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.descriptionBlock}>
      <div>
        {props.profile.fullName}
      </div>
      <div>
        {
          props.profile.photos.large
            ? <img src={props.profile.photos.large} alt="" /> : 'no Photo'
        }
      </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <div>
        {props.profile.aboutMe}
        <div>
          {props.profile.lookingForAJob ? 'Хочу на работу' : 'Не хочу'}
        </div>
        <li>
          <ul>{props.profile.contacts.vk}</ul>
          <ul>{props.profile.contacts.facebook}</ul>
          <ul>{props.profile.contacts.twitter}</ul>
          <ul>{props.profile.contacts.instagram}</ul>
        </li>
      </div>
    </div>
  );
};

export { ProfileInfo };
