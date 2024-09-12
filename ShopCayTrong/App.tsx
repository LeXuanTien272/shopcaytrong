import React from 'react';
import { Image, SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/Store';
import AppNavigation from './src/app_navigation/navigators/AppNavigation';
import CartScreen from './src/app_navigation/main_navigation/CartScreen';


function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <AppNavigation />
        {/* <CartScreen></CartScreen> */}

      </SafeAreaView>
    </Provider>

  )
}


export default App;
