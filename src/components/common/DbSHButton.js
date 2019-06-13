import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

const DbSHButton = ({onPress, children}) => {
    const { textStyle} = styles;
    return (
        <TouchableOpacity onPress={ onPress} >
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );

};

const styles ={
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
        //paddingTop: 10,
        //paddingBottom: 10
       // paddingTop: 12,
        //paddingBottom:12,

    },
    // buttonStyle:{
    //     //flex:1,
    //     alignSelf: 'center',
    //     //justifyContent: 'flex-end',
    //     backgroundColor: '#F6D730',
    //     borderRadius: 25,
    //     borderWidth: 1,
    //     borderColor: '#F6D730',
    //     width: '35%',
    //
    //
    //     // marginLeft: 5,
    //     // marginRight:5,
    //
    //
    // }
};

export { DbSHButton };
