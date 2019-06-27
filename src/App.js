import React, {Component} from 'react'
import {View} from 'react-native'
import {LoginHeader, LoginLogoHeader} from './components/common';
import LoginForm from './components/LoginForm';
import DealBoardList from './components/DealBoardList';
// import {createStore} from "redux";
// import reducers from "./components/reducers";
// import {Provider} from "react-redux";


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

    renderContent = () => {
        if (this.state.successfulLoggedIn) {
            return (
             //   <Provider store={createStore(reducers)}>
                <View style={{flex:1}}>
                    <DealBoardList userToken={this.state.token} ToLogOut={this.LogOut.bind(this)}/>

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
