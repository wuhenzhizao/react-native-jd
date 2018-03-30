import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import {addListener} from '../utils/redux';
import Login from '../containers/Login';
import MainTabNavigator from './MainTabNavigator';

export const AppNavigator = StackNavigator({
    Main: {
        screen: MainTabNavigator,
        path: 'jd/main'
    },
    Login: {
        screen: Login,
        path: 'jd/login'
    }
});

class AppWithNavigationState extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    render() {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
                addListener,
            })}/>
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
