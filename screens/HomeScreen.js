import * as React from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Header from '../components/HomeScreen/Header';
import SampleMontres from '../components/HomeScreen/SampleMontres';
import SampleBracelet from '../components/HomeScreen/SampleBracelet';
import {colors} from '../utils/Styles';
import {montresHommes, montresFemmes, bracelets} from '../utils/data';
import {width} from '../utils/Dim';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({navigation}) => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <Provider>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor={colors.darkBrown} />
        <Header navigation={navigation} />
        <SampleMontres
          navigation={navigation}
          text={`Montres Hommes Dk`}
          items={montresHommes}
        />
        <SampleMontres
          navigation={navigation}
          text={`Montres Femmes Dk`}
          items={montresFemmes}
        />
        <SampleBracelet
          navigation={navigation}
          text={`Bracelets`}
          items={bracelets}
        />

        <View style={{height: 100}}></View>
        <Portal>
          <FAB.Group
            fabStyle={{...styles.logo, backgroundColor: '#3d664f'}}
            open={open}
            icon={'face-agent'}
            actions={[
              {
                icon: 'facebook',
                color: '#fff',
                label: 'Facebook',
                onPress: () => console.log('Pressed star'),
                small: false,
                style: {...styles.logo, backgroundColor: '#4267B2'},
              },
              {
                icon: 'facebook-messenger',
                color: '#fff',
                label: 'Messenger',
                onPress: () => console.log('Pressed email'),
                small: false,
                style: {...styles.logo, backgroundColor: '#006AFF'},
              },
              {
                icon: 'whatsapp',
                color: '#fff',
                label: "What's App",
                onPress: () => console.log('Pressed notifications'),
                small: false,
                style: styles.logo,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </ScrollView>
    </Provider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  logo: {
    backgroundColor: '#25D366',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  textContainer: {
    width: width - 30,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 30,
  },
  text: {
    fontFamily: 'Ubuntu-Italic',
    color: colors.white,
    marginVertical: 10,
    fontSize: 15,
  },
  image: {
    position: 'absolute',
    width: width,
    height: width,
    alignSelf: 'center',
    opacity: 0.5,
  },
});
