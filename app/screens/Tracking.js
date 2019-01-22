/*
    https://github.com/wix/react-native-calendars

    To-do: 
    back to app for video messaging
    journaling
*/

import React, { Component } from 'react';
import { StyleSheet, StatusBar, KeyboardAvoidingView, View, Text } from 'react-native';
import { Container } from '../components/Container';
import { createBottomTabNavigator } from 'react-navigation';
import { Calendar, CalendarList, Agenda} from 'react-native-calendars';

class Tracking extends Component {

    // const { navigation } = this.props; // ES2015 destructuring assignment
    // const username = navigation.getParam('username','some default value') 

    constructor(props) {
        super(props);
        /*
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
        */
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
    

    /* Let's move to cloudapps first
    getWeights = () => {
        return fetch('http://sonjoseph.website/heartstrong_backend/getWeights.php?=' + username, {
            method: 'GET',
            headers: {
              'Accept' : 'application/json',
            },
          })
          .then((response) => response.json())
          .then((responseJson) => {
            if(responseJson.data == 1){
              this.props.navigation.navigate('Home');
            }else{
              alert(responseJson.data);
            }
        })
    }
    */
    

    loadItems(day) {
        setTimeout(() => {
            /*
            "2018-11-29": Array [
                Object {
                "height": 69,
                "name": "test",
                },
            ]
            */
        
            this.state.items["2018-11-29"] = [];
            this.state.items["2018-11-29"].push({
                name: 'test',
                height: Math.max(50, Math.floor(Math.random() * 150))
            });
            console.log(this.state.items);
            
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
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