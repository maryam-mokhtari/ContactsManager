/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ContactsAndroid from './AndroidContacts'
// setState({userContacts : ['a','b','c','d']})
class ContactsManager extends Component {
  constructor() {
    super()
    this.state = {
      userContacts: ['a', 'b', 'c']
    }
  }
  componentDidMount() {

  }
  render() {
    ContactsAndroid.getAll((err, contacts) => {
      if(err && err.type === 'permissionDenied'){
        // x.x
      } else {
        console.log('Contacts::', contacts)
        this.setState({userContacts : contacts})
      }
    })
    // ContactsAndroid.show('Awesome', ContactsAndroid.SHORT)
    const userContacts0 = this.state.userContacts
    // console.log('userContacts::', userContacts);
    userContacts = userContacts0.filter((item) => {
      return (!!item.phoneNumbers && item.phoneNumbers.length > 0)
    })
    if (!userContacts || userContacts.length == 0) {
      return <View><Text>No Contact</Text></View>
    } else {

      return (<View>
        {userContacts.map((item) => {
          return (
          <View>
            <Text style={{color: 'blue'}}>{item.givenName} {item.familyName}</Text>
            <Text style={{color: 'red'}}>{!!item.emailAddresses && item.emailAddresses.length > 0 && item.emailAddresses[0].email}</Text>
            <Text style={{color: 'green'}}>{!!item.phoneNumbers && item.phoneNumbers.length > 0 && item.phoneNumbers[0].number}</Text>

          </View>
        )
        })}
      </View>)
    }
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       To get started, edit index.android.js
    //     </Text>
    //     <Text style={styles.instructions}>
    //       Shake or press menu button for dev menu
    //     </Text>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ContactsManager', () => ContactsManager);
