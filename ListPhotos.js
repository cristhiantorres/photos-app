import React, { Component } from "react";
import { ListView } from 'react-native';
import { Text, Title, Container, ListItem, Header, Content, List, Spinner, Thumbnail, Body, Button, Icon } from "native-base";
import ItemPhoto from "./ItemPhoto";

export default class ListPhotos extends Component{

    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    }
    render(){
        
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const items = this.props.items

        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Photos</Title>
                    </Body>
                </Header>
                <Content>
                    <List dataSource={this.ds.cloneWithRows(items)}
                        renderRow={(item) =>
                            <ItemPhoto item={item} />
                        }
                        renderLeftHiddenRow={item =>
                            <Button full onPress={() => alert(`Ver ${item.name}`)}>
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
