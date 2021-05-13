import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, Gs} from '../utils/Styles';
import {width} from '../utils/Dim';
import * as Animatable from 'react-native-animatable';

const LoadingScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('DrawerNavigation');
    }, 3000);
  }, []);
  return (
    <View
      style={[
        Gs.darkContainer,
        {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.brown,
        },
      ]}>
      <Animatable.Image
        duration={1000}
        animation="pulse"
        useNativeDriver
        iterationCount="infinite"
        source={require('../assets/logowhite.png')}
        style={styles.image}
      />
      <Text style={styles.name}>Daniel Klein</Text>
      <Text style={styles.text}>fashion for everyone</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  image: {
    width: width * 0.5,
    height: width * 0.5,
    alignSelf: 'center',
  },
  name: {
    color: colors.white,
    fontFamily: 'Ubuntu-Bold',
    textAlign: 'center',
    fontSize: width / 10,
    marginTop: 30,
  },
  text: {
    color: colors.white,
    fontFamily: 'Ubuntu-BoldItalic',
    fontSize: width / 20,
    textAlign: 'center',
  },
});
