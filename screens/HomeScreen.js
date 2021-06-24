import * as React from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import {ScrollView, StatusBar, StyleSheet, View, Linking} from 'react-native';
import Header from '../components/HomeScreen/Header';
import SampleMontres from '../components/HomeScreen/SampleMontres';
import SampleBracelet from '../components/HomeScreen/SampleBracelet';
import {colors} from '../utils/Styles';
import {width} from '../utils/Dim';

const HomeScreen = ({navigation}) => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  const facebook = () => {
    Linking.openURL('fb://page/285253948509309');
  };
  const instagram = () => {
    Linking.openURL('http://instagram.com/_u/danielkleingrouptunisie');
  };

  const messenger = () => {
    Linking.canOpenURL('fb-messenger://')
      .then(supported => {
        if (!supported) {
          return;
        } else {
          Linking.openURL('fb-messenger://user-thread/' + '285253948509309');
        }
      })
      .catch(err => console.log(err));
  };

  const whatsapp = () => {
    Linking.openURL('whatsapp://send?phone=+216 29 230 850');
  };

  return (
    <Provider>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor={colors.darkBrown} />
        <Header navigation={navigation} />

        <SampleMontres
          navigation={navigation}
          text={`Montres Hommes Dk`}
          gender={'hommes'}
        />
        <SampleMontres
          navigation={navigation}
          text={`Montres Femmes Dk`}
          gender={'femmes'}
        />
        <SampleBracelet
          navigation={navigation}
          text={`Bracelets Hommes`}
          gender={'hommes'}
        />

        <View style={{height: 100}}></View>
        <Portal>
          <FAB.Group
            fabStyle={{...styles.logo, backgroundColor: colors.lightBrown}}
            open={open}
            icon={'face-agent'}
            actions={[
              {
                icon: 'facebook',
                color: '#fff',
                label: 'Facebook',
                onPress: () => facebook(),
                small: false,
                style: {...styles.logo1, backgroundColor: '#4267B2'},
              },
              {
                icon: 'facebook-messenger',
                color: '#fff',
                label: 'Messenger',
                onPress: () => messenger(),
                small: false,
                style: {...styles.logo1, backgroundColor: '#006AFF'},
              },
              {
                icon: 'whatsapp',
                color: '#fff',
                label: "What's App",
                onPress: () => whatsapp(),
                small: false,
                style: {...styles.logo1, backgroundColor: '#219e49'},
              },
              {
                icon: 'instagram',
                color: '#fff',
                label: 'Instagram',
                onPress: () => instagram(),
                small: false,
                style: {...styles.logo1, backgroundColor: '#c13584'},
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
    width: 70,
    elevation: 10,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
  },
  logo1: {
    width: 50,
    elevation: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
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
