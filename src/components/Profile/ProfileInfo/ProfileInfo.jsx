import s from './ProfileInfo.module.css';
import { Preloader } from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img className={s.img} src="https://cdn.fishki.net/upload/post/2018/06/04/2615820/11.jpg" alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <div>
          {props.profile.fullName}
        </div>
        <div>
          <img src={props.profile.photos.large} alt="" />
        </div>
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
    </div>
  );
};

export { ProfileInfo };
