import * as React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {height, width} from '../utils/Dim';
import {colors} from '../utils/Styles';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'MONTRE FEMME DANIEL KLEIN DK 11772-5',
          image:
            'https://www.danielklein.tn/1773-thickbox_default/montre-homme-daniel-klein-dk-11711-1.jpg',
        },
        {
          title: 'MONTRE FEMME DANIEL KLEIN DK 11772-5',
          image:
            'https://www.danielklein.tn/3790-thickbox_default/montre-homme-daniel-klein-dk-11964-3.jpg',
        },
        {
          title: 'MONTRE FEMME DANIEL KLEIN DK 11772-5',
          image:
            'https://www.danielklein.tn/3793-thickbox_default/montre-homme-daniel-klein-dk-11964-2.jpg',
        },
        {
          title: 'MONTRE FEMME DANIEL KLEIN DK 11772-5',
          image:
            'https://www.danielklein.tn/3275-thickbox_default/montre-homme-daniel-klein-dk-11909-5.jpg',
        },
        {
          title: 'MONTRE FEMME DANIEL KLEIN DK 11772-5',
          image:
            'https://www.danielklein.tn/5131-thickbox_default/montre-femme-daniel-klein-dk-11772-5.jpg',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          width: width * 0.9,
          height: height,
          marginTop: 20,
          borderRadius: 20,
        }}>
        <Pressable>
          <Image
            style={{
              width: width * 0.9,
              height: width * 0.9 * (4 / 3),
              borderRadius: 20,
            }}
            source={{uri: item.image}}
          />
          <Text
            style={{
              color: colors.white,
              backgroundColor: 'rgba(0,0,0,0.5)',
              position: 'absolute',
              bottom: 0,
              width: width * 0.9,
              fontFamily: 'Ubuntu-BoldItalic',
              paddingVertical: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              textAlign: 'center',
            }}>
            {item.title}
          </Text>
        </Pressable>
        <Text
          style={{
            color: colors.white,
            backgroundColor: '#000',
            position: 'absolute',
            width: width * 0.9,
            fontFamily: 'Ubuntu-BoldItalic',
            paddingVertical: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            textAlign: 'center',
          }}>
          {item.title}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Carousel
          pagingEnabled
          layout={'stack'}
          layoutCardOffset={10}
          ref={ref => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={width}
          itemWidth={width * 0.9}
          itemHeight={height * 0.9}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({activeIndex: index})}
        />
      </View>
    );
  }
}
