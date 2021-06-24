import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import axios from 'axios';
import {ScrollView} from 'react-native';
import {colors} from '../utils/Styles';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {width} from '../utils/Dim';
import {Surface} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

const ProductsScreen = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [total, setTotal] = useState(0);
  const {gender, category, text} = route.params;
  const _ScrollView = useRef(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://chikhaouikhl.alwaysdata.net/api/products/category/${category}/${gender}?pageNumber=${pageNumber}`,
      )
      .then(res => {
        const {products, page, pages} = res.data;
        _ScrollView.current.scrollTo({x: 0, y: 0, animated: true});
        setLoading(false);
        setProducts(products);
        setPageNumber(page);
        setTotal(pages);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  }, [pageNumber, category, gender]);

  const navigate = p => {
    category === 'montres'
      ? navigation.navigate('MontreScreen', p)
      : navigation.navigate('BraceletScreen', p);
  };

  return (
    <ScrollView ref={_ScrollView} style={styles.container}>
      {/** header */}
      <View style={styles.header}>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Entypo name="back" size={35} color={colors.white} />
        </Pressable>
        <View style={styles.row}>
          <Image
            source={require('../assets/logowhite.png')}
            style={styles.logo}
          />
          <View>
            <Text style={styles.title}>Daniel Klein</Text>
            <Text style={styles.subTitle}>fashion for everyone</Text>
          </View>
        </View>
      </View>
      <Animatable.Text
        style={styles.categoryName}
        animation="fadeInDownBig"
        useNativeDriver
        duration={1000}>
        {text}
      </Animatable.Text>

      {loading ? (
        <View style={styles.productsContainer}>
          {Array.from(Array(6).keys()).map(k => {
            return (
              <Surface style={styles.productContainer} key={k}>
                <View
                  style={[
                    styles.image,
                    {
                      backgroundColor: colors.lightGray,
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: width * 0.5 - 40,
                      height:
                        category === 'bracelets'
                          ? width * 0.5 - 40
                          : (width * 0.5 - 40) * 1.5,
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
              </Surface>
            );
          })}
        </View>
      ) : (
        <View style={styles.productsContainer}>
          {products.map(p => {
            return (
              <Pressable onPress={() => navigate(p)} key={p._id}>
                <Surface style={styles.productContainer}>
                  <Image
                    source={{uri: p.images[0]}}
                    style={[
                      styles.image,
                      {
                        backgroundColor: colors.lightGray,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: width * 0.5 - 40,
                        height:
                          category === 'bracelets'
                            ? width * 0.5 - 40
                            : (width * 0.5 - 40) * 1.5,
                        borderRadius: 20,
                      },
                    ]}
                  />
                  <Text style={styles.name}>{p.name}</Text>
                  <Text style={styles.price}>{p.price + ' DT'}</Text>
                </Surface>
              </Pressable>
            );
          })}
        </View>
      )}
      {/** pagination */}
      {total > 0 && (
        <View
          style={[
            styles.row,
            {justifyContent: 'space-evenly', marginTop: 20, marginBottom: 50},
          ]}>
          {pageNumber === 1 ? (
            <FontAwesome
              name="hand-o-left"
              size={20}
              color={colors.lightGray}
            />
          ) : (
            <Pressable
              style={{
                padding: 5,
                paddingHorizontal: 20,
                backgroundColor: colors.white,
                borderRadius: 500,
              }}
              onPress={() => setPageNumber(pageNumber - 1)}>
              <FontAwesome name="hand-o-left" size={25} color={colors.brown} />
            </Pressable>
          )}
          <Text
            style={styles.paginationText}>{`Page ${pageNumber}/${total}`}</Text>
          {pageNumber === total ? (
            <FontAwesome
              name="hand-o-right"
              size={25}
              color={colors.lightGray}
            />
          ) : (
            <Pressable
              style={{
                padding: 5,
                paddingHorizontal: 25,

                borderRadius: 500,
              }}
              onPress={() => setPageNumber(pageNumber + 1)}>
              <FontAwesome name="hand-o-right" size={25} color={colors.brown} />
            </Pressable>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  header: {
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
  paginationText: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 15,
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
  image: {
    width: width * 0.5 - 40,
    height: (width * 0.5 - 40) * 1.5,
    borderRadius: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  categoryName: {
    fontFamily: 'Ubuntu-Light',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
  },
  name: {
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
  price: {
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
});
