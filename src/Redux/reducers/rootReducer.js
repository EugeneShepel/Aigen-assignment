import { combineReducers } from '@reduxjs/toolkit';
import documentsReducer from './documentsReducer';

const rootReducer = combineReducers({
  documents: documentsReducer,
});

export default rootReducer;
