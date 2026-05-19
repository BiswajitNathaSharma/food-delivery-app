import Ionicons from "@expo/vector-icons/Ionicons";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import useAuthStore from "../store/authStore";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CustomDrawerContent(props) {
  const { logout } = useAuthStore();
  const handleLogout = async () => {
    await logout();
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1733690683251-88803f27ad7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29rdXxlbnwwfHwwfHx8MA%3D%3D",
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>Biswajit</Text>
      </View>

      <DrawerItemList {...props} />

      <DrawerItem
        label="Logout"
        onPress={handleLogout}
        icon={({ color, size }) => (
          <Ionicons name="log-out" color={color} size={size} />
        )}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    paddingVertical: 24,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
  },
});
