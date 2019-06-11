import React, {Component} from 'react';
import {View, Text} from 'react-native';

class DealBoardList extends Component {
    state = {
        jwtElements: [],
        dealBoards: []
    };

    decodeJWT = () => {
        let jwtDecode = require('jwt-decode');
        let token = this.props.userToken;
        let decoded = jwtDecode(token);
        return <Text> {decoded.userPk}</Text>


    };

    render() {
        return (
            <View>

                {this.decodeJWT()}

            </View>
        );
    }
}

export default DealBoardList;
