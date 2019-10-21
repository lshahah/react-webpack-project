// 合并所有的reducers
import { combineReducers } from 'redux';
import changeValue from './Counter';

export default combineReducers({
    changeValue
});
