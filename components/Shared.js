import React, {useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import {StyleSheet, Text, View, Image} from 'react-native';
import {width} from '../utils/Dim';
import {colors} from '../utils/Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native';
const Shared = () => {
  return (
    <View>
      {/** map */}
      <View style={{marginTop: 20}}>
        <Image source={require('../assets/map.png')} style={styles.map} />
        <View style={styles.mapInfo}>
          <Text style={styles.dkMap}>Daniel Klein tunisie</Text>
          <Text style={styles.address}>Rue Lac Victoria, Tunisie 1053</Text>
          <Pressable>
            <Text style={styles.mapLink}>View larger map</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.divider} />
      {/** FB- INSTA - YOUTUBE */}
      <Text style={styles.suivez}>SUIVEZ-NOUS :</Text>
      <View style={styles.row}>
        <View style={[styles.circle, {backgroundColor: '#3b5998'}]}>
          <FontAwesome name="facebook" size={30} color={colors.white} />
        </View>
        <View style={[styles.circle, {backgroundColor: '#cc3629'}]}>
          <FontAwesome name="youtube-play" size={30} color={colors.white} />
        </View>
        <LinearGradient
          colors={[
            '#405de6',
            '#5851db',
            '#833ab4',
            '#c13584',
            '#e1306c',
            '#fd1d1d',
          ]}
          style={[styles.circle]}>
          <FontAwesome name="instagram" size={30} color={colors.white} />
        </LinearGradient>
      </View>
      {/** horaires */}
      <View style={styles.divider} />
      <Text style={styles.label}>Horaires De Travail</Text>
      <View style={[styles.row]}>
        <View style={{marginRight: 15}}>
          <Text style={styles.day}>Lundi à Vendredi</Text>
          <Text style={styles.day}>Samedi</Text>
          <Text style={styles.day}>Dimanche</Text>
        </View>
        <View>
          <Text style={styles.time}>09h00 à 18h00</Text>
          <Text style={styles.time}>09h00 à 13h00</Text>
          <Text style={styles.time}>Fermé</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <Image source={require('../assets/paiement.png')} style={styles.image} />
    </View>
  );
};

export default Shared;

const styles = StyleSheet.create({
  map: {
    width: width - 30,
    height: (width - 30) * 0.55,
    alignSelf: 'center',
    borderRadius: 10,
  },
  mapInfo: {
    backgroundColor: 'rgba(255,255,255,0.75)',
    position: 'absolute',
    bottom: 10,
    left: 10,
    paddingHorizontal: 7,
    borderTopRightRadius: 20,
  },
  dkMap: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 12,
    color: colors.darkBrown,
    marginTop: 5,
  },
  address: {
    fontFamily: 'Ubuntu-Light',
    fontSize: 12,
    color: colors.darkBrown,
  },
  mapLink: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 12,
    color: colors.blue,
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  input: {
    borderColor: colors.gray,
    borderWidth: 0.5,
    width: width * 0.65,
    fontFamily: 'Ubuntu-Regular',
    color: colors.black,
    fontSize: 18,
    height: 45,
    borderRightWidth: 0,
  },
  button: {
    backgroundColor: colors.darkYellow,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: width * 0.3,
    borderColor: colors.gray,
    borderWidth: 0.5,
  },
  buttonText: {
    fontFamily: 'Ubuntu-Medium',
    color: colors.white,
  },
  text: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 15,
    marginTop: 15,
  },
  divider: {
    height: 0.75,
    backgroundColor: colors.lightGray,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  suivez: {
    fontFamily: 'Ubuntu-Medium',
    textAlign: 'center',
    color: colors.grayDark,
    fontSize: 16,
    marginTop: 15,
  },
  label: {
    marginLeft: 10,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 16,
    marginTop: 10,
  },
  day: {
    fontFamily: 'Ubuntu-Medium',
    color: colors.darkYellow,
    textAlign: 'right',
    marginTop: 5,
    fontSize: 15,
  },
  time: {
    fontFamily: 'Ubuntu-Medium',
    color: colors.grayDark,
    marginTop: 5,
    fontSize: 15,
  },
  image: {
    width,
    height: width * 0.16,
    marginBottom: 20,
    marginTop: 10,
  },
});
