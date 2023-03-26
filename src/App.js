import React from 'react';
import { View, ImageBackground } from 'react-native';
import TerminalWindow from './TerminalWindow';
import { styles } from './styles';

const backgroundImage = require('./background.jpg');

export default function App() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TerminalWindow />
      </View>
    </ImageBackground>
  );
}
