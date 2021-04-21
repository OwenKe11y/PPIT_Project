import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Alert } from 'react-native';
import { Audio } from 'expo-av';
import { FloatingAction } from "react-native-floating-action";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { deleteClip, getClips } from '../../firebase/firebaseMethods';
import { TouchableOpacity } from 'react-native-gesture-handler';

const actions = [
  {
    text: "New Recording",
    name: "bt_rec",
    position: 1,
    color: "#ed931c",
    icon: <Ionicons name="mic-circle-outline" color="white" size={26} ></Ionicons>
  },
  {
    text: "Refresh clips",
    name: "bt_ref",
    position: 2,
    color: "#ed931c",
    icon: <Ionicons name="refresh-circle-outline" color="white" size={26} ></Ionicons>
  },
];

export default function SoundHubScreen({ navigation }) {
  const [sound, setSound] = React.useState();
  const [refresh, setRefresh] = React.useState();
  const soundObject = new Audio.Sound();
  // Button for delete
  function deleteClipButton(name) {
    console.log(name)
    Alert.alert(
      "Do you want to delete this clip?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Delete", onPress: () => deleteClip(name) }
      ],
      { cancelable: false }
    );
  }

  // loading clips on app start
  var clips = getClips();

  // Play Clip
  async function playClip(uri) {
    await soundObject.unloadAsync();
    try {
      await soundObject.loadAsync({ uri });
      if (uri == "pause") {
        await soundObject.unloadAsync();
      } else {
        await soundObject.playAsync();
      }
    } catch (error) {
      console.log("error:", error);
    }
  }

  // Play Audio
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/loadClip.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);


  function renderClips() {

    if (clips.length == 0)
      return <TouchableOpacity onPress={() => playSound()}>
        <Text style={{
          textAlign: 'center',
          backgroundColor: '#ed931c',
          borderRadius: 10,
          padding: 7,
        }}>Refresh
        </Text>
      </TouchableOpacity>
    else
      return <View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 210 }}
          data={clips}
          renderItem=
          {({ item }) => <TouchableOpacity style={styles.itemStyle}
            onPress={() => playClip(item.link)} onLongPress={() => deleteClipButton(item.name)}>
            <View style={{ paddingBottom: 10, height: '10%', flex: 1 }}>
              <Text style={{ marginLeft: '25%', fontSize: 25, color: '#fff' }}>
                {item.name}
              </Text>
              <Text style={{ marginLeft: '28%', fontSize: 15, color: '#e6e3e3' }}>
                Description - {item.desc}
              </Text>
              <Text style={{ marginLeft: '28%', fontSize: 15, color: '#e6e3e3' }}>
                By - {item.firstName + " " + item.lastName}
              </Text>
              <Ionicons name={'disc'} size={80} color={'white'} style={{ marginTop: -60 }} />
              <Ionicons name={'play'} size={40} color={'white'} style={{ marginTop: -50, marginLeft: '87%' }} />
            </View>

          </TouchableOpacity>}
          keyExtractor={(item, index) => index.toString()}

        />
      </View>
  }
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground source={require('../../assets/youmusic.png')} style={styles.backgroundImage} />
      </View>

      <View style={styles.itemContainer}>
        {renderClips()}
      </View>

      <FloatingAction
        color='#fff'
        actions={actions}
        floatingIcon={require('../../assets/add.png')}
        onPressItem={name => {
          if (name == "bt_rec") {
            navigation.navigate('Recording')
          }
          if (name == "bt_ref") {

            setRefresh(clips)

          }
          console.log(`selected button: ${name}`);
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#e6e3e3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainer: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 8,
    padding: 7,
    width: '100%',
    height: '110%'
  },

  itemStyle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#ed931c',
    borderRadius: 10,
    margin: 8,
    padding: 7,

  },

  backgroundContainer: {
    height: '50%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  backgroundImage: {
    height: '100%',
    justifyContent: 'center',
    marginBottom: 0,
    padding: 5,
    opacity: 0.9,
    borderRadius: 5,

  },

  titleText: {
    marginBottom: 0
  },

});