import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

class List extends React.Component{
    constructor(){
        super();
        this.state = {
          users: [],
          refreshing: false
        }
    }


       renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: 'row', padding: 20, borderBottomWidth: 1, borderBottomColor: '#000' }}>

      <Image
        source={{ uri: `https://robohash.org/${item.id}?set=set1` }}
        style={{ width: 50, height: 50 }}
      />
      <View>
        <Text>Name: {item.name}</Text>
        <Text>Username: {item.username}</Text>
      </View>
    </View>
  )

  onRefresh = () => {
    this.getDataApi();
  }

  componentDidMount() {
    this.getDataApi();
  }

  getDataApi = () => {
    this.setState({ refreshing: true })
    //ada 2 cara trng boleh fetch data
    // cara Pertama 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ users: json, refreshing: false }))

    //Cara Kedua (pake async await)
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // this.setState({ users: json, refreshing: false })
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.users}
          keyExtractor={item => item.id.toString()}
          renderItem={this.renderItem}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }
}

export default List;
