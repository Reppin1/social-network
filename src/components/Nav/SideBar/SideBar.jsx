import s from './SideBar.module.css';

const SideBar = ({ name, photo }) => (
  <div className={s.content}>
    <img className={s.img} src={photo} alt="" />
    <div>
      {name}
    </div>
  </div>
);

export { SideBar };
