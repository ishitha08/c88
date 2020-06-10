import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class MyRecieveBooksScreen extends Component{
    constructor(){
      super()
      this.state = {
        userId  : firebase.auth().currentUser.email,
        requestedBooksList : []
      }
    this.requestRef= null
    }
    getRecievedBookslist = ()=>{
        this.requestRef = db.collection("requested_books")
        .where('user_id','==',this.state.userId)
        .where("book_status","==",'recieved')
        .onSnapshot((snapshot)=>{
            var recievedBooksList = snapshot.docs.map((doc)=>doc.data())
            this.setState({
                recievedBooksList:recievedBooksList
            })
        })
    }
    componentDidMount(){
        this.getRecievedBookslist();
    }
    componentWillUnmount(){
        this.requestRef();
    }
    keyExtractor=(item,index)=>index.toString()
    renderItem = ({item,i})=>{
        console.log(item.book_name);
        return(
            <ListItem
            key={i}
            title = {
                item.book_name
            }
            subitle = {item.bookStatus}
            titleStyle = {{color:'black',fontWeight:'bold'}}
            bottomDivider
            >
            </ListItem>
        )
    }
    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title = "recievedBooks" navigation = {this.props.navigation}></MyHeader>
                <View style = {{flex:1}}>
                    {
                    this.state.recievedBooksList.length === 0
                    ?(
                        <View>
                            <Text style = {{fontSize:20}}>
                                list of all recieved books
                            </Text>
                        </View>
                    )
                    :(
                        <FlatList 
                        keyExtractor = {this.keyExtractor}
                        data = {this.state.recievedBooksList}
                        renderItem= {this.renderItem}
                        ></FlatList>
                    )
                    }
                </View>
            </View>
        )
    }
}