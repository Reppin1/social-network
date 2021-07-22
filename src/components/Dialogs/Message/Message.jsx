import s from '../Dialogs.module.css';

const Message = ({ message }) => (
  <div className={s.message}>{ message }</div>
);

export { Message };
