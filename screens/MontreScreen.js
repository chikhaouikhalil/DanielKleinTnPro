import React, {useState, useEffect, useRef} from 'react';
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
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Surface} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Shared from '../components/Shared';
import axios from 'axios';
import ImageViewer from 'react-native-image-zoom-viewer';
import Modal from 'react-native-modal';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const MontreScreen = ({navigation, route}) => {
  const _ScrollView = useRef();
  const bracelet = route.params;
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible);

  const addQty = () => {
    setQty(qty + 1);
  };
  const removeQty = () => {
    0;
    if (qty > 1) setQty(qty - 1);
  };
  const up = () => _ScrollView.current?.scrollTo({x: 0, y: 0, animated: true});

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://chikhaouikhl.alwaysdata.net/api/products/category/${bracelet.category}/${bracelet.genre}?pageNumber=${pageNumber}`,
      )
      .then(res => {
        const {products, page, pages} = res.data;
        setLoading(false);
        setProducts(products);
        setPageNumber(page);
        setTotal(pages);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  }, [pageNumber, bracelet]);

  const images = [
    {
      url: bracelet.images[0],
    },
  ];

  return (
    <ScrollView ref={_ScrollView} style={styles.container}>
      <Modal
        visible={visible}
        useNativeDriver={true}
        animationInTiming={1000}
        animationOutTiming={1000}
        onRequestClose={toggleVisible}
        style={{margin: 0}}>
        <ImageViewer
          backgroundColor={colors.darkBrown}
          renderIndicator={() => null}
          useNativeDriver={true}
          imageUrls={images}
          renderFooter={() => {
            return (
              <View
                style={{
                  position: 'absolute',
                  bottom: 20,
                  left: width / 2 - 25,
                }}>
                <MaterialIcons name="zoom-out-map" color="#fff" size={50} />
              </View>
            );
          }}
        />
        <TouchableOpacity style={styles.closeButton} onPress={toggleVisible}>
          <Text style={styles.closeButtonText}>Retour</Text>
        </TouchableOpacity>
      </Modal>
      <Pressable onPress={toggleVisible}>
        <Image source={{uri: bracelet.images[0]}} style={styles.image} />
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            bottom: 0,
            backgroundColor: 'rgba(36, 35, 33,0.7)',
            paddingRight: 20,
            paddingVertical: 8,
            paddingLeft: 10,
            borderTopEndRadius: 20,
          }}>
          <Fontisto name="zoom-plus" size={25} color="#fff" />
          <Text
            style={{
              color: '#fff',
              marginLeft: 10,
              fontFamily: 'Ubuntu-LightItalic',
              textDecorationLine: 'underline',
            }}>
            Cliquer sur la photo pour Zoomer
          </Text>
        </View>
      </Pressable>

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
      <Text style={styles.name}>{bracelet.name}</Text>
      <View style={styles.pricesContainer}>
        <Text style={styles.price}>{`${bracelet.price}DT`}</Text>
        <Text style={styles.realPrice}>{`${bracelet.realPrice}DT`}</Text>
        <Text style={styles.discount}>{`${bracelet.discount}% OFF`}</Text>
      </View>
      <View style={styles.deliveryContainer}>
        <FontAwesome name="plane" size={24} />
        <Text style={styles.deliveryText}>
          Livraisons{' '}
          <Text style={{fontFamily: 'Ubuntu-Medium'}}>uniquement</Text> en
          tunisie
        </Text>
      </View>
      <View style={styles.sendContainer}>
        <Feather name="mail" size={24} color={colors.darkYellow} />
        <Text style={styles.sendText}>Envoyer à un ami</Text>
      </View>
      {/** qty */}
      <View style={styles.qtyContainer}>
        <Text style={styles.qtyLabel}>Quantité </Text>
        <View style={styles.qtyRow}>
          <TouchableOpacity onPress={removeQty}>
            <AntDesign name="minussquare" size={30} color={colors.darkYellow} />
          </TouchableOpacity>
          <Surface style={styles.qty}>
            <Text style={styles.qtyValue}>{qty}</Text>
          </Surface>
          <TouchableOpacity onPress={addQty}>
            <AntDesign name="plussquare" size={30} color={colors.darkYellow} />
          </TouchableOpacity>
        </View>
      </View>
      {/** add to cart Button */}
      <Pressable style={{alignSelf: 'center'}} onPress={() => alert('a')}>
        <LinearGradient
          colors={['#2b2422', '#423c3a', '#2b2422', '#423c3a', '#2b2422']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.addButton}>
          <FontAwesome name="shopping-cart" size={25} color={colors.white} />
          <Text style={styles.buttonText}>Ajouter au panier</Text>
        </LinearGradient>
      </Pressable>
      {/** Suggestions & Pagination */}
      <Text style={styles.label}>VOUS POURRIEZ VOUS INTÉRESSER PAR</Text>
      <View style={styles.buttonsContainer}>
        {pageNumber === 1 ? (
          <Entypo name="arrow-long-left" size={25} color={colors.lightGray} />
        ) : (
          <TouchableOpacity onPress={() => setPageNumber(pageNumber - 1)}>
            <Entypo name="arrow-long-left" size={25} color={colors.brown} />
          </TouchableOpacity>
        )}
        {pageNumber === total ? (
          <Entypo name="arrow-long-right" size={25} color={colors.lightGray} />
        ) : (
          <TouchableOpacity onPress={() => setPageNumber(pageNumber + 1)}>
            <Entypo name="arrow-long-right" size={25} color={colors.brown} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.productsContainer}>
        {loading
          ? Array.from(Array(6).keys()).map(k => {
              return (
                <View style={styles.productContainer} key={k}>
                  <View
                    style={[
                      styles.image1,
                      {
                        backgroundColor: colors.lightGray,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: width * 0.5 - 40,
                        height: (width * 0.5 - 40) * 1.25,
                        borderRadius: 20,
                      },
                    ]}>
                    <Animatable.Image
                      animation="zoomIn"
                      useNativeDriver
                      iterationCount="infinite"
                      duration={300 * k}
                      easing="linear"
                      direction="alternate-reverse"
                      source={require('../assets/logoloading.png')}
                      style={{width: width * 0.15, height: width * 0.15}}
                    />
                  </View>
                </View>
              );
            })
          : products.map(p => {
              return (
                <Pressable
                  onPress={() => {
                    up();
                    navigation.navigate('MontreScreen', p);
                  }}
                  key={p._id}>
                  <Surface
                    style={[
                      styles.productContainer,
                      {
                        width: width * 0.5 - 40,
                        height: (width * 0.5 - 40) * 1.25,
                      },
                    ]}>
                    <Image
                      source={{uri: p.images[0]}}
                      style={[
                        styles.image1,
                        {
                          backgroundColor: colors.lightGray,
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: width * 0.5 - 40,
                          height: (width * 0.5 - 40) * 1.25,
                          borderRadius: 20,
                        },
                      ]}
                    />
                    <Text style={styles.name1}>{p.name}</Text>
                    <Text style={styles.price1}>{p.price + ' DT'}</Text>
                  </Surface>
                </Pressable>
              );
            })}
      </View>
      <Shared />
    </ScrollView>
  );
};

