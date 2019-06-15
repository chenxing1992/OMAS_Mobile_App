//import libraries for making a component
import React from 'react';
import {View} from 'react-native';
//make a component
const DbSubHeader = (props) => {
    const {viewStyle} = styles;
    return (

        <View style={viewStyle}>
            {props.children}
        </View>


    );
};

//Styling
const styles = {

    viewStyle: {
        backgroundColor: '#97a7c8',
        height: 45,
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        elevation: 2,
        subTitle: 'relative',
        justifyContent: 'space-between',
        flexDirection: 'row',
       // flex:1
    }



};
//make the component available to other parts of the app

export {DbSubHeader};
