import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import { SideBar } from './SideBar/SideBar';

const Nav = (props) => {
  const state = props.sidebarData;
  const sidebarElements = state
    .map((el) => <SideBar name={el.name} key={el.id} photo={el.photo} />);

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      <div className={s.elements}>
        { sidebarElements }
      </div>
    </nav>
  );
};

export { Nav };
