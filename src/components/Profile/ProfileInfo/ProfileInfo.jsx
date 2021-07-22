import s from './ProfileInfo.module.css';

const ProfileInfo = () => (
  <div>
    <div>
      <img className={s.img} src="https://cdn.fishki.net/upload/post/2018/06/04/2615820/11.jpg" alt="" />
    </div>
    <div className={s.descriptionBlock}>
      {/* <img src="https://static.zerochan.net/Hatsune.Miku.full.1695830.jpg" alt="" /> */}
      ava + description
    </div>
  </div>
);

export { ProfileInfo };
