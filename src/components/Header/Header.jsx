import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => (
  <header className={s.header}>
    <img
      src="https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png"
      alt=""
    />
    <div className={s.loginBlock}>
      {
        props.isAuth ? (
          <div className={s.items}>
            <div className={s.item}>{props.info.userId}</div>
            <div className={s.item}>{props.login}</div>
            <div className={s.item}><button type="button" onClick={props.logout}>Logout</button></div>
          </div>
        )
          : <div className={s.link}><NavLink to="/login" className={s.link}>Login</NavLink></div>
      }
    </div>
  </header>
);

export { Header };
