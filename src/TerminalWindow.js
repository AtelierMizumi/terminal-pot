import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { colors } from "./colors"
import { BlurView } from 'react-native-blur';
import { TouchableOpacity } from 'react-native';

export default function TerminalWindow() {
  return (
    <BlurView style={styles.container} blurType="dark" blurAmount={20} blurRadius={10}>
      <View style={styles.asciiArtContainer}>
        <Text style={styles.text}>
          {`
            _____
          //  ||\\ \\
        //____||_\\ \\
        |  _  _  |  |
        | | || | |  |
        | | || | |  |
        | | || | |  |
        |_|_||_|_|  |
          ( _ _ )  /
         /     \\
        |       |
        |       |
          `}
        </Text>
      </View>
      <View style={styles.neofetchContainer}>
        <Text style={styles.text}>$ neofetch</Text>
        <Text style={styles.text}>OS: macOS Big Sur</Text>
        <Text style={styles.text}>Kernel: 5.10.16.3-microsoft-standard-WSL2</Text>
        <Text style={styles.text}>Uptime: 1 day, 2 hours, 30 minutes</Text>
        <Text style={styles.text}>Shell: zsh 5.8</Text>
        <Text style={styles.text}>Terminal: iTerm2</Text>
        <Text style={styles.text}>CPU: Intel Core i7-9750H (12) @ 2.60GHz</Text>
        <Text style={styles.text}>Memory: 16GB</Text>
        <Text style={styles.text}>Disk: 1TB NVMe SSD</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  asciiArtContainer: {
    marginRight: 10,
  },
  neofetchContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.tertiary,
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: colors.quaternary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: colors.secondary,
    fontSize: 16,
  },
});