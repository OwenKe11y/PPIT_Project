import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Image, View,Alert } from "react-native";
import flowers from '../data/flowers2';

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View style = {styles.container}>
        
      <Image style={styles.icon} source={item.img}/>
      <View >
      <Text style={styles.eng}>{item.name[0]}</Text>
      <Text style={styles.latin}>{item.name[1]}</Text>
      <Text style={styles.irish}>{item.name[2]}</Text>
      </View>
      </View>
  
    </TouchableOpacity>
  );

  const FlowerView = () => {
  
    const [selectedId, setSelectedId] = useState(null);
  
    const renderItem = ({ item }) => {
      switch(item.colour){
        case "blue":
          var backgroundColor = item.id === selectedId? "#ddddff" : "#eeeeff";
          break;
        case "purple":
          var backgroundColor = item.id === selectedId? "#ffccff" : "#ffddff";
          break;
          case "white":
          var backgroundColor = item.id === selectedId? "#ffffff" : "#f3f3f3";
          break;
          }
      
      
      item.id === selectedId ?  Alert.alert(item.name[0],"Flowers:\n" +item.description[0] +"\nLeaves: \n"+item.description[1]): null;
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)} 
          style={{ backgroundColor }}
        />
      );
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={flowers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      alignItems:'center',
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      marginHorizontal: 16,
    },
    eng:{
      fontSize: 20,
      marginHorizontal: 16,
    },
    latin:{
      fontSize: 20,
      fontStyle: 'italic',
      marginHorizontal: 16,
    },
    irish:{
      fontSize: 20,
      fontWeight: 'bold',
      marginHorizontal: 16,
    },
    icon:{
      width:100,
      height:100,
    },
  });

  export default FlowerView;