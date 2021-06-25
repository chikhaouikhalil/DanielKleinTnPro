import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/HomeScreen/Header';
import {width} from '../utils/Dim';
import {colors, Gs} from '../utils/Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Shared from '../components/Shared';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [email1, setEmail1] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView style={Gs.container}>
      <Header navigation={navigation} />
      <View style={{margin: 20}}>
        <Text style={styles.title}>Authentification</Text>
        <Text style={styles.subTitle}>Créer un compte</Text>
        <Text style={styles.text}>
          S'il vous plaît entrez votre adresse e-mail pour créer un compte.
        </Text>
        <Text style={styles.label}>Adresse e-mail</Text>
        <TextInput
          value={email}
          onChangeText={val => setEmail(val.trim())}
          style={styles.input}
        />
        <Pressable style={styles.button}>
          <FontAwesome name="user" size={20} color={colors.white} />
          <Text style={styles.buttonText}>Créer un compte</Text>
        </Pressable>
      </View>
      <View style={styles.divider} />
      <View style={{margin: 20}}>
        <Text style={styles.subTitle}>Déja enregistré ?</Text>
        <Text style={styles.label}>Adresse e-mail</Text>
        <TextInput
          value={email1}
          onChangeText={val => setEmail1(val.trim())}
          style={styles.input}
        />
        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          secureTextEntry
          value={password}
          onChangeText={val => setPassword(val)}
          style={styles.input}
        />
        <Pressable style={styles.button}>
          <Entypo name="lock" size={20} color={colors.white} />
          <Text style={styles.buttonText}>Se connecter</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
        </Pressable>
      </View>
      <View style={styles.divider} />
      <View style={{marginHorizontal: 20, marginTop: 10}}>
        <Text style={[styles.label, {textAlign: 'center'}]}>
          ou se connecter avec
        </Text>
      </View>
      <View>
        <Pressable style={[styles.socialButton, {backgroundColor: '#3b5998'}]}>
          <Entypo name="facebook" size={30} color={colors.white} />
          <Text style={styles.socialButtonText}>
            Se connecter avec Facebook
          </Text>
        </Pressable>
        <Pressable style={[styles.socialButton, {backgroundColor: '#DB4437'}]}>
          <MaterialCommunityIcons name="gmail" size={30} color={colors.white} />
          <Text style={styles.socialButtonText}>Se connecter avec Gmail</Text>
        </Pressable>
      </View>
      <View style={[styles.divider, {marginTop: 20}]} />
      <Shared />
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    width: width * 0.9,
    alignSelf: 'center',
    borderColor: '#aaaaaa',
    borderWidth: 1,
    height: 45,
    fontSize: 14,
    paddingLeft: 10,
    color: colors.darkBrown,
    fontFamily: 'Ubuntu-Medium',
    marginTop: 10,
    borderRadius: 5,
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    color: colors.lightBrown,
    marginBottom: 15,
  },
  subTitle: {
    fontFamily: 'Ubuntu-BoldItalic',
    fontSize: 17,
    color: colors.darkBrown,
    marginBottom: 5,
  },
  text: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 14,
    color: colors.grayDark,
  },
  label: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 14,
    color: colors.brown,
    marginTop: 10,
  },
  divider: {
    height: 2,
    width: width * 0.95,
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightBrown,
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 13,
    color: colors.white,
    marginLeft: 3,
  },
  forgotText: {
    fontFamily: 'Ubuntu-Regular',
    color: colors.grayDark,
    fontSize: 13,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 10,
    paddingVertical: 5,
    width: width * 0.8,

    borderRadius: 10,
    marginTop: 10,
  },
  socialButtonText: {
    fontFamily: 'Ubuntu-Medium',
    color: colors.white,
    marginLeft: 5,
  },
});
