import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity onPress={ onPress} style ={buttonStyle}>
        <Text style={textStyle}>
            {children}
        </Text>
        </TouchableOpacity>
    );

};

const styles ={
    textStyle: {
      alignSelf: 'center',
      color: '#000',
      fontSize: 16,
      fontWeight: '600',
      //paddingTop: 10,
      //paddingBottom: 10
        paddingTop: 12,
        paddingBottom:12,

    },
  buttonStyle:{
      //flex:1,
      alignSelf: 'center',
      //justifyContent: 'flex-end',
      backgroundColor: '#F6D730',
      borderRadius: 25,
      borderWidth: 1,
      borderColor: '#F6D730',
      width: '35%',


     // marginLeft: 5,
     // marginRight:5,


  }
};

export { Button };
