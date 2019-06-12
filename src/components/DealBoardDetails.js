import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, LoginCardSection} from './common';


const DealBoardDetails = ({deal}) => {
    const {Deal_Pk, User_Fk, Fis_Issuer_Fk, Content_Firstline, Content_Sec_Line, Dflag, Noofmins, Notice_Time, IDENT} = deal;
    return (


        <Card>
            <LoginCardSection>
                <Text> {Deal_Pk}</Text>
            </LoginCardSection>
            <LoginCardSection>
                <Text> {User_Fk}</Text>
            </LoginCardSection>
            <LoginCardSection>
                <Text> {Fis_Issuer_Fk}</Text>
            </LoginCardSection>
            <LoginCardSection>
                <Text> {Content_Firstline}</Text>
            </LoginCardSection>
            <LoginCardSection>
                <Text> {Content_Sec_Line}</Text>
            </LoginCardSection>
            <LoginCardSection>
                <Text> {Dflag}</Text>
            </LoginCardSection>
            <LoginCardSection>
                <Text> {Noofmins}</Text>
            </LoginCardSection>
            <LoginCardSection>
                <Text> {Notice_Time}</Text>
            </LoginCardSection>
            <LoginCardSection>
                <Text> {IDENT}</Text>
            </LoginCardSection>
        </Card>

    );

};

export default DealBoardDetails;
