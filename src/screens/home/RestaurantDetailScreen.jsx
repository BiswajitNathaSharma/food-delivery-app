import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { RESTAURANTS } from "../../constants/mockData";
import { radius, shadows, spacing, typography } from "../../constants/theme";

function StarRating({ rating, size = 12 }) {
  const { theme } = useTheme();
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Ionicons
          key={i}
          name={
            i < full
              ? "star"
              : half && i === full
                ? "star-half"
                : "star-outline"
          }
          size={size}
          color={theme.colors.star}
        />
      ))}
    </View>
  );
}

function MenuItemCard({ item, restaurantId, restaurantName }) {
  const { theme } = useTheme();
  const { addToCart, removeFromCart, getItemQuantity } = useCart();
  const quantity = getItemQuantity(item.id);

  return (
    <View
      style={[
        styles.menuCard,
        { backgroundColor: theme.colors.card, ...shadows.sm },
      ]}
    >
      <View style={styles.menuCardContent}>
        <View style={styles.menuInfo}>
          {/* Veg/Non-veg indicator */}
          <View
            style={[
              styles.vegDot,
              {
                borderColor: item.isVeg
                  ? theme.colors.success
                  : theme.colors.error,
              },
            ]}
          >
            <View
              style={[
                styles.vegDotInner,
                {
                  backgroundColor: item.isVeg
                    ? theme.colors.success
                    : theme.colors.error,
                },
              ]}
            />
          </View>
          <Text style={[styles.menuItemName, { color: theme.colors.text }]}>
            {item.name}
          </Text>
          <Text
            style={[styles.menuItemDesc, { color: theme.colors.textSecondary }]}
            numberOfLines={2}
          >
            {item.description}
          </Text>
          <View style={styles.menuMeta}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Ionicons
                name="flame-outline"
                size={12}
                color={theme.colors.textTertiary}
              />
              <Text
                style={[
                  styles.menuMetaText,
                  { color: theme.colors.textTertiary },
                ]}
              >
                {item.calories} cal
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <StarRating rating={item.rating} size={11} />
              <Text
                style={[
                  styles.menuMetaText,
                  { color: theme.colors.textTertiary },
                ]}
              >
                {item.rating}
              </Text>
            </View>
          </View>
          <Text style={[styles.menuPrice, { color: theme.colors.primary }]}>
            ₹{item.price.toFixed(2)}
          </Text>
        </View>
        <View style={styles.menuImageSide}>
          <Image source={{ uri: item.image }} style={styles.menuImage} />
          {/* Add / counter */}
          {quantity === 0 ? (
            <Pressable
              style={[
                styles.addBtn,
                { backgroundColor: theme.colors.primary, ...shadows.colored },
              ]}
              onPress={() => addToCart(item, restaurantId, restaurantName)}
            >
              <Ionicons name="add" size={20} color="#fff" />
            </Pressable>
          ) : (
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
              <Text style={styles.counterText}>{quantity}</Text>
              <Pressable
                onPress={() => addToCart(item, restaurantId, restaurantName)}
                style={styles.counterBtn}
              >
                <Ionicons name="add" size={16} color="#fff" />
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

export default function RestaurantDetailScreen({ navigation, route }) {
  const { restaurantId } = route.params;
  const { theme, isDark } = useTheme();
  const { totalItems, subtotal } = useCart();

  const restaurant = RESTAURANTS.find((r) => r.id === restaurantId);
  const [activeCategory, setActiveCategory] = useState(null);

  if (!restaurant) {
    return (
      <SafeAreaView
        style={[
          styles.errorContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <Text style={{ color: theme.colors.text }}>Restaurant not found</Text>
      </SafeAreaView>
    );
  }

  const menuCategories = [...new Set(restaurant.menu.map((m) => m.category))];
  const filteredMenu = activeCategory
    ? restaurant.menu.filter((m) => m.category === activeCategory)
    : restaurant.menu;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      edges={["bottom"]}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Hero Image */}
      <View style={styles.heroContainer}>
        <Image source={{ uri: restaurant.image }} style={styles.heroImage} />
        <View style={styles.heroGradient} />
        <Pressable
          style={[styles.backBtn, { backgroundColor: "rgba(0,0,0,0.5)" }]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </Pressable>
        {!restaurant.isOpen && (
          <View style={styles.closedBanner}>
            <Text style={styles.closedBannerText}>Currently Closed</Text>
          </View>
        )}
      </View>

      {/* Info Card */}
      <View
        style={[styles.infoCard, { backgroundColor: theme.colors.surface }]}
      >
        <Text style={[styles.restaurantName, { color: theme.colors.text }]}>
          {restaurant.name}
        </Text>
        <Text
          style={[styles.cuisineText, { color: theme.colors.textSecondary }]}
        >
          {restaurant.cuisine}
        </Text>
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="star" size={14} color={theme.colors.star} />
            <Text style={[styles.metaText, { color: theme.colors.text }]}>
              {restaurant.rating} ({restaurant.reviewCount.toLocaleString()}{" "}
              reviews)
            </Text>
          </View>
          <View style={styles.metaDivider} />
          <View style={styles.metaItem}>
            <Ionicons
              name="time-outline"
              size={14}
              color={theme.colors.textSecondary}
            />
            <Text
              style={[styles.metaText, { color: theme.colors.textSecondary }]}
            >
              {restaurant.deliveryTime}
            </Text>
          </View>
          <View style={styles.metaDivider} />
          <View style={styles.metaItem}>
            <Ionicons
              name="bicycle-outline"
              size={14}
              color={theme.colors.textSecondary}
            />
            <Text
              style={[styles.metaText, { color: theme.colors.textSecondary }]}
            >
              {restaurant.deliveryFee}
            </Text>
          </View>
        </View>
      </View>

      {/* Category Filter */}
      <View
        style={[styles.categoryBar, { borderBottomColor: theme.colors.border }]}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: spacing.sm,
            paddingHorizontal: spacing.base,
          }}
        >
          {[null, ...menuCategories].map((cat) => (
            <Pressable
              key={cat ?? "all"}
              onPress={() => setActiveCategory(cat)}
              style={[
                styles.catChip,
                {
                  backgroundColor:
                    activeCategory === cat
                      ? theme.colors.primary
                      : theme.colors.surfaceSecondary,
                  borderColor:
                    activeCategory === cat
                      ? theme.colors.primary
                      : theme.colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.catChipText,
                  {
                    color:
                      activeCategory === cat
                        ? "#fff"
                        : theme.colors.textSecondary,
                  },
                ]}
              >
                {cat ?? "All"}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Menu List */}
      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: spacing.base,
          paddingBottom: totalItems > 0 ? 100 : spacing.base,
        }}
        renderItem={({ item }) => (
          <MenuItemCard
            item={item}
            restaurantId={restaurant.id}
            restaurantName={restaurant.name}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* Cart Float Button */}
      {totalItems > 0 && (
        <Pressable
          style={[
            styles.cartFloat,
            { backgroundColor: theme.colors.primary, ...shadows.colored },
          ]}
          onPress={() => navigation.navigate("Cart")}
        >
          <View style={styles.cartFloatLeft}>
            <View style={styles.cartFloatBadge}>
              <Text style={styles.cartFloatBadgeText}>{totalItems}</Text>
            </View>
            <Text style={styles.cartFloatLabel}>View Cart</Text>
          </View>
          <Text style={styles.cartFloatTotal}>₹{subtotal.toFixed(2)}</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  errorContainer: { flex: 1, alignItems: "center", justifyContent: "center" },

  heroContainer: { position: "relative" },
  heroImage: { width: "100%", height: 240 },
  heroGradient: {
    ...StyleSheet.absoluteFillObject,
    background: "transparent",
    // Gradient via overlay
    backgroundImage: "linear-gradient(transparent, rgba(0,0,0,0.4))",
  },
  backBtn: {
    position: "absolute",
    top: 48,
    left: spacing.base,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  closedBanner: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.65)",
    padding: spacing.md,
    alignItems: "center",
  },
  closedBannerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: typography.fontSizes.md,
  },

  infoCard: {
    padding: spacing.base,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.06)",
  },
  restaurantName: { fontSize: typography.fontSizes.xl, fontWeight: "800" },
  cuisineText: { fontSize: typography.fontSizes.sm, marginTop: 4 },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.md,
    flexWrap: "wrap",
  },
  metaItem: { flexDirection: "row", alignItems: "center", gap: 4 },
  metaText: { fontSize: typography.fontSizes.sm },
  metaDivider: {
    width: 1,
    height: 14,
    backgroundColor: "#ccc",
    marginHorizontal: spacing.sm,
  },

  categoryBar: { paddingVertical: spacing.sm, borderBottomWidth: 1 },
  catChip: {
    paddingHorizontal: spacing.md,
    paddingVertical: 7,
    borderRadius: radius.full,
    borderWidth: 1,
  },
  catChipText: { fontSize: typography.fontSizes.sm, fontWeight: "600" },

  // Menu card
  menuCard: {
    borderRadius: radius.lg,
    marginBottom: spacing.md,
    overflow: "hidden",
  },
  menuCardContent: { flexDirection: "row", padding: spacing.md },
  menuInfo: { flex: 1, paddingRight: spacing.md },
  vegDot: {
    width: 14,
    height: 14,
    borderRadius: 2,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  vegDotInner: { width: 7, height: 7, borderRadius: 3.5 },
  menuItemName: { fontSize: typography.fontSizes.base, fontWeight: "700" },
  menuItemDesc: {
    fontSize: typography.fontSizes.xs,
    marginTop: 4,
    lineHeight: 18,
  },
  menuMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    marginTop: 6,
  },
  menuMetaText: { fontSize: typography.fontSizes.xs },
  menuPrice: {
    fontSize: typography.fontSizes.md,
    fontWeight: "800",
    marginTop: spacing.sm,
  },

  menuImageSide: { alignItems: "center" },
  menuImage: { width: 96, height: 96, borderRadius: radius.md },
  addBtn: {
    width: 32,
    height: 32,
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -16,
  },
  counterRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radius.full,
    marginTop: -16,
    overflow: "hidden",
  },
  counterBtn: { paddingHorizontal: 8, paddingVertical: 6 },
  counterText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: typography.fontSizes.sm,
    minWidth: 20,
    textAlign: "center",
  },

  // Cart float
  cartFloat: {
    borderRadius: radius.xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  cartFloatLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  cartFloatBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  cartFloatBadgeText: { color: "#fff", fontWeight: "700", fontSize: 13 },
  cartFloatLabel: {
    color: "#fff",
    fontWeight: "700",
    fontSize: typography.fontSizes.base,
  },
  cartFloatTotal: {
    color: "#fff",
    fontWeight: "800",
    fontSize: typography.fontSizes.base,
  },
});
