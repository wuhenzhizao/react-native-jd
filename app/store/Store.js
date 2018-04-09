import {createStore, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {middleware} from '../utils/redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/RootReducer';

export default configureStore = () => {
    return createStore(rootReducer, composeWithDevTools(
        applyMiddleware(thunkMiddleWare, middleware)
    ));
};
