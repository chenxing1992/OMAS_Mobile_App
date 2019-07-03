import React, {Component} from 'react';
import {
    View,
    ScrollView,
    TouchableHighlight,
    Linking,
    Image,
    LayoutAnimation,
    RefreshControl
} from 'react-native';
import axios from 'axios';
import {DbHeader, DbSubHeader, DBLOGO, SIGNOUT, DbSHButton} from './common';
import DealBoardDetails from './DealBoardDetails';

class DealBoardList extends Component {

    constructor() {
        super();
        const array = [
            {
                title: 'DEAL - Keppel Corporation Limited 5Y | 10Y SGD REGS   ',
                dealId: 12345,
                publishDate: '27 Sept',
                status: 'Update',
                position: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '08:30:10 AM',
                    tableTitle: 'Initial Price Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                        ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                        ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                        ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                    ]

                },
                    {
                        firstTime: '10:00:10 AM',
                        tableTitle: 'Update',
                        company: 'OCBC',
                        customText: 'Books Over $1bn (Incl. JLM Interest)',
                        tableData: []

                    },
                    {
                        firstTime: '16:00',
                        tableTitle: 'Update',
                        company: 'OCBC',
                        customText: 'APAC Book Subject - 17:00HKT',
                        tableData: []

                    },
                    {
                        firstTime: '18:30:20 PM',
                        tableTitle: 'Final Price Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps (The Number)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps (The Number)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps (The Number)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps (The Number)', 'USD Benchmark']
                        ]

                    },

