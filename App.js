import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { CartProvider } from './src/context/CartContext';
import { ThemeProvider } from './src/context/ThemeContext';
import RootNavigator from './src/navigation/RootNavigator';
import linking from './src/navigation/linking';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <NavigationContainer linking={linking}>
          <RootNavigator />
        </NavigationContainer>
      </CartProvider>
    </ThemeProvider>
  );
}
