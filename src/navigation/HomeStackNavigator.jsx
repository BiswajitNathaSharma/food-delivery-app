import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "../screens/home/CartScreen";
import HomeScreen from "../screens/home/HomeScreen";
import RestaurantDetailScreen from "../screens/home/RestaurantDetailScreen";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff6347",
        },
        headerTintColor: "#fff",
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Food Rush",
        }}
      />

      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        options={{
          title: "Restaurant Detail",
          headerBackTitle: "Back",
        }}
      />

      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}
