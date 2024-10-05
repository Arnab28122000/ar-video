import { ViroARScene, ViroARSceneNavigator, ViroText, ViroTrackingReason, ViroTrackingStateConstants } from '@reactvision/react-viro';
import { useState } from 'react';
import { Image, StyleSheet, Platform } from 'react-native';

const HelloWorldSceneAR = () => {
    const [text, setText] = useState("Initializing AR...");
  
    function onInitialized(state: any, reason: ViroTrackingReason) {
      console.log("guncelleme", state, reason);
      if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
        setText("Swaraj");
      } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
        // Handle loss of tracking
      }
    }
  
    return (
      <ViroARScene onTrackingUpdated={onInitialized}>
        <ViroText
          text={text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
      </ViroARScene>
    );
  };
  
  
  const AR =  () => {
    return (
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        style={styles.f1}
      />
    );
  };


  const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    f1: { flex: 1 },
    helloWorldTextStyle: {
      fontFamily: "Arial",
      fontSize: 30,
      color: "#ffffff",
      textAlignVertical: "center",
      textAlign: "center",
    },
  });


  export default AR