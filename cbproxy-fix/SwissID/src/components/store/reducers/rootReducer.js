import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import intlReducer from './intlReducer';
import transferReducer from './transferReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  transfer: transferReducer,
  intl: intlReducer,
  user: userReducer,
  firestore: firestoreReducer
});

export default rootReducer;