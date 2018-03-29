import {AppNavigator} from '../navigators/AppNavigator';
import {NavigationActions} from 'react-navigation';

// const mainAction = AppNavigator.router.getActionForPathAndParams('main');
// const tempNavState = AppNavigator.router.getStateForAction(mainAction);
// const loginAction = AppNavigator.router.getActionForPathAndParams('login');
// const initialNavState = AppNavigator.router.getStateForAction(
//     loginAction,
//     tempNavState
// );

export default nav = (state, action) => {
    console.log(`state: ${state}, action: ${action.routeName}`);
    let nextState;
    switch (action.type) {
        case 'Login':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case 'Logout':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Login'}),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}