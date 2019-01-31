/*
https://github.com/wix/react-native-calendars
*/

import React, { Component } from 'react';
import { StyleSheet, StatusBar, KeyboardAvoidingView, View, Text } from 'react-native';
import { Container } from '../components/Container';
import { createBottomTabNavigator } from 'react-navigation';
import { Calendar, CalendarList, Agenda} from 'react-native-calendars';

class Tracking extends Component {

    constructor(props) {
        super(props);
        /*
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
        */
        const { navigation } = this.props; // ES2015 destructuring assignment
        this.username = navigation.getParam('username','some default value');
        this.state = {
            items: {}
        };
    }

    render(){

        return (
                <Agenda
                    items={this.state.items}
                    loadItemsForMonth={this.loadItems.bind(this)}
                    selected={Date()}
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        monthTextColor: 'blue',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textMonthFontWeight: 'bold',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16,
                        agendaTodayColor: 'blue',
                        agendaKnobColor: 'blue'
                    }}
                />
        )
    }
    
    getWeights = () => {
        /*
        this.state = {
            items : {
                "2018-11-29": [
                    {
                        "height": 69,
                        "name": "test",
                    },
                ]
            }
        }
        */
        return fetch(serverRoot + '/app/apis/getWeights.php?user=' + this.username, {
            method: 'GET',
            headers: {
              'Accept' : 'application/json',
            },
          })
          .then((response) => response.json())
          .then((responseJson) => {
            this.state.items = responseJson.items;
        })
    }

    loadItems(day) {
        setTimeout(() => {
            this.getWeights();
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
            this.setState({
                items: newItems
            });
        }, 1000);
    }
    
    renderItem(item) {
        return (
          <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
        );
    }
    
    renderEmptyDate() {
        return (
          <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }
    
    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }
    
    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
}
    
const styles = StyleSheet.create({

item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
    },
    emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
    }
});

export default Tracking;