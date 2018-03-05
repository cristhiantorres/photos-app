import React from 'react';
import { Text, Title, Container, ListItem, Header, Content, List, Spinner, Thumbnail, Body  } from 'native-base';
import ListPhotos from './ListPhotos';

export default class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      isLoading: true,
    };

  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  componentDidMount() {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          isLoading: false,
          dataSource: resJson,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    
    if (this.state.isLoading) {
        return (
        <Container>  
            <Content>
              <Spinner/>
            </Content>
        </Container>
      );
    } 

    return (
      <ListPhotos items={this.state.dataSource} />
    );
  }
}
