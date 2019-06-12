import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class DealBoardList extends Component {
    state = {
        dealBoards: [],
        userPrivateKey: '',
        userToken: ''
    };

    componentWillMount() {

        let jwtDecode = require('jwt-decode');
        let token = this.props.userToken;
        let decoded = jwtDecode(token);
        this.setState({userPrivateKey: decoded.userPk, userToken: token})
    }


    renderDealBoards() {
        const {userPrivateKey, userToken} = this.state;
        const URL = `https://stage.covacap.com/listjson/deal?id=${userPrivateKey};tname=NOTIFICATIONS`;
        console.log('The url is: ' + userPrivateKey);


        axios.get(URL, {headers: {'xauth-token': userToken}})
            .then(response => {
                // If request is good...
                console.log(response.data);
                this.setState({token: response.data})
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }


    render() {
        return (
            <View>
                <Text>
                    {this.renderDealBoards()}
                </Text>
            </View>
        );
    }
}

export default DealBoardList;
