import React, { Component } from 'react';
import { Text, Container, Content, Header, Body, Title, Spinner, Card, CardItem, Left, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import { StackNavigator } from 'react-navigation';

export default class ShowPhoto extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    static navigationOptions = ({ navigation }) =>{
        const { params } = navigation.state;
        
        return {
            title: params ? params.name : 'Null title',
        }
    }
    componentDidMount() {
        const { params } = this.props.navigation.state;
        const id = params ? params.id : null;
        
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    isLoading: false,
                    dataSource: json,
                });
                // console.log(json);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render(){
        if (this.state.isLoading) {
            return (
                <Container>
                    <Content>
                        <Spinner />
                    </Content>
                </Container>
            );
        }

        const item = this.state.dataSource;

        return(
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text> 
                                    <Icon name='user' /> {item.username}
                                </Text>
                                <Text>
                                    <Icon name="email"/> {item.email}
                                </Text>
                                <Text>
                                    <Icon name="phone" /> {item.phone}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }

}