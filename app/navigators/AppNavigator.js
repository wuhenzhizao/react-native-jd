import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import {addListener} from "../utils/redux";
import Main from '../scenes/Main';
import Login from '../scenes/Login';

export const AppNavigator = StackNavigator({
    Main: {
        screen: Main,
        path: 'mt/main'
    },
    Login: {
        screen: Login,
        path: 'mt/login'
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
            })} />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
