import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppWithNavigationState from './app/navigators/AppNavigator';
import configureStore from "./app/store/Store";

let store = configureStore();
store.subscribe(() => {
   console.log(store.getState());
});

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}
