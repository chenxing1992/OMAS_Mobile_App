import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import { createStore} from 'redux';

const DealBoard = () =>{
    return(
        <Provider store={createStore}>
        <View/>
        </Provider>

    );
};

export default DealBoard;
