import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, LoginCardSection} from './common';
import { Searchbar } from 'react-native-paper';

class SearchBar extends Component{
    state = {
        firstQuery: '',
    };

    render(){
        const { firstQuery } = this.state;
        return (
            <Searchbar
                placeholder="Search"
                onChangeText={query => { this.setState({ firstQuery: query }); }}
                value={firstQuery}
            />
        );
    }
}
export default SearchBar;
