import React, {useRef} from 'react';
import {ScrollView, StatusBar, StyleSheet} from 'react-native';
import Header from '../components/ProductScreen/Header';
import MontreDetails from '../components/ProductScreen/MontreDetails';
import {colors} from '../utils/Styles';

const MontreScreen = ({navigation, route}) => {
  const scrollViewRef = useRef();
  const item = route.params;
  return (
    <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({animated: true})
      }
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <StatusBar backgroundColor={colors.darkBrown} />
      <Header navigation={navigation} />
      <MontreDetails navigation={navigation} item={item} />
    </ScrollView>
  );
};

export default MontreScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
