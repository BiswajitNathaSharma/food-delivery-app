import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContent from "../components/CustomDrawerContent";

import HelpScreen from "../screens/drawer/HelpScreen";
import MyOrdersScreen from "../screens/drawer/MyOrdersScreen";
import SettingsScreen from "../screens/drawer/SettingsScreen";
import { useTheme } from "../context/ThemeContext";

const Drawer = createDrawerNavigator();

export default function ProfileDrawerNavigator() {
  const { theme, typography } = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.header,
        },

        headerTintColor: theme.colors.headerText,

        headerShadowVisible: false,

        sceneStyle: {
          backgroundColor: theme.colors.background,
        },

        drawerStyle: {
          backgroundColor: theme.colors.drawerBg,
          width: 280,
        },

        drawerActiveBackgroundColor: theme.colors.drawerActive,

        drawerActiveTintColor: theme.colors.drawerActiveText,

        drawerInactiveTintColor: theme.colors.textSecondary,

        drawerLabelStyle: {
          fontSize: typography.fontSizes.base,
          fontWeight: "600",
        },
      }}
    >
      <Drawer.Screen
        name="My Orders"
        component={MyOrdersScreen}
        options={{
          drawerLabel: "My Orders",

          drawerIcon: ({ color, size }) => (
            <Ionicons name="receipt" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help-circle" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
