import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../context/ThemeContext";
import { RECENT_ORDERS } from "../../constants/mockData";
import { radius, shadows, spacing, typography } from "../../constants/theme";

const STATUS_COLORS = {
  Delivered: "#22C55E",
  Pending: "#F59E0B",
  Cancelled: "#EF4444",
  "On the Way": "#3B82F6",
};

function OrderCard({ order }) {
  const { theme } = useTheme();
  const statusColor = STATUS_COLORS[order.status] ?? theme.colors.textSecondary;

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.colors.card, ...shadows.sm },
      ]}
    >
      <View style={styles.cardHeader}>
        <Image
          source={{ uri: order.restaurantImage }}
          style={styles.restImage}
        />
        <View style={styles.cardInfo}>
          <Text style={[styles.restaurantName, { color: theme.colors.text }]}>
            {order.restaurantName}
          </Text>
          <Text style={[styles.date, { color: theme.colors.textTertiary }]}>
            {order.date}
          </Text>
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: statusColor + "20" },
            ]}
          >
            <View
              style={[styles.statusDot, { backgroundColor: statusColor }]}
            />
            <Text style={[styles.statusText, { color: statusColor }]}>
              {order.status}
            </Text>
          </View>
        </View>
        {order.rating && (
          <View style={styles.ratingCol}>
            <Ionicons name="star" size={14} color={theme.colors.star} />
            <Text style={[styles.ratingText, { color: theme.colors.text }]}>
              {order.rating}.0
            </Text>
          </View>
        )}
      </View>
      <View
        style={[styles.divider, { backgroundColor: theme.colors.border }]}
      />
      <Text
        style={[styles.itemsList, { color: theme.colors.textSecondary }]}
        numberOfLines={1}
      >
        {order.items.join(" • ")}
      </Text>
      <View style={styles.cardFooter}>
        <Text style={[styles.total, { color: theme.colors.text }]}>
          Total:{" "}
          <Text style={{ color: theme.colors.primary }}>
            ₹{order.total.toFixed(2)}
          </Text>
        </Text>
        <View
          style={[styles.reorderBtn, { backgroundColor: theme.colors.tag }]}
        >
          <Text style={[styles.reorderText, { color: theme.colors.primary }]}>
            Reorder
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function OrdersScreen() {
  const { theme, isDark } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      edges={["top"]}
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.background}
      />
      <Text style={[styles.title, { color: theme.colors.text }]}>
        My Orders
      </Text>
      <FlatList
        data={RECENT_ORDERS}
        keyExtractor={(o) => o.id}
        contentContainerStyle={{ padding: spacing.base, paddingBottom: 80 }}
        renderItem={({ item }) => <OrderCard order={item} />}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>📦</Text>
            <Text style={[styles.emptyTitle, { color: theme.colors.text }]}>
              No orders yet
            </Text>
            <Text
              style={[
                styles.emptySubtitle,
                { color: theme.colors.textSecondary },
              ]}
            >
              Start ordering your favorite food!
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: {
    fontSize: typography.fontSizes["2xl"],
    fontWeight: "800",
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
  },

  card: {
    borderRadius: radius.xl,
    marginBottom: spacing.md,
    padding: spacing.base,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.md,
  },
  restImage: { width: 56, height: 56, borderRadius: radius.md },
  cardInfo: { flex: 1 },
  restaurantName: { fontSize: typography.fontSizes.base, fontWeight: "700" },
  date: { fontSize: typography.fontSizes.xs, marginTop: 2 },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.full,
    marginTop: 6,
  },
  statusDot: { width: 6, height: 6, borderRadius: 3 },
  statusText: { fontSize: 11, fontWeight: "700" },
  ratingCol: { alignItems: "center", gap: 2 },
  ratingText: { fontSize: typography.fontSizes.xs, fontWeight: "700" },

  divider: { height: 1, marginVertical: spacing.md },
  itemsList: { fontSize: typography.fontSizes.xs, marginBottom: spacing.md },

  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: { fontSize: typography.fontSizes.sm, fontWeight: "600" },
  reorderBtn: {
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.full,
  },
  reorderText: { fontSize: typography.fontSizes.sm, fontWeight: "700" },

  emptyState: { alignItems: "center", paddingTop: 80 },
  emptyEmoji: { fontSize: 64, marginBottom: spacing.lg },
  emptyTitle: {
    fontSize: typography.fontSizes.lg,
    fontWeight: "700",
    marginBottom: spacing.sm,
  },
  emptySubtitle: { fontSize: typography.fontSizes.base, textAlign: "center" },
});
