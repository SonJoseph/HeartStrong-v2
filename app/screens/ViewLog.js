import React, { Component } from 'react';
import { 
  TouchableOpacity, 
  Dimensions, 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  AsyncStorage
} from 'react-native';

class ViewLog extends Component{
  /* Let's attempt to first create a calendar 
  which displays data ONLY for the current month */
  constructor(props){
    super(props);
    this.today = new Date();
    this.calendarHeaders = [
      {"key" : "Sun"},
      {"key" : "Mon"},
      {"key" : "Tu"},
      {"key" : "Wed"},
      {"key" : "Th"},
      {"key" : "F"},
      {"key" : "Sat"},
    ];
    this.state = {
      cal: [],
      username: "",
      datePicked: '',
    };
  }

  getUser = async() => {
    const val = await AsyncStorage.getItem("userToken");
    this.setState({username : val});
  }

  async componentDidMount() {
    await this.getUser(); /* must re-retrieve username because new set of navigation */
    this.createCalendar(this.today.getMonth()+1, this.today.getFullYear());
  }

  createCalendar(month, year) {
    let url = serverRoot + '/app/apis/getWeights.php?user=' + this.state.username + '&year=' + year + '&month=' + month
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept' : 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      let cal = responseJson.items;
      console.log(cal);
      const offset = new Date(year, month - 1, 1).getDay();
      for(let i = 0; i < offset; i++){
        cal.unshift( // dummy records, potential alternative to using these?
          {
          "dateInfo":{
            "date":"",
            "year":"",
            "month":"",
            "day":"", 
          },
          "weight":"",
          "unit":""
          }
        )
      }
      this.setState({cal : cal});
    })
  }

  getCurrentMonthName() {
    let months = 
    ["January", "February", "March", "April", "May", 
    "June", "July", "August", "September", "October",
    "November", "December"];
    return(months[this.today.getMonth()]);
  }
  
  clickDay(item){
    if(item.dateInfo.date != ""){
      this.props.navigation.navigate('Insert',{
        username : this.state.username,
        item: item
      });
    }else{
      alert("This is a placeholder");
    }
  }

  render () { 
    /* Try to make this look like an actual calander
    month day week at a time? Highlight problematic date */ 
    return (
      <View /*style={{ flex: 1 }}*/ >
        <Text> {this.getCurrentMonthName()} </Text>
        <FlatList
          data={this.calendarHeaders}
          renderItem={({item}) => (
            <View style={styles.dayContainer}>
              <Text>{item.key}</Text>
            </View>
          )}
          numColumns={7}
          keyExtractor = {item => item.key }
        />
        <FlatList
          data={this.state.cal}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this.clickDay(item)}>
              <View style={styles.dayContainer}>
                <Text style={styles.dayInfo}>{item.dateInfo.day}</Text>
                <Text>{item.weight} {item.unit} </Text>
              </View>
            </TouchableOpacity>
          )}
          numColumns={7}
          keyExtractor = {item => item.dateInfo.day}
        />
      </View>
    );
  }

}

const dayWidth = Dimensions.get('window').width/7;
const styles = StyleSheet.create({
  dayContainer: {
    width: dayWidth,
    height: dayWidth,
  },
  dayInfo: {
    flex: 1,
    margin: 3,
  }
});

export default ViewLog;