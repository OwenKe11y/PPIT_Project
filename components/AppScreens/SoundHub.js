import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Audio } from 'expo-av';
import { FloatingAction } from "react-native-floating-action";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { loadClips, upload , getClips} from '../../firebase/firebaseMethods';

const actions = [
  {
    text: "Record",
    name: "bt_rec",
    position: 1,
    color: "#ed931c",
    icon: <Ionicons name="mic-circle-outline" color="white" size={26} ></Ionicons>
  },
  {
    text: "Stop",
    name: "bt_stop",
    position: 2,
    color: "#ed931c",
    visible: false,
    icon: <Ionicons name="stop-circle-outline" color="white" size={26}></Ionicons>
  },
  {
    text: "Play",
    name: "bt_sound",
    position: 3,
    color: "#ed931c",
    icon: <Ionicons name="volume-high-outline" color="white" size={26}></Ionicons>
  },
  {
    text: "Load Clips",
    name: "bt_loadClips",
    position: 4,
    color: "#ed931c",
    icon: <Ionicons name="volume-high-outline" color="white" size={26}></Ionicons>
  }
];

export default function SoundHubScreen({ navigation }) {
  const [recording, setRecording] = React.useState();
  const [sound, setSound] = React.useState();

  // loading clips on app start
  var clips = getClips();

  // start recording
  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

 // Start recording
 async function startRecording() {
  try {
    console.log('Requesting permissions..');
    await Audio.requestPermissionsAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });
    console.log('Starting recording..');
    const recording = new Audio.Recording();
    await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
    await recording.startAsync();
    setRecording(recording);
    console.log('Recording started');
  } catch (err) {
    console.error('Failed to start recording', err);
  }
}

// Stop recording
async function stopRecording() {
  console.log('Stopping recording..');
  setRecording(undefined);
  await recording.stopAndUnloadAsync();

  const uri = recording.getURI();
  console.log('Recording stopped and stored at', uri);
  upload(uri, "Name Test");
  //}
}

async function playClip(uri) {
  const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync({ uri });
      await soundObject.playAsync();
    } catch (error) {
      console.log("error:", error);
    }
}


// Play Audio
async function playSound() {
  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync(
    require('../../assets/sample3.mp3')
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
    if (!clips.length)
      return <Text style={{
        marginLeft: '25%',
        marginTop: '40%',
        color: 'rgba(230, 227, 227, 0.75)',
        fontSize: 30,
      }}>Nothing Here</Text>
    else
      return <View>
        <FlatList
          data={clips}
          renderItem=
          {({ item }) => <Text style={styles.itemStyle}>{item.name}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
  }
  return (
    <View style={styles.container}>
      <View style={styles.image}>
      <View>
        <Text style={styles.titleText}>Your Tracks</Text>
      </View>
        
        
      </View>
      
      
      <View style={styles.itemContainer}>
        {renderClips()}
      </View>

      <FloatingAction
        color='#ed931c'
        actions={actions}
        onPressItem={name => {
          if (name == "bt_rec") {
            startRecording();
          }
          if (name == "bt_stop") {
            stopRecording();
          }
          if (name == "bt_sound") {
            playClip(clips[1].link);
          }
          if (name == "bt_loadClips") {
            getClips();
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
    width:'100%',
    height:'100%'
  },

  itemStyle:{
    textAlign: 'center',
    color:'white',
    fontWeight: 'bold',
    backgroundColor: '#ed931c',
    borderRadius: 10,
    margin: 8,
    padding: 7,
   
  },

  image: {
    alignItems: 'center',
    width: '100%',
    height: '40%',
    marginTop: '70%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 7
  },

  titleText: {
    padding: 15,
    marginRight: '55%',
    fontFamily: 'Roboto',
    fontSize: 25,
    color: '#ed931c',
    textShadowColor: 'rgba(255, 255, 255, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

});