import { combineReducers } from 'redux';
import participantReducer from './participantReducer';

const rootReducer = combineReducers({
   participants: participantReducer
});

export default rootReducer;
