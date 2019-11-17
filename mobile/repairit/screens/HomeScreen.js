import React from 'react'
import { StyleSheet, Button, View, AsyncStorage } from 'react-native'
import Graphics from '../components/Graphics'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!'
  }

  render () {
    return (
      <View style={styles.container}>
        <Graphics />
        {/* <Button title='Show me more of the app' onPress={this._showMoreApp} />
        <Button title='Actually, sign me out :)' onPress={this._signOutAsync} /> */}
      </View>
    )
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other')
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  }
}

// More code like OtherScreen omitted for brevity

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff'
  }
})
