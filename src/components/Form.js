import React, { Component } from 'react';
import {
View,
TextInput,
} from 'react-native';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    handleFirstName = async (firstName) => {
        //console.log('firstName');
        await this.setState({
            firstName: firstName
        })
        console.log('Updated First Name', this.state.firstName);
    }

    handleLastName = async (lastName) => {
        await this.setState({
            lastName: lastName
        })
        console.log('Updated Last Name', this.state.lastName);
    }

    render() {
        return (
            <View style = {{height : '40%', width: '100%', backgroundColor: 'white'}}>
                <TextInput placeholder = {'Enter First Name'} 
                onChangeText = {this.handleFirstName}
                value = {this.state.firstName}/>

                <TextInput placeholder = {'Enter Last Name'}
                onChangeText = {this.handleLastName}
                value = {this.state.lastName}/>
            </View>
        )
    }
}