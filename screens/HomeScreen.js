import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  const openDrawer = () => navigation.openDrawer();
  React.useEffect(() => {
    setTimeout(() => {
      openDrawer();
    }, 2500);
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
