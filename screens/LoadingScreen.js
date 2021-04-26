import React from 'react';
import {Image, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {colors, Gs} from '../utils/Styles';
import {width} from '../utils/Dim';

const LoadingScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('DrawerNavigation');
    }, 2500);
  }, []);
  return (
    <View
      style={[Gs.container, {justifyContent: 'center', alignItems: 'center'}]}>
      <Image source={require('../assets/logowhite.png')} style={styles.image} />
      <Text
        style={{
          color: colors.white,
          fontFamily: 'Ubuntu-Bold',
          textAlign: 'center',
          fontSize: 30,
          marginTop: 30,
        }}>
        Daniel Klein
      </Text>
      <Text
        style={{
          color: colors.white,
          fontFamily: 'Ubuntu-Medium',
          fontSize: 22,
          textAlign: 'center',
        }}>
        Tunisie
      </Text>
      <ActivityIndicator
        size={60}
        color={colors.white}
        style={{marginTop: 50}}
      />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  image: {
    width: width * 0.4,
    height: width * 0.4,

    alignSelf: 'center',
  },
});
