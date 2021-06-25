import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import {height, width} from '../utils/Dim';
import {colors, Gs} from '../utils/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DrawerContent = ({navigation}) => {
  return (
    <View style={[Gs.darkContainer, {flex: 1}]}>
      <Image source={require('../assets/logowhite.png')} style={styles.image} />
      <Text style={styles.title}>Daniel Klein</Text>
      <View style={styles.links}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.LinkContainer}>
          <FontAwesome5 name="store-alt" size={20} color={colors.white} />
          <Text style={styles.linktext}>Acceuil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.LinkContainer}>
          <FontAwesome5 name="users" size={20} color={colors.white} />
          <Text style={styles.linktext}>Mon compte</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ContactScreen')}
          style={styles.LinkContainer}>
          <FontAwesome5 name="info-circle" size={20} color={colors.white} />
          <Text style={styles.linktext}>Contact</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Nos articles</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProductsScreen', {
              gender: 'hommes',
              category: 'montres',
              text: 'Montres',
            })
          }
          style={styles.LinkContainer}>
          <FontAwesome5
            name="clock"
            size={20}
            color={colors.white}
            style={{paddingLeft: 2}}
          />
          <Text style={styles.linktext}>Montres</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')}
          style={styles.LinkContainer}>
          <Fontisto name="sunglasses-alt" size={18} color={colors.white} />
          <Text style={styles.linktext}>Lunettes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')}
          style={styles.LinkContainer}>
          <Entypo name="wallet" size={20} color={colors.white} />
          <Text style={styles.linktext}>Portefeuilles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')}
          style={styles.LinkContainer}>
          <FontAwesome name="gift" size={20} color={colors.white} />
          <Text style={styles.linktext}>Bracelets</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    marginTop: 10,
    alignSelf: 'center',
    opacity: 0.8,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Bold',
    marginTop: 5,
  },
  links: {
    marginTop: 30,
  },
  LinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    paddingLeft: 5,
    marginVertical: 10,
    paddingBottom: 5,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  linktext: {
    color: '#fff',
    fontFamily: 'Ubuntu-Italic',
    fontSize: 16,
    paddingLeft: 5,
  },
  label: {
    color: '#aaaaaa',
    fontFamily: 'Ubuntu-MediumItalic',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 15,
  },
});
