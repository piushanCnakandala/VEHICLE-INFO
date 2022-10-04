import { View, Text,StyleSheet,FlatList,TouchableOpacity } from 'react-native'
import {React,useEffect,useState}  from  'react'

export default function Home() {

    const [posts,setPosts] =useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    })

  return (
    <View style={styles.container}>
       <FlatList
                data={posts}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{borderWidth:1,backgroundColor:indigo, marginBottom:'5%', padding:5}} onPress={()=>{console.log("hello");}}>
                        <Text style={{marginBottom:10,fontWeight:'bold'}} >{item.title}</Text>
                        <Text style={{marginBottom:10}} >{item.body}</Text>
                    </TouchableOpacity>
                }
            />
      
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20
    }

})