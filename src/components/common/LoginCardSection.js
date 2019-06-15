import React from 'react';
import {View} from 'react-native';

const LoginCardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

};

const styles = {
    containerStyle: {
        borderBottomWidth: 1, //border at the bottom
        //padding: 5,  //space at each side of the container
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#000',
        subTitle: 'relative'

    }

};
export {LoginCardSection};
