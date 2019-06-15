//import libraries for making a component
import React from 'react';
import {View} from 'react-native';
//make a component
const DbHeader = (props) => {
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
        backgroundColor: '#6e83b2',
        height: 100,
        paddingTop: 35,
        paddingLeft: 20,
        elevation: 2,
        subTitle: 'relative',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }



};
//make the component available to other parts of the app

export {DbHeader};
