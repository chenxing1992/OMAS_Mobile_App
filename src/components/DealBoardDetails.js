import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection} from './common';

const DealBoardDetails = ({deal}) => {
    const {Deal_Pk, User_Fk, Fis_Issuer_Fk, Content_Firstline, Content_Sec_Line, Dflag, Noofmins, Notice_Time, IDENT} = deal;
    return (
        <Card>
            <CardSection>
                <Text> {Deal_Pk}</Text>
            </CardSection>
            <CardSection>
                <Text> {User_Fk}</Text>
            </CardSection>
            <CardSection>
                <Text> {Fis_Issuer_Fk}</Text>
            </CardSection>
            <CardSection>
                <Text> {Content_Firstline}</Text>
            </CardSection>
            <CardSection>
                <Text> {Content_Sec_Line}</Text>
            </CardSection>
            <CardSection>
                <Text> {Dflag}</Text>
            </CardSection>
            <CardSection>
                <Text> {Noofmins}</Text>
            </CardSection>
            <CardSection>
                <Text> {Notice_Time}</Text>
            </CardSection>
            <CardSection>
                <Text> {IDENT}</Text>
            </CardSection>
        </Card>

    );

};

export default DealBoardDetails;
