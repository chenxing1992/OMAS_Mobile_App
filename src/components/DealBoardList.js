import React, {Component} from 'react';
import {View, ScrollView, TouchableHighlight,Linking,Image} from 'react-native';
import axios from 'axios';
import { DbHeader,DBLOGO, SIGNOUT} from './common';
import DealBoardDetails from './DealBoardDetails';

class DealBoardList extends Component {
    state = {
        dealBoards: [],
       // userLogout: false,
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

    renderLogout = () => {
        console.log('user click on log out button');
        this.props.ToLogOut(true);

     };
   


    render() {
        const {logoStyle,signOutStyle} = styles;
        return (
            <View>
                <DbHeader >
                    <TouchableHighlight
                        onPress={() => Linking.openURL('https://stage.covacap.com/')}>
                        <Image source={DBLOGO} style={logoStyle}/>
                    </TouchableHighlight>
                    <TouchableHighlight

                        onPress={() =>  {this.renderLogout()}}>
                        <Image source={SIGNOUT} style={signOutStyle}/>
                    </TouchableHighlight>
                </DbHeader>
                {/*<DbHeader/>*/}
            <ScrollView>
                {this.renderDealBoards()}
            </ScrollView>
            </View>
        );
    }
}
const styles ={
    logoStyle:{
        position:'relative',
        top:15,
        bottom:10


    },
    signOutStyle:{
        position:'relative',
        width: 40,
        height:40,
        top:15,
        right:10,
        bottom:10


    }
};

export default DealBoardList;
