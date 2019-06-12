import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import axios from 'axios';
import { DbHeader} from './common';
import DealBoardDetails from './DealBoardDetails';

class DealBoardList extends Component {
    state = {
        dealBoards: [],
    };

    componentWillMount() {

        let jwtDecode = require('jwt-decode');
        let token = this.props.userToken;
        let decoded = jwtDecode(token);
        //this.setState({userPrivateKey: decoded.userPk, userToken: token});

        //const {userPrivateKey, userToken} = this.state;
        const URL = `https://stage.covacap.com/listjson/deal?id=${decoded.userPk};tname=NOTIFICATIONS`;
        //console.log('The url is: ' + userPrivateKey);


        axios.get(URL, {headers: {'xauth-token': token}})
            .then(response => {
                // If request is good...
                console.log(response.data);
                return this.setState({dealBoards: response.data})
            })
            .catch((error) => {
                console.log('error ' + error);
            });


    }


    renderDealBoards() {
        return this.state.dealBoards.map(deal =>
            <DealBoardDetails key={deal.Deal_Pk} deal={deal}/>
        );
    }


    render() {
        return (
            <View>
                <DbHeader/>
            <ScrollView>
                {this.renderDealBoards()}
            </ScrollView>
            </View>
        );
    }
}

export default DealBoardList;
