import React from 'react';
import {StatusBar} from 'react-native';
import {colors} from './utils/Styles';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Navigation from './utils/Navigation';
const barColor = async () => {
  try {
    const response = await changeNavigationBarColor(colors.brown);
    console.log(response); // {success: true}
  } catch (e) {
    console.log(e); // {success: false}
  }
};
const App = () => {
  React.useEffect(() => {
    barColor();
  }, []);
  return (
    <>
      <StatusBar backgroundColor={colors.brown} />
      <Navigation />
    </>
  );
};

export default App;
