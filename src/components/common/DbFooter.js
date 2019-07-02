import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';

const DbFooter = ({dealID}) => {
    const {footerStyle, textStyle} = styles;
    return (

        <View style={footerStyle}>
            <TouchableOpacity onPress={() => {
                Linking.openURL(`https://covacap.com/signin=${dealID}`)
            }}>
                <Text style={textStyle}>Details</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => {
                Linking.openURL(`https://covacap.com/signin=${dealID}`)
            }}>
                <Text style={{paddingTop: 10, fontSize: 12, paddingBottom: 10, color: '#2c2c54'}}>Share</Text>
            </TouchableOpacity>

        </View>
    );

};

const styles = {
    footerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#dddddd',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,


    },
    textStyle: {
        paddingRight: 15,
        paddingTop: 10,
        fontSize: 12,
        paddingBottom: 10,
        color: '#2c2c54'
    }
};

export {DbFooter};
