import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import inputReducer from './inputReducer';

export default combineReducers({
    todoState:todoReducer,
    inputState:inputReducer
});