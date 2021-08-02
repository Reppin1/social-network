import React, { useRef } from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

const Dialogs = ({
  dialog, changeMessageText, newMessageText, addNewMessage, messages,
}) => {
  const dialogsElements = dialog
    .map((d) => <DialogItem name={d.name} id={d.id} key={d.id} photo={d.photo} />);
  const messagesElement = messages
    .map((m) => <Message message={m.message} id={m.id} key={m.id} />);

  const newMessageElement = useRef(null);

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    changeMessageText(text);
  };

  const addNewMessages = () => {
    addNewMessage();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElement }
        <div><textarea placeholder="type message" ref={newMessageElement} onChange={onMessageChange} value={newMessageText} /></div>
        <div><button type="button" onClick={addNewMessages}>send messages</button></div>
      </div>
    </div>
  );
};

export { Dialogs };
