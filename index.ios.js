/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Login from './src/components/login/login';
import store from './src/store/configureStore';
import Routes from './src/routes/Routes';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

 //import MainPage from "./src/components/login/mainPage";

class loginApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes/>

            </Provider>
        );
    };
}
;


AppRegistry.registerComponent('loginApp', () => loginApp);
