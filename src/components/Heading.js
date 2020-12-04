import React, {Component} from 'react';

import {
    View,
    Text,
} from 'react-native'

export default class Heading extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Text style = {{fontSize : 20}}>
                    {this.props.message}
                </Text>
            </View>
        )
    }
}