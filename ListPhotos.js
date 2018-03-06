import React, { Component } from "react";
import { ListView } from 'react-native';
import { Text, Title, Container, ListItem, Header, Content, List, Body, Button, Icon, Spinner } from "native-base";
import ItemPhoto from "./ItemPhoto";

export default class ListPhotos extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        };
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    }
    static navigationOptions = {
        title: 'Usuarios',
    };
    
    
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
        
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const items = this.state.dataSource;

        return(
            <Container>
                <Content>
                    <List dataSource={this.ds.cloneWithRows(items)}
                        renderRow={(item) =>
                            <ItemPhoto item={item} />
                        }
                        renderLeftHiddenRow={item =>
                            <Button full onPress={() => this.props.navigation.navigate('ShowPhoto', { id: item.id })}>
                                <Icon active name="information-circle" />
                            </Button>}
                        renderRightHiddenRow={(item, secId, rowId, rowMap) =>
                            <Button full danger onPress={() => alert(`Eliminar ${item.name}`)}>
                                <Icon active name="trash" />
                            </Button>}
                        leftOpenValue={60}
                        rightOpenValue={-65}
                    >
                    </List>
                </Content>
            </Container>
        )
    }

}
