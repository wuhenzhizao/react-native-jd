import {
    combineReducers,
} from 'redux';
import NavigationReducer from './NavigationReducer';
import HomePageReducer from './HomePageReducer';
import NearByReducer from './NearByReducer';
import DiscoveryReducer from './DiscoveryReducer';
import OrderReducer from './OrderReducer';
import MineReducer from './MineReducer';

export default rootReducer = combineReducers({
    nav: NavigationReducer,
    HomePageReducer,
    // NearByReducer,
    // DiscoveryReducer,
    // OrderReducer,
    // MineReducer
});