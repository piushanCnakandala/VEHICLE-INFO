import { View, Text,StyleSheet,FlatList,TouchableOpacity } from 'react-native'
import {React,useEffect,useState}  from  'react'
import { NativeBaseProvider, Center, Fab } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home() {

    const [posts,setPosts] =useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    })

  return (
    <NativeBaseProvider>
   <Fab color="red" renderInPortal={false} shadow={2} size="sm" icon={<Ionicons color="white" name={"add-sharp"} size={18}/>} />
   {/* <Fab renderInPortal={false} shadow={2} size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} /> */}
    <Center>
    <View style={styles.container}>
       <FlatList
                data={posts}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{borderWidth:3, borderRadius:10, marginBottom:5,borderColor:'#7d5fff', padding:5}} onPress={()=>{console.log("hello");}}>
                        <Text style={{marginBottom:10, color:'red', fontWeight:'bold'}} >{item.title}</Text>
                        <Text style={{marginBottom:10}} >{item.body}</Text>
                    </TouchableOpacity>
                }
            />
      
    </View>
    </Center>
   
    </NativeBaseProvider>
  )
}
const styles=StyleSheet.create({
    container:{
        padding:20
    }

})