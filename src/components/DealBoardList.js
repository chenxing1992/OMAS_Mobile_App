import React, {Component} from 'react';
import {
    View,
    ScrollView,
    TouchableHighlight,
    Linking,
    Image,
    LayoutAnimation
} from 'react-native';
import axios from 'axios';
import {DbHeader, DbSubHeader, DBLOGO, SIGNOUT, DbSHButton} from './common';
import DealBoardDetails from './DealBoardDetails';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'


class DealBoardList extends Component {

    constructor() {
        super();

        const array = [
            {
                title: 'DEAL - Keppel Corporation Limited 5Y | 10Y SGD REGS ',
                dealId: 12345,
                publishDate: '14 Sept',
                status: 'Revised',
                subTitle: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '6:00pm',
                    details: 'Size: USD 100mm | Deal Details: https://tinyurl.com/VCREDITHoldings'
                },
                    {
                        firstTime: '4:00pm',
                        details: 'Final Price Guidance: T+130bps Area(+/-2bps,WPIR) | 4.30-4.35%(WPIR) |Size: USD Benchmark|Timing: As early as today\'s business'
                    }
                ]
            },
            {
                title: 'Mandate - PT Gajah Tunggal',
                dealId: 12345,
                publishDate: '14 Sept',
                status: 'New',
                subTitle: '',
                sub_Category: [{
                    firstTime: '9:30pm',
                    details: 'First Description Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
                }]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '14 Sept',
                status: 'Revised',
                subTitle: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '4:00pm',
                    details: 'First Description Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
                }]
            },
            {
                title: 'Mandate - PT Gajah Tunggal',
                dealId: 12345,
                publishDate: '14 Sept',
                status: 'New',
                subTitle: '',
                sub_Category: [{
                    firstTime: '9:30pm',
                    details: 'First Description Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
                }]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '14 Sept',
                status: 'Revised',
                subTitle: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '4:00pm',
                    details: 'First Description Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
                }]
            },
            {
                title: 'Mandate - PT Gajah Tunggal',
                dealId: 12345,
                publishDate: '14 Sept',
                status: 'New',
                subTitle: '',
                sub_Category: [{
                    firstTime: '9:30pm',
                    details: 'First Description Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
                }]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '14 Sept',
                status: 'Revised',
                subTitle: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '4:00pm',
                    details: 'First Description Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
                }]
            },
            {
                title: 'Mandate - PT Gajah Tunggal',
                dealId: 12345,
                publishDate: '14 Sept',
                status: 'New',
                subTitle: '',
                sub_Category: [{
                    firstTime: '9:30pm',
                    details: 'First Description Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
                }]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '14 Sept',
                status: 'Revised',
                subTitle: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '4:00pm',
                    details: 'First Description Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
                }]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '14 Sept',
                status: 'Revised',
                subTitle: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '4:00pm',
                    details: 'First Description Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
                }]
            },];

        this.state = {
            dealBoards: [],
            AccordionData: [...array]
            // userLogout: false,
        };
    }

    update_Layout = (index) => {

        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        const array = [...this.state.AccordionData];

        array[index]['expanded'] = !array[index]['expanded'];

        this.setState(() => {
            return {
                AccordionData: array
            }
        });
    };


    componentWillMount() {

        let jwtDecode = require('jwt-decode');
        let token = this.props.userToken;
        let decoded = jwtDecode(token);
        //this.setState({userPrivateKey: decoded.userPk, userToken: token});

        //const {userPrivateKey, userToken} = this.state;
        const URL = `https://stage.covacap.com/listjson/deal?id=${decoded.userPk};tname=NOTIFICATIONS`;
        //console.log('The url is: ' + userPrivateKey);


        axios.get(URL, {headers: {'xauth-token': token}})
            .then(response => {
                // If request is good...
                console.log(response.data);
                return this.setState({dealBoards: response.data})
            })
            .catch((error) => {
                console.log('error ' + error);
            });


    }


    renderDealBoards() {
        return (
            this.state.AccordionData.map((item, key) =>
                (
                    <DealBoardDetails key={item.title} onClickFunction={this.update_Layout.bind(this, key)}
                                      item={item}/>
                ))
        );
        // return this.state.dealBoards.map(deal =>
        //     <DealBoardDetails key={deal.Deal_Pk} deal={deal}/>
        // );
    }

    renderLogout = () => {
        console.log('user click on log out button');
        this.props.ToLogOut(true);

    };


    render() {
        const {logoStyle, signOutStyle} = styles;
        return (
            <Provider store={createStore(reducers)}>
            <View>
                <DbHeader>
                    <TouchableHighlight
                        onPress={() => Linking.openURL('https://stage.covacap.com/')}>
                        <Image source={DBLOGO} style={logoStyle}/>
                    </TouchableHighlight>
                    <TouchableHighlight

                        onPress={() => {
                            this.renderLogout()
                        }}>
                        <Image source={SIGNOUT} style={signOutStyle}/>
                    </TouchableHighlight>
                </DbHeader>
                <DbSubHeader>
                    {/*<DbSHButton onPress={() => {*/}
                    {/*    Linking.openURL('https://covacap.com/signin')*/}
                    {/*}}> Nucleus</DbSHButton>*/}
                    <DbSHButton onPress={() => {
                        Linking.openURL('https://covacap.com/signin')
                    }}>Home</DbSHButton>
                    <DbSHButton onPress={() => {
                        Linking.openURL('https://covacap.com/signin')
                    }}> Analytics</DbSHButton>
                </DbSubHeader>

                {/*<SearchBar/>*/}
                <ScrollView contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 5}}>
                    {this.renderDealBoards()}
                </ScrollView>

            </View>
            </Provider>
        );
    }
}

const styles = {
    logoStyle: {
        subTitle: 'relative',
        top: 15,
        bottom: 10


    },
    signOutStyle: {
        subTitle: 'relative',
        width: 40,
        height: 40,
        top: 15,
        right: 10,
        bottom: 10


    },


    iconStyle: {

        width: 30,
        height: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',
        tintColor: '#fff'

    },

    sub_Category_Text: {
        fontSize: 18,
        color: '#000',
        padding: 10
    },

    category_Text: {
        textAlign: 'left',
        color: '#fff',
        fontSize: 21,
        padding: 10
    },

    category_View: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0091EA'
    },

};

export default DealBoardList;
