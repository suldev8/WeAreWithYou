import React, { Component } from 'react';
import { Text, ImageBackground } from "react-native";
import { Container, Header, Content, List, ListItem, Thumbnail,  Left, Body, Right, Button, Title, View } from 'native-base';
export default class ListPost extends Component {

  seeUserPosts = () => {
    
    const {content, ownerName, id, createdAt, likes, ownerPhoto} = this.props;
    this.props.navigation.navigate("OnePost",{
      content, ownerName, id, createdAt, likes, ownerPhoto, title: "تعليق"
    });
  }
  render() {
    // console.log(this.props.ownerPhoto)
    const photo = this.props.ownerPhoto
    return (
      
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require(`../assets/Default.png`)} />
              </Left>
              <Body style={{marginHorizontal: 10}}>
                <Text style={{fontSize: 20, fontWeight: "500", marginBottom: 4}}>{this.props.ownerName}</Text>
                <Text note numberOfLines={3}>{this.props.content}  </Text>
              </Body>
              <Right>
              <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                <Button  bordered primary onPress={this.seeUserPosts} style={{marginHorizontal: 6}}>
                  <Text style={{color: "#0960FF", paddingLeft:5, paddingRight: 5}}>شاهد</Text>
                </Button>
                {this.props.isOwner === "YES" ?  <>
                <Button bordered  danger onPress={()=>this.props.deletePost(this.props.id)} style={{marginHorizontal: 6}}>
                  <Text style={{ paddingLeft:5, paddingRight: 5, marginHorizontal: 3}}>حذف </Text>
                </Button>
                <Button  bordered danger onPress={this.props.editPost} style={{marginHorizontal: 6}}>
                  <Text style={{ paddingLeft:5, paddingRight: 5, marginHorizontal: 3}}>تعديل </Text>
                </Button>
                </> : null}
                </View> 
              </Right>
            </ListItem>
          
    );
  }
}