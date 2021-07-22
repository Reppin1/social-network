import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css';

const DialogItem = ({ name, id, photo }) => (
  <div className={s.dialog}>
    <img className={s.img} src={photo} alt="" />
    <NavLink to={`/dialogs/${id}`} activeClassName={s.activeLink}>{ name }</NavLink>
  </div>
);

export { DialogItem };
