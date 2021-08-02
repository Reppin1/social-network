import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => (
  <header className={s.header}>
    <img
      src="https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png"
      alt=""
    />
    <div className={s.loginBlock}>
      <div>
        {props.info.userId}
      </div>
      {
        props.isAuth ? props.login
          : <NavLink to="/login">Login</NavLink>
      }
    </div>
  </header>
);

export { Header };
