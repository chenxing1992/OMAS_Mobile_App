/**
 * @format
 */
import * as React from 'react';
import {AppRegistry, View} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

export default function Main() {
    return (

        <View style={{flex: 1}}>
            <App />
        </View>

    );
}

AppRegistry.registerComponent(appName, () => App);
