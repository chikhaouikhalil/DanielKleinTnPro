import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../utils/Styles';
import {width} from '../../utils/Dim';
import axios from 'axios';
import {Image} from 'react-native-elements';
import {ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';

const SampleMontres = ({text, gender, navigation}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://chikhaouikhl.alwaysdata.net/api/products/sample/montres/${gender}`,
      )
      .then(res => setProducts(res.data))
      .catch(e => console.log(e));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{text}</Text>
        <Pressable
          style={styles.seeButton}
          onPress={() =>
            navigation.navigate('ProductsScreen', {
              gender,
              category: 'montres',
              text,
            })
          }>
          <Text style={styles.see}>Voir plus</Text>
        </Pressable>
      </View>
      {products.length === 0 ? (
        <ScrollView horizontal>
          {[1, 2, 3, 4, 5].map(e => {
            return (
              <View
                key={e}
                style={[
                  styles.productContainer,
                  {
                    backgroundColor: colors.lightGray,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}>
                <Animatable.Image
                  animation="zoomIn"
                  useNativeDriver
                  iterationCount="infinite"
                  duration={300 * e}
                  easing="linear"
                  direction="alternate-reverse"
                  source={require('../../assets/logoloading.png')}
                  style={{width: width * 0.2, height: width * 0.2}}
                />
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          keyExtractor={product => product._id}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.productContainer}
                onPress={() => navigation.navigate('MontreScreen', item)}>
                <Image
                  source={{uri: item.images[0]}}
                  style={styles.image}
                  containerStyle={{
                    backgroundColor: colors.lightGray,
                    borderRadius: 20,
                  }}
                />
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.infoContainer}>
                  <Text style={styles.price}>{`${item.price} DT`}</Text>
                  <Text style={styles.realPrice}>{`${item.realPrice} DT`}</Text>
                  <Text style={styles.discount}>{`-${item.discount}%`}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default SampleMontres;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 20,
    paddingRight: 0,
  },
  title: {
    color: colors.brown,
    fontFamily: 'Ubuntu-Bold',
    textTransform: 'uppercase',
    fontSize: 17,
    marginTop: 10,
    marginLeft: 10,
  },
  productContainer: {
    width: width * 0.5 - 20,
    height: (width * 0.5 - 20) * 1.5,
    marginHorizontal: 5,
  },
  image: {
    width: width * 0.5 - 20,
    height: (width * 0.5 - 20) * 1.5,
    borderRadius: 20,
  },
  name: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    color: colors.white,
    fontFamily: 'Ubuntu-Italic',
    textTransform: 'capitalize',
    textAlign: 'center',
    paddingVertical: 5,
    width: width * 0.5 - 20,
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  infoContainer: {
    backgroundColor: 'rgba(36, 35, 33,0.7)',
    position: 'absolute',
    bottom: 0,
    color: colors.white,
    fontFamily: 'Ubuntu-Light',
    fontSize: 13,
    paddingVertical: 10,
    width: width * 0.5 - 20,
    textAlign: 'center',
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  price: {
    color: '#fff',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 12,
  },
  realPrice: {
    color: colors.lightGray,
    textDecorationLine: 'line-through',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 12,
  },
  discount: {
    color: colors.yellow,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  seeButton: {
    borderColor: colors.yellow,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 8,
  },
  see: {
    color: colors.grayDark,
    marginHorizontal: 10,
    fontFamily: 'Ubuntu-Medium',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});
