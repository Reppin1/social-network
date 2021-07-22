import React from 'react';
import { Dialogs } from './Dialogs';
import { addNewMessagesActiveCreator, onMessageChangeActiveCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = ({ store }) => {
  const state = store.getState();
  const changeMessageText = (text) => {
    store.dispatch(onMessageChangeActiveCreator(text));
  };

  const addNewMessage = () => {
    store.dispatch(addNewMessagesActiveCreator());
  };

  return (
    <Dialogs
      changeMessageText={changeMessageText}
      addNewMessage={addNewMessage}
      newMessageText={state.dialogsPage.newMessageText}
      dialog={state.dialogsPage.dialogData}
      messages={state.dialogsPage.messagesData}
    />
  );
};

export { DialogsContainer };
