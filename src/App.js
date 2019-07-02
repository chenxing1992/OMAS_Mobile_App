import React, {Component} from 'react'
import {View} from 'react-native'
import {LoginHeader, LoginLogoHeader} from './components/common';
import LoginForm from './components/LoginForm';
import DealBoardList from './components/DealBoardList';


class App extends Component {
    state = {
        successfulLoggedIn: false,
        token: ''
    };
    loggedIn = (userToken) => {
        if (userToken) {

            this.setState({
                successfulLoggedIn: true,
                token: userToken


            });
        }
    };
    LogOut = (toLogout) => {
        console.log('hello world');
        if (toLogout) {
            this.setState({
                successfulLoggedIn: false,
                token: ''

            });

        }


    };
    NewsFlow = (theToken) => {
        console.log('renderNewsFlow: ' + theToken);
        if (theToken) {
            this.setState({
                successfulLoggedIn: true,
                token: theToken
            });
        }
    };

    renderContent = () => {
        if (this.state.successfulLoggedIn) {

            return (
                //   <Provider store={createStore(reducers)}>
                <View style={{flex: 1}}>
                    <DealBoardList userToken={this.state.token} ToLogOut={this.LogOut.bind(this)}
                                   ToNewsFlow={this.NewsFlow.bind(this)}/>

                    {/*<DealBoardList userToken={this.state.token}  />*/}
                </View>
                // {/*</Provider>*/}
            );
        }
        return (
            <View>
                <LoginLogoHeader/>
                <LoginHeader headerText="Login"/>
                <LoginForm callBackFromParent={this.loggedIn.bind(this)}/>
            </View>
        );
    };

    render() {
        return (

            <View style={{flex: 1}}>
                {this.renderContent()}
            </View>


        );
    }
}

export default App;
