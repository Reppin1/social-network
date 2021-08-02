import { createStore, combineReducers } from 'redux';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { usersReducers } from './users-reducer';
import { headerReducer } from './header-reducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebars: sidebarReducer,
  usersPage: usersReducers,
  auth: headerReducer,
});

const store = createStore(rootReducer);

export { store };
