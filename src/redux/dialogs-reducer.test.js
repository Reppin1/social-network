import { dialogsReducer, addNewMessagesActiveCreator } from './dialogs-reducer';

const data = {
  messagesData: [
    { id: 1, message: 'Hey' },
  ],
};

test('should add message', () => {
  const action = addNewMessagesActiveCreator('YES');
  const newState = dialogsReducer(data, action);
  expect(newState.messagesData.length).toBe(2);
});

test('should add correct message', () => {
  const action = addNewMessagesActiveCreator('YES');
  const newState = dialogsReducer(data, action);
  expect(newState.messagesData[1].message).toBe('YES');
});
