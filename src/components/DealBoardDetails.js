import React, {Component} from 'react';
import {
    View,
    Image,
    Alert,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';

import {DbFooter} from './common';

class DealBoardDetails extends Component {
    //const {Deal_Pk, User_Fk, Fis_Issuer_Fk, Content_Firstline, Content_Sec_Line, Dflag, Noofmins, Notice_Time, IDENT} = deal;

    state = {
        layout_Height: 0
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.item.expanded) {
            this.setState(() => {
                return {
                    layout_Height: null
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


    render() {
        // const {logoStyle,signOutStyle} = styles;
        return (
            <View>
            <View style={styles.MainContainer}>
                {/*Start of header*/}
                <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.category_View}>

                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                        <Text style={{flexWrap: 'wrap'}}>{this.props.item.title} </Text>
                        <Text style={{
                            flexWrap: 'wrap',
                            paddingTop: 5,
                            color: '#A9A9A9'
                        }}> {this.props.item.subTitle} </Text>
                        <View style={{paddingTop: 10, alignItems: 'flex-start', flexWrap: 'wrap'}}>


                            <Text style={{}}> 6:00pm </Text>
                            <Text style={{}}> Size: USD 100mm | Deal Details:
                                https://tinyurl.com/VCREDITHoldings </Text>


                        </View>
                    </View>
                    <View style={{}}>
                        <Text style={{}}> {this.props.item.publishDate}  </Text>

                        <Text style={{paddingLeft: 5, color: '#25CB25'}}>{this.props.item.status} </Text>
                    </View>


                    <Image
                        source={{uri: 'https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon.png'}}
                        style={styles.iconStyle}/>


                </TouchableOpacity>
                {/*End of Header*/}
                {/*Start of Section Body*/}
                <View style={{height: this.state.layout_Height, overflow: 'hidden'}}>

                    {
                        this.props.item.sub_Category.map((item, key) => (

                            <TouchableOpacity key={key} style={styles.sub_Category_Text}
                                              onPress={this.show_Selected_Category.bind(this, item.title)}>

                                <Text style={{color: '1E5AFF'}}> {item.firstTime} </Text>
                                <Text style={{paddingTop: 10, flexWrap: 'wrap'}}> {item.details} </Text>

                                <View style={{width: '100%', height: 1, backgroundColor: '#000'}}/>

                            </TouchableOpacity>

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

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 30 : 0,
        backgroundColor: '#F5FCFF',

    },

    iconStyle: {
        paddingTop: 5,
        width: 30,
        height: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',
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
        padding: 10
    },

    category_View: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

};

export default DealBoardDetails;
