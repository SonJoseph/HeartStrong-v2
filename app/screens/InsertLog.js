import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Input, Button } from 'react-native-elements';


export default class InsertLog extends Component{
    constructor(props){
        super(props)
        const navigationParam = this.props.navigation;
        const item = navigationParam.getParam('item' ,'null');
        this.state = {
            //isDateTimePickerVisible: false,
            username : navigationParam.getParam('username','null'),
            dateInfo : item.dateInfo,
            weight : item.weight,
            unit: item.unit
        };
    }

    render(){
        return(
            <View>
                <Text>
                    {this.state.dateInfo.date}
                </Text>
                <Input
                    placeholder={this.state.weight}
                />
                <Input
                    placeholder={this.state.unit}
                /> 
                <Button
                    title="submit"
                    type="outline"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}