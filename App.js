import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppWithNavigationState from './app/navigators/AppNavigator';
import configureStore from "./app/store/Store";
import SplashScreen from 'react-native-splash-screen'

let store = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }

    componentDidMount() {
        SplashScreen.hide();
    }
}
