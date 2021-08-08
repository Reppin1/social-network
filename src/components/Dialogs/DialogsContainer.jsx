import { connect } from 'react-redux';
import { compose } from 'redux';
import { Dialogs } from './Dialogs';
import { addNewMessagesActiveCreator, onMessageChangeActiveCreator } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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

const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);

export { DialogsContainer };
