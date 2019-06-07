//import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';

//make a component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}> {props.headerText} </Text>
        </View>
    );
};

//Styling
const styles = {
    textStyle: {
        fontSize: 72,
        fontWeight: '500',


    },
    viewStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        paddingTop: 15,
        shadowColor: 'white',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }


};
//make the component available to other parts of the app

export {Header};
