import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { radius, shadows, spacing, typography } from "../../constants/theme";

function CartItemRow({ item }) {
  const { theme } = useTheme();
  const { addToCart, removeFromCart, deleteFromCart } = useCart();

  return (
    <View
      style={[
        styles.cartItem,
        { backgroundColor: theme.colors.card, ...shadows.sm },
      ]}
    >
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      <View style={styles.cartItemInfo}>
        <Text
          style={[styles.cartItemName, { color: theme.colors.text }]}
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <Text
          style={[styles.cartItemMeta, { color: theme.colors.textSecondary }]}
        >
          ₹{item.price.toFixed(2)} each
        </Text>
        <View style={styles.cartItemActions}>
          <View
            style={[
              styles.counterRow,
              { backgroundColor: theme.colors.primary },
            ]}
          >
            <Pressable
              onPress={() => removeFromCart(item.id)}
              style={styles.counterBtn}
            >
              <Ionicons name="remove" size={16} color="#fff" />
            </Pressable>
            <Text style={styles.counterText}>{item.quantity}</Text>
            <Pressable
              onPress={() =>
                addToCart(item, item.restaurantId, item.restaurantName)
              }
              style={styles.counterBtn}
            >
              <Ionicons name="add" size={16} color="#fff" />
            </Pressable>
          </View>
          <Text style={[styles.itemTotal, { color: theme.colors.primary }]}>
            ₹{(item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
      </View>
      <Pressable
        onPress={() => deleteFromCart(item.id)}
        style={[
          styles.deleteBtn,
          { backgroundColor: theme.colors.surfaceSecondary },
        ]}
      >
        <Ionicons name="trash-outline" size={16} color={theme.colors.error} />
      </Pressable>
    </View>
  );
}

export default function CartScreen({ navigation }) {
  const { theme, isDark } = useTheme();
  const {
    cartItems,
    clearCart,
    subtotal,
    deliveryFee,
    taxes,
    total,
    totalItems,
  } = useCart();

  const handlePlaceOrder = () => {
    Alert.alert(
      "🎉 Order Placed!",
      `Your order of ₹₹{total.toFixed(2)} has been placed successfully. Estimated delivery: 25-35 min.`,
      [
        {
          text: "Track Order",
          onPress: () => {
            clearCart();
            navigation.navigate("HomeScreen");
          },
        },
      ],
    );
  };

  if (cartItems.length === 0) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
        <Pressable
          style={styles.headerBack}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color={theme.colors.text} />
        </Pressable>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>🛒</Text>
          <Text style={[styles.emptyTitle, { color: theme.colors.text }]}>
            Your cart is empty
          </Text>
          <Text
            style={[
              styles.emptySubtitle,
              { color: theme.colors.textSecondary },
            ]}
          >
            Add delicious items from a restaurant to get started
          </Text>
          <Pressable
            style={[
              styles.browseBtn,
              { backgroundColor: theme.colors.primary },
            ]}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.browseBtnText}>Browse Restaurants</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      edges={["bottom"]}
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.background}
      />

      {/* Header */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: theme.colors.background,
            borderBottomColor: theme.colors.border,
          },
        ]}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={theme.colors.text} />
        </Pressable>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>
          My Cart ({totalItems} items)
        </Text>
        <Pressable
          onPress={() =>
            Alert.alert("Clear Cart", "Remove all items?", [
              { text: "Cancel", style: "cancel" },
              { text: "Clear", style: "destructive", onPress: clearCart },
            ])
          }
        >
          <Text style={[styles.clearBtn, { color: theme.colors.error }]}>
            Clear
          </Text>
        </Pressable>
      </View>

      {/* Delivery info */}
      <View
        style={[styles.deliveryBanner, { backgroundColor: theme.colors.tag }]}
      >
        <Ionicons name="bicycle" size={18} color={theme.colors.primary} />
        <Text
          style={[styles.deliveryBannerText, { color: theme.colors.tagText }]}
        >
          Delivering from {cartItems[0]?.restaurantName}
        </Text>
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: spacing.base, paddingBottom: 220 }}
        renderItem={({ item }) => <CartItemRow item={item} />}
        showsVerticalScrollIndicator={false}
      />

      {/* Order Summary */}
      <View
        style={[
          styles.summaryContainer,
          {
            backgroundColor: theme.colors.surface,
            borderTopColor: theme.colors.border,
          },
        ]}
      >
        <Text style={[styles.summaryTitle, { color: theme.colors.text }]}>
          Order Summary
        </Text>
        <View style={styles.summaryRow}>
          <Text
            style={[styles.summaryLabel, { color: theme.colors.textSecondary }]}
          >
            Subtotal
          </Text>
          <Text style={[styles.summaryValue, { color: theme.colors.text }]}>
            ₹{subtotal.toFixed(2)}
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text
            style={[styles.summaryLabel, { color: theme.colors.textSecondary }]}
          >
            Delivery Fee
          </Text>
          <Text style={[styles.summaryValue, { color: theme.colors.text }]}>
            ₹{deliveryFee.toFixed(2)}
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text
            style={[styles.summaryLabel, { color: theme.colors.textSecondary }]}
          >
            Taxes (10%)
          </Text>
          <Text style={[styles.summaryValue, { color: theme.colors.text }]}>
            ₹{taxes.toFixed(2)}
          </Text>
        </View>
        <View
          style={[
            styles.summaryDivider,
            { backgroundColor: theme.colors.border },
          ]}
        />
        <View style={styles.summaryRow}>
          <Text style={[styles.totalLabel, { color: theme.colors.text }]}>
            Total
          </Text>
          <Text style={[styles.totalValue, { color: theme.colors.primary }]}>
            ₹{total.toFixed(2)}
          </Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.placeOrderBtn,
            {
              backgroundColor: theme.colors.primary,
              opacity: pressed ? 0.88 : 1,
              ...shadows.colored,
            },
          ]}
          onPress={handlePlaceOrder}
        >
          <Ionicons name="checkmark-circle" size={22} color="#fff" />
          <Text style={styles.placeOrderText}>
            Place Order • ₹{total.toFixed(2)}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
  },
  headerTitle: { fontSize: typography.fontSizes.md, fontWeight: "700" },
  clearBtn: { fontSize: typography.fontSizes.sm, fontWeight: "600" },
  headerBack: { padding: spacing.base },

  deliveryBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginHorizontal: spacing.base,
    marginTop: spacing.md,
    padding: spacing.md,
    borderRadius: radius.lg,
  },
  deliveryBannerText: { fontSize: typography.fontSizes.sm, fontWeight: "600" },

  // Cart Item
  cartItem: {
    flexDirection: "row",
    borderRadius: radius.lg,
    marginBottom: spacing.md,
    padding: spacing.md,
    alignItems: "center",
  },
  cartItemImage: { width: 72, height: 72, borderRadius: radius.md },
  cartItemInfo: { flex: 1, paddingHorizontal: spacing.md },
  cartItemName: { fontSize: typography.fontSizes.base, fontWeight: "700" },
  cartItemMeta: { fontSize: typography.fontSizes.xs, marginTop: 2 },
  cartItemActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.sm,
  },
  counterRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radius.full,
    overflow: "hidden",
  },
  counterBtn: { paddingHorizontal: 8, paddingVertical: 5 },
  counterText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
    minWidth: 20,
    textAlign: "center",
  },
  itemTotal: { fontSize: typography.fontSizes.base, fontWeight: "800" },
  deleteBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },

  // Summary
  summaryContainer: {
    bottom: 0,
    padding: spacing.base,
    borderTopWidth: 1,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    ...shadows.sm,
  },
  summaryTitle: {
    fontSize: typography.fontSizes.md,
    fontWeight: "700",
    marginBottom: spacing.md,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  summaryLabel: { fontSize: typography.fontSizes.sm },
  summaryValue: { fontSize: typography.fontSizes.sm, fontWeight: "600" },
  summaryDivider: { height: 1, marginVertical: spacing.sm },
  totalLabel: { fontSize: typography.fontSizes.md, fontWeight: "800" },
  totalValue: { fontSize: typography.fontSizes.md, fontWeight: "800" },
  placeOrderBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    padding: spacing.md,
    borderRadius: radius.xl,
    marginTop: spacing.md,
  },
  placeOrderText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: typography.fontSizes.md,
  },

  // Empty
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing["2xl"],
  },
  emptyEmoji: { fontSize: 72, marginBottom: spacing.lg },
  emptyTitle: {
    fontSize: typography.fontSizes.xl,
    fontWeight: "800",
    marginBottom: spacing.sm,
  },
  emptySubtitle: {
    fontSize: typography.fontSizes.base,
    textAlign: "center",
    marginBottom: spacing.xl,
  },
  browseBtn: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: radius.xl,
  },
  browseBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: typography.fontSizes.base,
  },
});
