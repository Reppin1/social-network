import s from './Post.module.css';

const Post = ({ message, likesCount }) => (
  <div className={s.item}>
    <div className={s.post}>
      <img src="https://static.zerochan.net/Hatsune.Miku.full.1695830.jpg" alt="" />
      <p className={s.message}>
        {message}
      </p>
    </div>
    <div>
      <span>
        Like:
        {likesCount}
      </span>
    </div>
  </div>
);

export { Post };
