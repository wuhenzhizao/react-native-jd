import {combineReducers,} from 'redux';
import NavigationReducer from './NavigationReducer';
import HomePageReducer from './HomePageReducer';
import CategoryReducer from './CategoryReducer';
import DiscoveryReducer from './DiscoveryReducer';

export default rootReducer = combineReducers({
    nav: NavigationReducer,
    home: HomePageReducer,
    category: CategoryReducer,
    discovery: DiscoveryReducer
});