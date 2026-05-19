import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HomeStackNavigator from "./HomeStackNavigator";
import ProfileDrawerNavigator from "./ProfileDrawerNavigator";

import OrdersScreen from "../screens/tabs/OrdersScreen";
import SearchScreen from "../screens/tabs/SearchScreen";

const Tab = createBottomTabNavigator();
function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeScreen";

  if (routeName === "RestaurantDetail" || routeName === "Cart") {
    return "none";
  }

  return "flex";
}
export default function TabNavigator() {
  const cartItems = [1, 2];

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={({ route }) => ({
          headerShown: false,

          tabBarStyle: {
            display: getTabBarVisibility(route),
          },

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        })}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerStyle: {
            backgroundColor: "#ff6347",
          },
          headerTintColor: "#fff",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarBadge: cartItems.length > 0 ? cartItems.length : undefined,

          headerStyle: {
            backgroundColor: "#ff6347",
          },
          headerTintColor: "#fff",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileDrawerNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
