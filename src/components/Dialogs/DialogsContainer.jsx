import { connect } from 'react-redux';
import { Dialogs } from './Dialogs';
import { addNewMessagesActiveCreator, onMessageChangeActiveCreator } from '../../redux/dialogs-reducer';

const mapStateToProps = (state) => ({
  newMessageText: state.dialogsPage.newMessageText,
  dialog: state.dialogsPage.dialogData,
  messages: state.dialogsPage.messagesData,
});

const mapDispatchToProps = (dispatch) => ({
  changeMessageText: (text) => {
    dispatch(onMessageChangeActiveCreator(text));
  },
  addNewMessage: () => {
    dispatch(addNewMessagesActiveCreator());
  },
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export { DialogsContainer };
