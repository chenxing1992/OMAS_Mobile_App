import React, {Component} from 'react';
import {
    View,
    Image,
    Alert,
    Text,
    TouchableOpacity,
    Platform, TouchableHighlight, Linking
} from 'react-native';

import {DbFooter, UPARROW, DOWNARROW} from './common';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';


class DealBoardDetails extends Component {
    //const {Deal_Pk, User_Fk, Fis_Issuer_Fk, Content_Firstline, Content_Sec_Line, Dflag, Noofmins, Notice_Time, IDENT} = deal;

    state = {
        layout_Height: 0,

        tableHead: ['Tenor', 'Price', 'Size'],
        // tableData: [
        //     ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
        //     ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
        //     ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)'],
        //     ['5Y', '3mL + 120 - 135 bps Area', '200mm (Area)']
        // ]

        tableData: [],
        latestTime: [],
        latestTableName: []


    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.item.expanded) {
            this.setState(() => {

                return {
                    layout_Height: null,


                }
            });
        } else {
            this.setState(() => {
                return {
                    layout_Height: 0
                }
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.layout_Height !== nextState.layout_Height;

    }

    show_Selected_Category = (item) => {

        // Write your code here which you want to execute on sub category selection.
        Alert.alert(item);

    };


    toggleArrow() {

        if (this.state.layout_Height === 0) {
            return (
                <Image source={DOWNARROW} style={styles.iconStyle}/>
            );
        } else {
            return (
                <Image source={UPARROW} style={styles.iconStyle}/>
            );
        }
    };

    componentWillMount() {

        this.props.item.sub_Category.map(x => (

                // console.log('check: ' + x.tableData)

                this.setState({tableData: x.tableData, latestTime: x.firstTime, latestTableName: x.tableTitle})
            )
        )


    }


    render() {
        // const {logoStyle,signOutStyle} = styles;
        return (

            <View>
                <View style={styles.MainContainer}>
                    {/*Start of header*/}
                    <View style={{borderBottomWidth: 1, borderColor: '#000', marginBottom: 15}}>
                        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction}
                                          style={styles.category_View}>
                            {/*<View style={{ borderBottomWidth:1, borderColor:'#000'}}>*/}

                            <View style={{flexDirection: 'column'}}>
                                <View style={{justifyContent: 'flex-start', flexDirection: 'row', paddingTop: 10}}>
                                    <Text> {this.props.item.publishDate}  </Text>

                                    <Text style={{color: '#25CB25'}}>{this.props.item.status} </Text>
                                </View>
                                <View style={{justifyContent: 'flex-start', flexDirection: 'column'}}>
                                    <Text style={{
                                        flexWrap: 'wrap',
                                        paddingTop: 5,
                                        paddingLeft: 5,
                                        fontWeight: 'bold',
                                        width: 200
                                    }}>{this.props.item.title} </Text>
                                    <Text style={{
                                        flexWrap: 'wrap',
                                        paddingTop: 5,
                                        color: '#A9A9A9'
                                    }}> {this.props.item.position} </Text>


                                </View>
                            </View>

                            {/*<View style={{flex: 1, justifyContent: 'space-between'}}>*/}
                            {/*    <Text style={{flexWrap: 'wrap'}}>{this.props.item.title} </Text>*/}
                            {/*    <Text style={{*/}
                            {/*        flexWrap: 'wrap',*/}
                            {/*        paddingTop: 5,*/}
                            {/*        color: '#A9A9A9'*/}
                            {/*    }}> {this.props.item.position} </Text>*/}
                            {/*    <View style={{paddingTop: 10, alignItems: 'flex-start', flexWrap: 'wrap'}}>*/}


                            {/*        <Text style={{}}> 6:00pm </Text>*/}
                            {/*        /!*<TouchableHighlight*!/*/}
                            {/*        /!*    onPress={() => Linking.openURL('https://tinyurl.com/VCREDITHoldings' )}>*!/*/}
                            {/*        /!*<Text style={{}}>*!/*/}
                            {/*        /!*    Click ME</Text>*!/*/}
                            {/*        /!*</TouchableHighlight>*!/*/}
                            {/*        <Text style={{}}> Size: USD 100mm | Deal Details: https://tinyurl.com/VCREDITHoldings  </Text>*/}


                            {/*    </View>*/}
                            {/*</View>*/}

                            <View style={{paddingTop: 30, flexDirection: 'row'}}>
                                {this.toggleArrow()}
                            </View>


                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row'}}>

                            <Text>
                                {this.state.latestTime}
                            </Text>
                            <Text style={{fontWeight: 'bold', paddingLeft: 10}}>
                                {this.state.latestTableName}
                            </Text>
                        </View>

                        {/*//table*/}
                        <View style={styles.table}>
                            {/*{this.renderTableData()}*/}
                            {console.log('table: ' + this.state.tableData)}
                            {

                                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                                    <Row data={this.state.tableHead} flexArr={[1, 2, 2]} style={styles.tbHead}
                                         textStyle={styles.tbText}/>
                                    <Rows data={this.state.tableData} flexArr={[1, 2, 2]}
                                          textStyle={styles.tbText}/>
                                </Table>

                            }


                        </View>


                    </View>


                    {/*End of Header*/}
                    {/*Start of Section Body*/}
                    <View style={{height: this.state.layout_Height, overflow: 'hidden'}}>

                        {
                            this.props.item.sub_Category.map((item) => (
                                <View style={{flexDirection: 'column'}}>
                                    {


                                        <View style={{flexDirection: 'row'}}>


                                            <Text>
                                                {item.firstTime}
                                            </Text>
                                            <Text style={{fontWeight: 'bold', paddingLeft: 10}}>
                                                {item.tableTitle}
                                            </Text>


                                        </View>

                                    }
                                    {/*//table*/}
                                    <View style={styles.table}>


                                        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                                            <Row data={this.state.tableHead} flexArr={[1, 2, 2]}
                                                 style={styles.tbHead}
                                                 textStyle={styles.tbText}/>
                                            <Rows data={item.tableData} flexArr={[1, 2, 2]}
                                                  textStyle={styles.tbText}/>
                                        </Table>


                                    </View>


                                </View>







                                // this.props.item.sub_Category.map((item, key) => (
                                //
                                //     <TouchableOpacity key={key} style={styles.sub_Category_Text}
                                //                       onPress={this.show_Selected_Category.bind(this, item.title)}>
                                //
                                //         <Text style={{color: '#1E5AFF'}}> {item.firstTime} </Text>
                                //         <Text style={{paddingTop: 10, flexWrap: 'wrap'}}> {item.details} </Text>
                                //
                                //         <View style={{width: '100%', height: 1, backgroundColor: '#000'}}/>
                                //
                                //     </TouchableOpacity>
                                //
                                // ))
                            ))
                        }

                    </View>
                    {/*End of Section body*/}

                </View>
                <DbFooter dealID={this.props.item.dealId}/>
            </View>
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

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 30 : 0,
        backgroundColor: '#F5FCFF',

    },

    iconStyle: {

        width: 30,
        height: 30,
        //justifyContent: 'flex-end',
        //alignItems: 'center',
        tintColor: '#000'

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
        //padding: 10
    },

    category_View: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 10
    },
    table: {
        flex: 1,
        padding: 5,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    tbHead: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    tbText: {
        margin: 6
    }


};

export default DealBoardDetails;
