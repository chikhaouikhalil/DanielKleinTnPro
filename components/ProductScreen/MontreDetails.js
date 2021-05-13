import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {width} from '../../utils/Dim';
import {colors} from '../../utils/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
const MontreDetails = ({navigaiton, item}) => {
  const [qty, setQty] = useState(1);
  const [show, setShow] = useState(false);
  const addQty = () => {
    setQty(qty + 1);
  };
  const removeQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <>
      <View elevation={10} style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>

        <TouchableOpacity style={styles.likeContainer}>
          <Ionicons name="heart-outline" size={30} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.likeContainer, {bottom: width * 0.5 + 65}]}>
          <Ionicons name="share-social" size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
      {/** prices container */}
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`${item.price} DT   `}</Text>
        <Text style={styles.realPrice}>{`${item.realPrice} DT`}</Text>
        <Text style={styles.discount}>{`   -${item.discount}% OFF   `}</Text>
      </View>
      {/** stock  */}
      <Animatable.View
        animation="fadeInLeft"
        useNativeDriver
        style={[
          styles.stockContainer,
          {backgroundColor: item.stock ? '#3d664f' : '#8f474e'},
        ]}>
        {item.stock ? (
          <Text style={styles.stockText}>En Stock</Text>
        ) : (
          <Text style={styles.stockText}>Stock épuisé</Text>
        )}
      </Animatable.View>
      {/** qty */}
      <View style={styles.qtyContainer}>
        <TouchableOpacity onPress={removeQty}>
          <AntDesign name="minussquare" size={45} color={colors.darkYellow} />
        </TouchableOpacity>
        <View style={styles.qty}>
          <Text style={styles.qtyValue}>{qty}</Text>
        </View>
        <TouchableOpacity onPress={addQty}>
          <AntDesign name="plussquare" size={45} color={colors.darkYellow} />
        </TouchableOpacity>
      </View>
      {/** add to Cart Button */}
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="opencart" size={22} color={colors.white} />
        <Text style={styles.buttonText}>Ajouter au panier</Text>
      </TouchableOpacity>
      {/** Fiche */}
      <View style={{marginHorizontal: 20}}>
        <View style={styles.row}>
          <Text style={styles.label}>Fiche technique</Text>
          {show ? (
            <TouchableOpacity onPress={() => setShow(!show)}>
              <AntDesign name="upcircle" size={25} color={colors.darkBrown} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setShow(!show)}>
              <AntDesign name="downcircle" size={25} color={colors.darkBrown} />
            </TouchableOpacity>
          )}
        </View>
        {show && (
          <Animatable.View
            animation="zoomInLeft"
            useNativeDriver
            duration={1500}>
            {item.genre && (
              <LinearGradient
                colors={[colors.lightBrown, colors.brown, colors.brown]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Genre</Text>
                <Text style={styles.infoText}>{item.genre}</Text>
              </LinearGradient>
            )}
            {item.boitier && (
              <LinearGradient
                colors={[colors.lightBrown, colors.brown, colors.brown]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Boitier</Text>
                <Text style={styles.infoText}>{item.boitier}</Text>
              </LinearGradient>
            )}
            {item.cadran && (
              <LinearGradient
                colors={[colors.lightBrown, colors.brown, colors.brown]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Cadran</Text>
                <Text style={styles.infoText}>{item.cadran}</Text>
              </LinearGradient>
            )}
            {item.etanchiete && (
              <LinearGradient
                colors={[colors.lightBrown, colors.brown, colors.brown]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Etanchiete</Text>
                <Text style={styles.infoText}>{item.etanchiete}</Text>
              </LinearGradient>
            )}
            {item.mouvement && (
              <LinearGradient
                colors={[colors.lightBrown, colors.brown, colors.brown]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Mouvement</Text>
                <Text style={styles.infoText}>{item.mouvement}</Text>
              </LinearGradient>
            )}
            {item.verre && (
              <LinearGradient
                colors={[colors.lightBrown, colors.brown, colors.brown]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Verre</Text>
                <Text style={styles.infoText}>{item.verre}</Text>
              </LinearGradient>
            )}
            {item.fonctions && (
              <LinearGradient
                colors={[colors.lightBrown, colors.brown, colors.brown]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Fonctions</Text>
                <Text style={styles.infoText}>{item.fonctions}</Text>
              </LinearGradient>
            )}
            {item.bracelet && (
              <LinearGradient
                colors={[colors.lightBrown, colors.brown, colors.brown]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Bracelet</Text>
                <Text style={styles.infoText}>{item.bracelet}</Text>
              </LinearGradient>
            )}
            {item.dCadran && (
              <LinearGradient
                colors={[colors.lightBrown, colors.brown, colors.brown]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Diametre du cadran</Text>
                <Text style={styles.infoText}>{item.dCadran}</Text>
              </LinearGradient>
            )}
            {item.garantie && (
              <LinearGradient
                colors={[colors.lightBrown, colors.brown, colors.brown]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Garantie</Text>
                <Text style={styles.infoText}>{item.garantie}</Text>
              </LinearGradient>
            )}
          </Animatable.View>
        )}
      </View>
      <View style={{height: 50}}></View>
    </>
  );
};

export default MontreDetails;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: width * 1.25,
  },
  title: {
    fontFamily: 'Ubuntu-LightItalic',
    fontSize: 16,
    color: colors.white,
    backgroundColor: 'rgba(8, 7, 7,0.6)',
    textAlign: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    width,
    paddingVertical: 15,
    borderTopLeftRadius: 500,
  },
  likeContainer: {
    backgroundColor: 'rgba(213, 166, 91,0.6)',
    position: 'absolute',
    right: 5,
    bottom: width * 0.5,
    padding: 10,
    borderRadius: 500,
  },
  priceContainer: {
    textAlign: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width,
    backgroundColor: colors.brown,
    paddingVertical: 10,
    marginTop: 5,
  },
  price: {
    color: colors.darkYellow,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 16,
  },
  realPrice: {
    color: colors.lightGray,
    textDecorationLine: 'line-through',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 14,
  },
  discount: {
    color: colors.darkYellow,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 12,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginTop: 30,
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  label: {
    color: colors.brown,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 16,
  },
  infoTitle: {
    color: colors.white,
    fontFamily: 'Ubuntu-Medium',
    fontSize: 14,
    padding: 10,
  },
  infoText: {
    color: colors.white,
    fontFamily: 'Ubuntu-Regular',
    fontSize: 12,
    padding: 10,
  },
  infoContainer: {
    width: width - 40,
    backgroundColor: colors.lightBrown,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
    borderRadius: 10,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  qty: {
    width: 100,
    height: 45,
    borderColor: colors.gray,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 15,
  },
  qtyValue: {
    fontFamily: 'Ubuntu-Bold',
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBrown,
    paddingVertical: 10,
    paddingHorizontal: 40,

    marginTop: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Ubuntu-Bold',
    color: colors.white,
    marginLeft: 10,
  },
  stockContainer: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 40,
    marginTop: 10,
  },
  stockText: {
    fontFamily: 'Ubuntu-Bold',
    color: colors.white,
  },
});
