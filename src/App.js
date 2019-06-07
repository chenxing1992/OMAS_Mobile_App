import React, {Component} from 'react'
import {View} from 'react-native'
import { Header, LoginLogoHeader }  from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    render() {
        return (
            <View>
                <LoginLogoHeader />
                <Header headerText ="Login" />
                <LoginForm/>
            </View>

        );
    }
}

export default App;
