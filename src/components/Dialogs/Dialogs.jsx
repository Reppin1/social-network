import React from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { DilogsForm } from './DilogForm';

const Dialogs = ({
  dialog, addNewMessage, messages,
}) => {
  const dialogsElements = dialog
    .map((d) => <DialogItem name={d.name} id={d.id} key={d.id} photo={d.photo} />);
  const messagesElement = messages
    .map((m) => <Message message={m.message} id={m.id} key={m.id} />);

  const addNewMessages = (message) => {
    addNewMessage(message.message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElement }
        <DilogsForm addNewMessages={addNewMessages} />
      </div>
    </div>
  );
};

export { Dialogs };
