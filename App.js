import React from 'react';
import { Text, Title, Container, ListItem, Header, Content, List, Spinner, Thumbnail, Body  } from 'native-base';
import { StackNavigator } from 'react-navigation';
import ListPhotos from './ListPhotos';
import ShowPhoto from './ShowPhoto';
import Expo from 'expo';
const RootStack = StackNavigator(
{
  ListPhotos: {
    screen: ListPhotos,
  },
  ShowPhoto: {
    screen: ShowPhoto,
  }
},
{
  initialRouteName: 'ListPhotos',
});

export default class App extends React.Component {
  state = {
    isReady: false
  }
  
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true })
  }
  
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <RootStack />;
  }
}
