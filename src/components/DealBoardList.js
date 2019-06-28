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

//import {connect} from 'react-redux';


class DealBoardList extends Component {

    constructor() {
        super();
        const array = [
            {
                title: 'DEAL - Keppel Corporation Limited 5Y | 10Y SGD REGS   ',
                dealId: 12345,
                publishDate: '27 Sept',
                status: 'Revised',
                position: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '08:30',
                    tableTitle: 'Initial Price Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['6Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['7Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['8Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                    ]

                },
                    {
                        firstTime: '10:00',
                        tableTitle: 'Revised Guidance',
                        company: 'OCBC',
                        customText: 'Books Over $1bn (Incl. JLM Interest)',
                        tableData: []

                    },
                    {
                        firstTime: '16:00',
                        tableTitle: 'Launched',
                        company: 'OCBC',
                        customText: 'APAC Book Subject - 17:00HKT',
                        tableData: []

                    },
                    {
                        firstTime: '18:30',
                        tableTitle: 'Final Price Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['6Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['7Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['8Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]

                    },

                    {
                        firstTime: '18:30',
                        tableTitle: 'Launched',
                        company: 'OCBC',
                        customText: 'Books Over $2.2bn (Incl JLM Interest)',
                        tableData: []

                    },
                    {
                        firstTime: '20:00',
                        tableTitle: 'Launched',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['6Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['7Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['8Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]

                    },
                    {
                        firstTime: '21:00',
                        tableTitle: 'Priced',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['6Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['7Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['8Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
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
                    firstTime: '06:00',
                    tableTitle: 'Revised Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['6Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['7Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['8Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                    ]

                },
                    {
                        firstTime: '08:00',
                        tableTitle: 'Initial Guidance',
                        company: 'Covalent',
                        customText: 'This is a Custom Text',
                        tableData: []

                    },
                    {
                        firstTime: '17:00',
                        tableTitle: 'Initial Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['13Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['14Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['15Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['16Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    }
                ]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '25 Sept',
                status: 'Revised',
                position: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '09:00',
                    tableTitle: 'Revised Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['6Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['7Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['8Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                    ]


                },
                    {
                        firstTime: '10:00',
                        tableTitle: 'Initial Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['9Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['10Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['11Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['12Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    },
                    {
                        firstTime: '12:00',
                        tableTitle: 'Initial Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['13Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['14Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['15Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['16Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
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
                    firstTime: '06:00',
                    tableTitle: 'Revised Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['6Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['7Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['8Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                    ]

                },
                    {
                        firstTime: '11:00',
                        tableTitle: 'Initial Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['9Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['10Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['11Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['12Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    },
                    {
                        firstTime: '13:00am',
                        tableTitle: 'Initial Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['13Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['14Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['15Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['16Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    }
                ]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '23 Sept',
                status: 'Revised',
                position: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '06:00',
                    tableTitle: 'Revised Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['6Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['7Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['8Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                    ]

                },
                    {
                        firstTime: '12:00',
                        tableTitle: 'Initial Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['9Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['10Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['11Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['12Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    },
                    {
                        firstTime: '14:00',
                        tableTitle: 'Initial Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['13Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['14Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['15Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['16Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
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
                    firstTime: '06:00',
                    tableTitle: 'Revised Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['6Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['7Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['8Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                    ]

                },
                    {
                        firstTime: '08:00',
                        tableTitle: 'Initial Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['9Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['10Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['11Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['12Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    },
                    {
                        firstTime: '15:00',
                        tableTitle: 'Initial Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['13Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['14Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['15Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['16Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    }
                ]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '21 Sept',
                status: 'Revised',
                position: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '06:00',
                    tableTitle: 'Revised Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['6Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['7Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['8Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                    ]

                },
                    {
                        firstTime: '08:00',
                        tableTitle: 'Initial Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['9Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['10Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['11Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['12Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    },
                    {
                        firstTime: '14:00',
                        tableTitle: 'Initial Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['13Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['14Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['15Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['16Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
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
                    firstTime: '06:00',
                    tableTitle: 'Revised Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['17Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['18Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['19Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['20Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                    ]

                },
                    {
                        firstTime: '09:00',
                        tableTitle: 'Initial Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['21Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['22Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['23Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['24Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    },
                    {
                        firstTime: '17:00',
                        tableTitle: 'Initial Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['25Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['26Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['27Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['28Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    }
                ]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '19 Sept',
                status: 'Revised',
                position: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '07:00',
                    tableTitle: 'Revised Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['6Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['7Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['8Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                    ]

                },
                    {
                        firstTime: '08:00',
                        tableTitle: 'Initial Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['33Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['34Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['35Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['36Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    },
                    {
                        firstTime: '18:00',
                        tableTitle: 'Initial Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['37Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['38Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['39Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['40Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    }
                ]
            },
            {
                title: 'DEAL - Keppel Corporation Limited',
                dealId: 12345,
                publishDate: '18 Sept',
                status: 'Revised',
                position: 'Sole LeadManager & Bookrunner: OCBC',
                sub_Category: [{
                    firstTime: '06:00',
                    tableTitle: 'Revised Guidance',
                    company: 'OCBC',
                    customText: '',
                    tableData: [
                        ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['6Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['7Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                        ['8Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                    ]

                },
                    {
                        firstTime: '08:00',
                        tableTitle: 'Initial Guidance',
                        company: 'Covalent',
                        customText: '',
                        tableData: [
                            ['9Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['10Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['11Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['12Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    },
                    {
                        firstTime: '19:00',
                        tableTitle: 'Initial Guidance',
                        company: 'OCBC',
                        customText: '',
                        tableData: [
                            ['13Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['14Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['15Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
                            ['16Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
                        ]
                    }
                ]
            }


        ];

        this.state = {

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
        console.log("this is the props" + this.props);
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
    //redux
    // mapStateToProps = state => {
    //
    //     return {libraries: state.libraries};
    // };

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
                        Linking.openURL('https://covacap.com/signin')
                    }}>NEWSFLOW</DbSHButton>
                    <DbSHButton onPress={() => {
                        Linking.openURL('https://covacap.com/signin')
                    }}> Analytics</DbSHButton>
                </DbSubHeader>

                {/*<SearchBar/>*/}
                <View style={{backgroundColor: '#dbdada'}}>
                    <ScrollView contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 5}}>
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
