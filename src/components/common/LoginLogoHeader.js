//import libraries for making a component
import React from 'react';
import { View, Image, TouchableHighlight, Linking} from 'react-native';
import {LOGINLOGONAME} from '../common';
//make a component
const LoginLogoHeader = () => {
    const { viewStyle, logoStyle} = styles;

    return (

        <View style={viewStyle}>
            <TouchableHighlight
                onPress={() => Linking.openURL('https://stage.covacap.com/')}>
            <Image source={LOGINLOGONAME} style={logoStyle}/>
            </TouchableHighlight>
        </View>

    );
};

//Styling
const styles = {

    viewStyle: {
        backgroundColor: 'white',
        height: 150,
        paddingTop: 15,
        paddingLeft:30,
        elevation: 2,
        position: 'relative',
        justifyContent: 'center',
    },
    logoStyle:{
        position:'relative',
        top:35,

    }


};
//make the component available to other parts of the app

export {LoginLogoHeader};
