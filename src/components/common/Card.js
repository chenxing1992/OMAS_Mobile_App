import React from 'react'
import {View} from 'react-native';

const Card = (props) => {
    return (

        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle:{
        borderWidth: 1, //put a border around the border and give a pixel of 1
        borderRadius: 2, //round edges at the corners
        borderColor: '#ddd',
        borderBottomWidth: 0, //hide the border away at the bottom of the border
        shadowOffset: { width:0, height:2 }, //determine what side you want the shadow to appear and in this case there will be shadow appearing on both left and right side
        shadowOpacity:0.1, //range from 0 to 1
        shadowRadius: 2, //round edges at the corner of the shadow
        elevation: 1,
        marginLeft: 5, //give how much spacing from the left
        marginRight: 5, //give how much spacing from the right
        marginTop: 10 //give how much spacing from the top
    }

};
export {Card};
