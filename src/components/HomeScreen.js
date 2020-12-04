import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import Heading from './Heading';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style = {{height: '40%', width: '100%', backgroundColor: 'pink'}}>
                <Heading message = {'This is the Heading for Home Screen'}/>
            </View>
        )
    }
}