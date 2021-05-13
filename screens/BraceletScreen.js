import React from 'react';
import {
  ScrollView,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {width} from '../utils/Dim';
import {colors} from '../utils/Styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
const BraceletScreen = ({navigation, route}) => {
  const bracelet = route.params;
  return (
    <ScrollView style={styles.container}>
      <Animatable.Image
        useNativeDriver
        animation="zoomIn"
        duration={2000}
        iterationCount={1}
        delay={0}
        source={{uri: bracelet.image}}
        style={styles.image}
      />
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Entypo name="arrow-with-circle-left" size={30} color={colors.white} />
      </Pressable>
      <View style={styles.row}>
        <TouchableOpacity style={styles.likeContainer}>
          <Ionicons name="heart-outline" size={24} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeContainer}>
          <Ionicons name="share-social" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BraceletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: width,
    height: width,
    alignSelf: 'center',
    marginTop: -width * 0.1,
  },
  title: {
    backgroundColor: colors.darkBrown,
    color: colors.white,
    fontFamily: 'Ubuntu-Light',
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
    width,
    paddingVertical: 20,
    marginBottom: 0,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    top: 20,
  },
  likeContainer: {
    backgroundColor: colors.darkBrown,
    padding: 8,
    borderRadius: 500,
    marginLeft: 5,
  },
  back: {
    backgroundColor: colors.darkBrown,
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 500,
    marginLeft: 10,
    position: 'absolute',
    top: 20,
  },
});
