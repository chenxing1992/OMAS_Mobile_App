import React, {Component} from 'react'
import {View} from 'react-native'
import {Header, LoginLogoHeader} from './components/common';
import LoginForm from './components/LoginForm';
import DealBoardList from './components/DealBoardList';

class App extends Component {
    state = {
        successfulLoggedIn: false,
        token:''
    };
    loggedIn = (userToken) => {
        if (userToken) {

            this.setState({
                successfulLoggedIn: true,
                token: userToken


            });
        }
    };

    renderContent = () => {
        if (this.state.successfulLoggedIn) {
            return (
                <View>
                    <DealBoardList userToken={this.state.token}/>
                </View>
            );
        }
        return (
            <View>
                <LoginLogoHeader/>
                <Header headerText="Login"/>
                <LoginForm callBackFromParent={this.loggedIn.bind(this)}/>
            </View>
        );
    };

    render() {
        return (
            <View>

                {this.renderContent()}
            </View>

        );
    }
}

export default App;
