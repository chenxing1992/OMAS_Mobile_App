import React from 'react';
import {View } from 'react-native';

const CardSection = (props) =>{
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

};

const styles= {
  containerStyle: {
      borderBottomWidth:1, //border at the bottom
      padding: 5, //space at each side of the container
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'

  }

};
export {CardSection};
