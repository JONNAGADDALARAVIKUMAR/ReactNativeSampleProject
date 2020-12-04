import React, { Component } from 'react';
import {
View,
} from 'react-native';
import Heading from './Heading';

export default class AlbumScreen extends Component {
    render() {
        return (
            <View style = {{backgroundColor : 'blue', height: '40%', width: '100%'}}>
                <Heading message = {'Albums'}/>
            </View>
        )
    }
}