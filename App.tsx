import React from 'react'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './src/theme/appTheme';
import mobileAds from 'react-native-google-mobile-ads';






const App = () => {

  mobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
  });

  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor="black" 
        barStyle={'light-content'}
      />
      <CalculadoraScreen/>
    </SafeAreaView>
  )
}

export default App;
