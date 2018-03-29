import {createStore, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {middleware} from '../utils/redux';
import rootReducer from '../reducers/RootReducer';

export default configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunkMiddleWare, middleware));
}
