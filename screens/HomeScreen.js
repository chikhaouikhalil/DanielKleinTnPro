import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {width} from '../utils/Dim';
import Header from '../components/Header';
import {colors} from '../utils/Styles';
const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={colors.darkBrown} />
      <Header navigation={navigation} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brown,
    flex: 1,
  },
});
