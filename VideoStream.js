import React, { useRef, useState } from "react";
import { Button, Image, View, Text} from "react-native";
import { WebView } from "react-native-webview";

const VideoStream = () => {
  const webViewRef = useRef(null);
  const [showLastFrame, setShowLastFrame] = useState(false);

  const stopStream = () => {
    // Stop the video stream by setting showLastFrame to true
    setShowLastFrame(true);
  };

  const reloadStream = () => {
    // Reload the video stream by setting showLastFrame to false
    setShowLastFrame(false);
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {showLastFrame ? (
        <Image
          source={{ uri: "http://172.16.0.136:5000/last_frame" }}
          style={{ flex: 1 }}
          resizeMode="contain"
        />
      ) : (
        <WebView
          ref={webViewRef}
          source={{ uri: "http://172.16.0.136:5000/video_feed" }}
          style={{ flex: 1 }}
        />
      )}
      <View
        style={{ flexDirection: "row", padding: 20, justifyContent: "center" }}
      >
        <Button title="Stop Stream" onPress={stopStream} />
        <View style={{ marginHorizontal: 10 }} /><Text>{"               "}</Text>
        {/* Adjust the value as needed for spacing */}
        <Button title="Reload Stream" onPress={reloadStream} />
      </View>
    </View>
  );
};

export default VideoStream;
