import React, {Component} from "react"
import { Text, ListItem, Thumbnail, Body } from "native-base"
export default class ItemPhoto extends Component{
    
    render(){
        const item = this.props.item

        return(
            <ListItem>
                <Body>
                    <Text>{item.name}</Text>
                </Body>
            </ListItem>
        )
    }

}