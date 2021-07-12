import s from './Post.module.css';

const Post = ({ message, likesCount }) => (
  <div className={s.item}>
    <img src="https://static.zerochan.net/Hatsune.Miku.full.1695830.jpg" alt="" />
    { message }
    <div>
      <span>
        Like:
        { likesCount }
      </span>
    </div>
  </div>
);

export { Post };