export default MontreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: width,
    height: width * 1.2,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    top: 20,
  },
  likeContainer: {
    backgroundColor: colors.lightBrown,
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
  name: {
    fontFamily: 'Ubuntu-Bold',
    color: colors.darkBrown,
    marginLeft: 10,
    fontSize: 16,
    marginTop: 20,
  },
  pricesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  price: {
    fontFamily: 'Ubuntu-Bold',
    color: colors.darkYellow,
    fontSize: 18,
    marginRight: 8,
  },
  realPrice: {
    fontFamily: 'Ubuntu-Bold',
    color: colors.gray,
    fontSize: 15,
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discount: {
    fontFamily: 'Ubuntu-Bold',
    color: colors.yellow,
    fontSize: 13,
  },
  deliveryContainer: {
    borderWidth: 0.2,
    borderColor: colors.grayDark,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 10,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginTop: 8,
  },
  deliveryText: {
    fontFamily: 'Ubuntu-Light',
    marginLeft: 5,
    fontSize: 15,
    textTransform: 'uppercase',
  },
  sendContainer: {
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginRight: 18,
    alignSelf: 'flex-end',
    marginTop: 15,
    borderBottomWidth: 0.5,
    paddingBottom: 2,
    borderColor: colors.darkYellow,
  },
  sendText: {
    fontFamily: 'Ubuntu-Regular',
    marginLeft: 5,
    fontSize: 15,
    color: colors.darkYellow,
  },
  qtyContainer: {
    margin: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.75,
    borderColor: colors.lightGray,
    paddingTop: 20,
  },
  qtyLabel: {
    fontFamily: 'Ubuntu-Italic',
    color: colors.darkBrown,
    fontSize: 14.5,
    marginRight: 5,
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  qty: {
    elevation: 2,
    paddingHorizontal: 25,
    height: 27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  qtyValue: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 15,
  },
  addButton: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 8,
    marginTop: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Ubuntu-Italic',
    marginLeft: 5,
  },
  label: {
    fontFamily: 'Ubuntu-Medium',
    color: colors.darkBrown,
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
  },
  productsContainer: {
    borderColor: colors.lightGray,
    borderWidth: 0.5,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  productContainer: {
    marginTop: 20,
    borderRadius: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 2,
  },
  image1: {
    width: width * 0.5 - 40,
    height: (width * 0.5 - 40) * 1.25,
    borderRadius: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  name1: {
    fontFamily: 'Ubuntu-Italic',
    fontSize: 10,
    width: width * 0.5 - 40,
    textAlign: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 4,
    color: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  price1: {
    fontFamily: 'Ubuntu-MediumItalic',
    color: colors.white,
    backgroundColor: 'rgba(36, 35, 33,0.7)',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 2,
    paddingLeft: 3,
    paddingRight: 5,
    fontSize: 13,
    width: width * 0.5 - 40,
    textAlign: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButton: {
    borderColor: colors.lightGray,
    borderWidth: 0.25,
    position: 'absolute',
    top: 20,
    right: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: colors.lightGray,
    fontFamily: 'Ubuntu-Light',
    paddingVertical: 5,
    paddingHorizontal: 25,
    fontSize: 15,
  },
});
