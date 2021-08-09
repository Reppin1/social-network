import { connect } from 'react-redux';
import { compose } from 'redux';
import { Dialogs } from './Dialogs';
import { addNewMessagesActiveCreator } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => ({
  newMessageText: state.dialogsPage.newMessageText,
  dialog: state.dialogsPage.dialogData,
  messages: state.dialogsPage.messagesData,
});

const mapDispatchToProps = (dispatch) => ({
  addNewMessage: (message) => {
    dispatch(addNewMessagesActiveCreator(message));
  },
});

const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);

export { DialogsContainer };
