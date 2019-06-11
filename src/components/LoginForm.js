import React, {Component} from 'react';
import {Text, View, Linking, TouchableHighlight} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import axios from 'axios';
import querystring from 'query-string';


class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        token: [],
        loading: false,
        emailValidation: '',
        pwdValidation: '',
        loginValidation: null
    };
    //validate email
    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    //validate textfield entry and authenticate with server to retrieve token
    onButtonPress() {
        const {email, password} = this.state;
        this.setState({emailValidation: '', pwdValidation: '', loginValidation: null, loading: true});
        //validate empty textfields
        if (email === '' && password === '') {
            return this.setState({
                emailValidation: 'Enter your email address.',
                pwdValidation: 'Enter your password.',
                loading: false
            }); //check for empty textfield
        } else if (email === '') {
            return this.setState({
                emailValidation: 'Enter your email address.',
                loading: false
            }); //check for empty email text field
        } else if (password === '') {
            return this.setState({
                pwdValidation: 'Enter your password.',
                loading: false
            }); //check for empty password text field
        }
        //validate email
        if (!this.validateEmail(this.state.email)) {
            // not a valid email
            return this.setState({
                emailValidation: 'Please enter a valid email address.',
                loading: false
            }); //check for empty email text field
        } else if (!this.validateEmail(this.state.email) && password === '') {
            return this.setState({
                emailValidation: 'Please enter a valid email address.',
                pwdValidation: 'Enter your password.',
                loading: false
            }); //check for invalid email and empty textfield
        }


        this.setState({emailValidation: '', pwdValidation: '', loginValidation: null, loading: true});

        /** Execute authentication */
        axios.post(
            'https://stage.covacap.com/apikey',
            querystring.stringify({
                username: email,
                password: password

            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then((res) => {
                if (res.data && res.data) {
                    this.setState({token: res.data});
                    this.onLoginSuccess();
                    // console.log(res.data)
                }
            })
            .catch((err) => {
                //this.setState({emailValidation: 'Fail To Authenticate'});
                this.onLoginFail();
                console.log(err);
            });
    }

    //return loginValidation message upon failed login
    onLoginFail() {

        this.setState({
            loginValidation: false,

            loading: false
        });
    }

    //return loginValidation message upon success login
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            loginValidation: true
        });
    }


    renderButton() {
        const {loading} = this.state;

        if (loading) {


            return <Spinner size="small"/>;


        }
        return (

            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );


    }

    //Return error message when user fail to sign in else send props to parent
    renderValidation() {
        const {loginValidation} = this.state;
        if (loginValidation === false) {

            return (

                <View>
                    <Text style={{color: 'red', fontSize: 11}}>
                        You have typed an invalid Email or Password. In case you haven't signed up yet please
                        Sign-up</Text>
                    <Text style={{color: 'blue', textDecorationLine: 'underline', fontSize: 11}}
                          onPress={() => Linking.openURL('https://covacap.com/reset-password')}>
                        here.
                    </Text>
                </View>

            );

        } else if (loginValidation === true) {

            return (

                this.props.callBackFromParent(this.state.token.accesstoken)
            )
        }


    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        secureTextEntry={false}
                        placeholder="Email Address*"
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
                </CardSection>
                <Text style={styles.errTbStyle}>
                    {/*{this.state.token.accesstoken}*/}
                    {this.state.emailValidation}
                </Text>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        placeholder="Password*"
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}

                    />

                </CardSection>
                <Text style={styles.errTbStyle}>
                    {/*{this.state.token.accesstoken}*/}
                    {this.state.pwdValidation}
                </Text>

                <View style={styles.linkingSection}>
                    <Text style={styles.linkingStyle}
                          onPress={() => Linking.openURL('https://covacap.com/reset-password')}>
                        Forgot Password?
                    </Text>
                </View>

                <View style={styles.errLoginStyle}>
                    {/*{this.state.token.accesstoken}*/}
                    {/*{ this.state.loginValidation}*/}
                    {this.renderValidation()}


                </View>
                <View style={styles.buttonCardSection}>
                    {this.renderButton()}
                </View>
            </Card>
        );

    }

}

const
    styles = {
        errTbStyle: {
            fontSize: 11,
            color: 'red',
            marginTop: 10,
            marginBottom: 10
        },
        errLoginStyle: {
            fontSize: 11,
            color: 'red',
            marginTop: 10,
            marginBottom: 10
        },
        buttonCardSection: {

            padding: 5,  //space at each side of the container
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            position: 'relative',
            alignSelf: 'center',


        },
        linkingSection: {

            padding: 5,  //space at each side of the container
            backgroundColor: '#fff',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            position: 'relative',


        },

        linkingStyle: {
            color: '#a2a2a2',
            fontFamily: 'Helvetica',
            //textDecorationLine: 'underline'
        }
    };
export default LoginForm;