                    {
                        firstTime: '18:30:12 PM',
                        tableTitle: 'Update',
                        company: 'OCBC',
                        customText: 'Books Over $2.2bn (Incl JLM Interest)',
                        tableData: []

                    },
                    {
                        firstTime: '20:00:20 PM',
                        tableTitle: 'Launched',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps', '200mm'],
                            ['6Y', '3mL + 140bps', '200mm'],
                            ['7Y', '3mL + 210bps', '200mm'],
                            ['8Y', '3mL + 220bps', '200mm']
                        ]

                    },
                    {
                        firstTime: '21:00:20 PM',
                        tableTitle: 'Priced',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps', '200mm'],
                            ['6Y', '3mL + 140bps', '200mm'],
                            ['7Y', '3mL + 210bps', '200mm'],
                            ['8Y', '3mL + 220bps', '200mm']
                        ]

                    }

                ]
            },

            {
                title: 'Mandate - PT Gajah Tunggal',
                dealId: 12345,
                publishDate: '26 Sept',
                status: 'New',
                position: '',
                sub_Category: [{
                    firstTime: '06:00:00 AM',
                    tableTitle: 'Final Price Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120bps (The Number)', 'USD Benchmark'],
                        ['6Y', '3mL + 140bps (The Number)', 'USD Benchmark'],
                        ['7Y', '3mL + 210bps (The Number)', 'USD Benchmark'],
                        ['8Y', '3mL + 220bps (The Number)', 'USD Benchmark']
                    ]

                },
                    {
                        firstTime: '08:00:12 AM',
                        tableTitle: 'Update',
                        company: 'Covalent',
                        customText: 'This is a Custom Text',
                        tableData: []

                    },
                    {
                        firstTime: '17:00:20 PM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    }
                ]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '25 Sept',
                status: 'Update',
                position: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '09:00:10 AM',
                    tableTitle: 'Final Price Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120bps (The Number)', 'USD Benchmark'],
                        ['6Y', '3mL + 140bps (The Number)', 'USD Benchmark'],
                        ['7Y', '3mL + 210bps (The Number)', 'USD Benchmark'],
                        ['8Y', '3mL + 220bps (The Number)', 'USD Benchmark']
                    ]


                },
                    {
                        firstTime: '10:00:20 AM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    },
                    {
                        firstTime: '12:00:22 PM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    }
                ]
            },
            {
                title: 'Mandate - PT Gajah Tunggal',
                dealId: 12345,
                publishDate: '24 Sept',
                status: 'New',
                position: '',
                sub_Category: [{
                    firstTime: '06:00:22 AM',
                    tableTitle: 'Revised Price Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120bps', '200mm'],
                        ['6Y', '3mL + 140bps', '200mm'],
                        ['7Y', '3mL + 210bps', '200mm'],
                        ['8Y', '3mL + 220bps', '200mm']
                    ]

                },
                    {
                        firstTime: '11:00:20 AM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    },
                    {
                        firstTime: '13:00:20 PM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    }
                ]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '23 Sept',
                status: 'Update',
                position: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '06:00:22 AM',
                    tableTitle: 'Revised Price Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120bps', '200mm'],
                        ['6Y', '3mL + 140bps', '200mm'],
                        ['7Y', '3mL + 210bps', '200mm'],
                        ['8Y', '3mL + 220bps', '200mm']
                    ]

                },
                    {
                        firstTime: '12:00:22 PM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    },
                    {
                        firstTime: '14:00:22 PM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    }
                ]
            },
            {
                title: 'Mandate - PT Gajah Tunggal',
                dealId: 12345,
                publishDate: '22 Sept',
                status: 'New',
                position: '',
                sub_Category: [{
                    firstTime: '06:00:22 AM',
                    tableTitle: 'Revised Price Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120bps', '200mm'],
                        ['6Y', '3mL + 140bps', '200mm'],
                        ['7Y', '3mL + 210bps', '200mm'],
                        ['8Y', '3mL + 220bps', '200mm']
                    ]

                },
                    {
                        firstTime: '08:00:22 AM',
                        tableTitle: 'Initial PriceGuidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    },
                    {
                        firstTime: '15:00:22 PM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    }
                ]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '21 Sept',
                status: 'Update',
                position: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '06:00:22 AM',
                    tableTitle: 'Revised Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120bps', '200mm'],
                        ['6Y', '3mL + 140bps', '200mm'],
                        ['7Y', '3mL + 210bps', '200mm'],
                        ['8Y', '3mL + 220bps', '200mm']
                    ]

                },
                    {
                        firstTime: '08:00:23 AM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    },
                    {
                        firstTime: '14:00:44 PM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    }
                ]
            },
            {
                title: 'Mandate - PT Gajah Tunggal',
                dealId: 12345,
                publishDate: '20 Sept',
                status: 'New',
                position: '',
                sub_Category: [{
                    firstTime: '06:00:32 AM',
                    tableTitle: 'Revised Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120bps', '200mm'],
                        ['6Y', '3mL + 140bps', '200mm'],
                        ['7Y', '3mL + 210bps', '200mm'],
                        ['8Y', '3mL + 220bps', '200mm']
                    ]

                },
                    {
                        firstTime: '09:00:11 AM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    },
                    {
                        firstTime: '17:00:33 PM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    }
                ]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '19 Sept',
                status: 'Update',
                position: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '07:00:22 AM',
                    tableTitle: 'Revised Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120bps', '200mm'],
                        ['6Y', '3mL + 140bps', '200mm'],
                        ['7Y', '3mL + 210bps', '200mm'],
                        ['8Y', '3mL + 220bps', '200mm']
                    ]

                },
                    {
                        firstTime: '08:00:33 AM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    },
                    {
                        firstTime: '18:00:33 PM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    }
                ]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '18 Sept',
                status: 'Update',
                position: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '06:00:33 AM',
                    tableTitle: 'Revised Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120bps', '200mm'],
                        ['6Y', '3mL + 140bps', '200mm'],
                        ['7Y', '3mL + 210bps', '200mm'],
                        ['8Y', '3mL + 220bps', '200mm']
                    ]

                },
                    {
                        firstTime: '08:00:34 AM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    },
                    {
                        firstTime: '19:00:34 PM',
                        tableTitle: 'Initial Price Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120bps - 150bps (Area)', 'USD Benchmark'],
                            ['6Y', '3mL + 140bps - 150bps (Area)', 'USD Benchmark'],
                            ['7Y', '3mL + 210bps - 260bps (Area)', 'USD Benchmark'],
                            ['8Y', '3mL + 220bps - 300bps (Area)', 'USD Benchmark']
                        ]
                    }
                ]
            }


        ];

        this.state = {

            AccordionData: [...array],
            refreshing: false,
            dealBoards: []

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
                console.log('Data from componentWillMount: ' + response.data);
                return this.setState({dealBoards: response.data})
            })
            .catch((error) => {
                console.log('error ' + error);
            });


    }

    fetchData() {
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
                console.log('Refresh Page Of New Data: ' + JSON.stringify(response.data));
                return this.setState({dealBoards: response.data, refreshing: false})
            })
            .catch((error) => {
                console.log('error ' + error);
            });


    }


    renderDealBoards() {
        console.log("this is the props" + this.props);
        return (
            this.state.AccordionData.map((item, key) =>

                (
                    <DealBoardDetails key={item.title} onClickFunction={this.update_Layout.bind(this, key)}
                                      item={item}/>

                ))
        );

    }

    renderLogout = () => {
        console.log('user click on log out button');
        this.props.ToLogOut(true);

    };
    renderNewsFlow = () => {
        let token = this.props.userToken;
        this.props.ToNewsFlow(token);
    };

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.fetchData();
    };

    render() {
        const {logoStyle, signOutStyle} = styles;
        return (
            //  <Provider store={createStore(reducers)}>
            <View style={{flex: 1}}>
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
                        this.renderNewsFlow()
                        //Linking.openURL('https://covacap.com/signin')
                    }}>NEWSFLOW</DbSHButton>
                    <DbSHButton onPress={() => {
                        Linking.openURL('https://covacap.com/signin')
                    }}> ANALYTICS</DbSHButton>
                </DbSubHeader>

                {/*<SearchBar/>*/}
                <View style={{backgroundColor: '#dbdada', flex: 1}}>
                    <ScrollView contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 5}}
                                refreshControl={
                                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh}/>
                                }
                    >

                        {this.renderDealBoards()}
                    </ScrollView>
                </View>

            </View>
            // </Provider>
        );
    }
}

const styles = {
    logoStyle: {
        position: 'relative',
        top: 15,
        bottom: 10


    },
    signOutStyle: {
        position: 'relative',
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
