import React from 'react';
import {Pressable, StyleSheet, Text, Image, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../../utils/Styles';
const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => navigation.openDrawer()}>
        <Entypo name="menu" size={35} color={colors.white} />
      </Pressable>
      <View style={styles.row}>
        <Image
          source={require('../../assets/logowhite.png')}
          style={styles.logo}
        />
        <View>
          <Text style={styles.title}>Daniel Klein</Text>
          <Text style={styles.subTitle}>fashion for everyone</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBrown,
    paddingVertical: 15,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 17,
    color: colors.white,
    marginRight: 10,
  },
  subTitle: {
    fontFamily: 'Ubuntu-Light',
    fontSize: 15,
    color: colors.white,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
});
