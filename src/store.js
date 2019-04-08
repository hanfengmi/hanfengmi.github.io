import { combineReducers } from 'redux';
import todoListReducer from './Home/reducer';
import workListReducer from './Work/reducer';
// import oneGameReducer from './pages/oneGame/reducer';
// import userReducer from './pages/user/reducer'

const storeTree = combineReducers({
    todoListReducer,
    workListReducer,
    // oneGameReducer,
    // userReducer
});

export default storeTree;