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

    },
};

export { DbSHButton };
