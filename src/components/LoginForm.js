import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import axios from 'axios';
import querystring from 'query-string'

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        token: [],
        loading: false,
        error: ''
    };

    onButtonPress() {
        const {email, password} = this.state;
        if (email === '' || password === '')
            return this.setState({
                error: 'All TextField Required',
                loading: false
            }); //check for empty textfield
        this.setState({error: '', loading: true});

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
                //this.setState({error: 'Fail To Authenticate'});
                this.onLoginFail();
                console.log(err);
            });
    }

    onLoginFail() {
        this.setState({
            error: 'Fail To Authenticate',
            loading: false
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: 'Login Success'
        });
    }


    renderButton() {
        const {loading} = this.state;

        if (loading) {


            return <Spinner size="small"/>;


        }
        return (

            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );


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
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        placeholder="Password*"
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}

                    />

                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {/*{this.state.token.accesstoken}*/}
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );

    }

}

const
    styles = {
        errorTextStyle: {
            fontSize: 20,
            alignSelf: 'center',
            color: 'red',
            marginTop: 10,
            marginBottom: 10
        }
    };
export default LoginForm;
