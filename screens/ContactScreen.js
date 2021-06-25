import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import {Surface} from 'react-native-paper';
import Header from '../components/HomeScreen/Header';
import {height, width} from '../utils/Dim';
import {Gs, colors} from '../utils/Styles';
import {Picker} from '@react-native-picker/picker';
import Entypo from 'react-native-vector-icons/Entypo';
import Shared from '../components/Shared';

const ContactScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('Service Client');

  return (
    <ScrollView style={Gs.container}>
      <Header navigation={navigation} />
      {/** conditions */}
      <Surface elevation={10} style={styles.infoContainer}>
        <Image source={require('../assets/contact.png')} style={styles.image} />
        <Text style={styles.title}>Conditions générales de vente </Text>
        <Text style={styles.text}>
          Les présentes conditions visent à définir les modalités de vente entre
          DANIEL KLEIN TUNISIE et le Client, de la commande aux services, en
          passant par le paiement et la livraison. Elles règlent toutes les
          étapes nécessaires à la passation de la commande et assurent le suivi
          de cette commande entre les parties contractantes.
        </Text>
        <Text style={styles.conditionsButton}>(+) Voir plus</Text>
      </Surface>
      <Surface
        elevation={10}
        style={[
          styles.infoContainer,
          {marginTop: 0, marginBottom: 0, width: width * 0.95},
        ]}>
        <Image
          source={require('../assets/logoloading.png')}
          style={{
            width: width * 0.8,
            height: width * 0.8,
            alignSelf: 'center',
            position: 'absolute',
            opacity: 0.1,
            marginTop: 140,
          }}
        />
        <Text style={styles.title}>Service clients - Contactez nous</Text>
        <View style={styles.divider} />
        <Text style={styles.subTitle}>Envoyer un message : </Text>
        <Text style={styles.label}>Envoyé à</Text>
        <View
          style={{
            borderColor: '#aaaaaa',
            borderWidth: 0.4,
            width: width * 0.75,
            height: 55,
            marginTop: 10,
            alignSelf: 'center',
            borderRadius: 10,
          }}>
          <Picker
            mode="dropdown"
            dropdownIconColor={colors.brown}
            selectedValue={service}
            onValueChange={(itemValue, itemIndex) => setService(itemValue)}>
            <Picker.Item
              style={{fontSize: 13, color: colors.brown}}
              label="Service Client"
              value="Service Client"
            />
            <Picker.Item
              style={{fontSize: 13, color: colors.brown}}
              label="Webmaster"
              value="Webmaster"
            />
          </Picker>
        </View>

        <Text style={styles.label}>Adresse e-mail*</Text>
        <TextInput
          value={email}
          onChangeText={val => setEmail(val.trim())}
          style={styles.input}
        />
        <Text style={styles.label}>Message*</Text>
        <TextInput
          multiline
          numberOfLines={5}
          onChangeText={val => setMessage(val)}
          value={message}
          style={[styles.input, {height: 200}]}
        />
        <Pressable style={styles.button}>
          <Entypo name="mail" size={20} color={colors.white} />
          <Text style={styles.buttonText}>Envoyer le message</Text>
        </Pressable>
      </Surface>
      <Shared />
    </ScrollView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  infoContainer: {
    borderColor: 'transparent',
    borderWidth: 2,
    shadowRadius: 30,
    alignSelf: 'center',
    marginVertical: 30,
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 30,
  },
  image: {
    width: width * 0.9,
    height: width * 0.5 * 0.9,
    alignSelf: 'center',
  },
  divider: {
    height: 1.25,
    width: width * 0.8,
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
  },
  title: {
    color: colors.darkBrown,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Bold',
    marginTop: 5,
  },
  text: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 14,
    color: colors.grayDark,
    textAlign: 'justify',
    marginHorizontal: 30,
    marginTop: 10,
  },
  conditionsButton: {
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: colors.blue,
    marginRight: 25,
  },
  subTitle: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 15,
    marginTop: 15,
    marginLeft: 10,
    color: colors.brown,
    marginBottom: 5,
  },
  input: {
    width: width * 0.8,
    alignSelf: 'center',
    borderColor: '#aaaaaa',
    borderWidth: 0.5,
    height: 45,
    fontSize: 14,
    paddingLeft: 10,
    color: colors.darkBrown,
    fontFamily: 'Ubuntu-Medium',
    marginTop: 10,
    borderRadius: 5,
  },
  label: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 14,
    color: colors.brown,
    marginTop: 15,
    marginHorizontal: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightBrown,
    alignSelf: 'flex-end',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: width * 0.06,
  },
  buttonText: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 13,
    color: colors.white,
    marginLeft: 5,
  },
});
