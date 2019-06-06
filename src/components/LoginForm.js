import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input} from './common';
import axios from 'axios';
import querystring from 'query-string'

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        token: []
    };

    onButtonPress() {

        axios.post(
            'https://stage.covacap.com/apikey',
            querystring.stringify({
                username: this.state.email,
                password: this.state.password

            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then((res) => {
                if (res.data && res.data) {
                   this.setState({token: res.data})
                    // console.log(res.data)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        secureTextEntry={false}
                        placeholder="user@covacap.com"
                        label="Email:"
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        placeholder="password"
                        label="Password:"
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}

                    />

                </CardSection>
                <Text>
                    {this.state.token.accesstoken}
                </Text>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );

    }
}

export default LoginForm;
