import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../utils/Styles';
import {width} from '../../utils/Dim';

const SampleBracelet = ({text, items, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{text}</Text>
        <Pressable style={styles.seeButton}>
          <Text style={styles.see}>Voir plus</Text>
        </Pressable>
      </View>
      <View style={styles.productsContainer}>
        {items.map(item => {
          return (
            <TouchableOpacity
              key={item.title}
              style={styles.productContainer}
              onPress={() => navigation.navigate('BraceletScreen', item)}>
              <Image source={{uri: item.image}} style={styles.image} />
              <Text style={styles.name}>{item.title}</Text>
              <View style={styles.infoContainer}>
                <Text style={styles.price}>{`${item.price} DT`}</Text>
                <Text style={styles.realPrice}>{`${item.realPrice} DT`}</Text>
                <Text style={styles.discount}>{`-${item.discount}%`}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default SampleBracelet;

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
    height: (width * 0.5 - 20) * 1.25,
    marginHorizontal: 5,
    marginTop: 10,
  },
  image: {
    width: width * 0.5 - 20,
    height: (width * 0.5 - 20) * 1.25,
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
  },
  see: {
    color: colors.grayDark,
    marginHorizontal: 10,
    fontFamily: 'Ubuntu-Medium',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  productsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
