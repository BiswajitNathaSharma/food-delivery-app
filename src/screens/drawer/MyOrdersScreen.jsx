import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../context/ThemeContext";
import { RECENT_ORDERS } from "../../constants/mockData";
import { radius, shadows, spacing, typography } from "../../constants/theme";

export default function MyOrdersScreen() {
  const { theme, isDark } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      edges={["bottom"]}
    >
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <ScrollView contentContainerStyle={{ padding: spacing.base }}>
        <Text
          style={[styles.sectionLabel, { color: theme.colors.textSecondary }]}
        >
          RECENT
        </Text>
        {RECENT_ORDERS.map((o) => (
          <View
            key={o.id}
            style={[
              styles.card,
              { backgroundColor: theme.colors.card, ...shadows.sm },
            ]}
          >
            <View style={styles.rowTop}>
              <Text style={[styles.restName, { color: theme.colors.text }]}>
                {o.restaurantName}
              </Text>
              <Text style={[styles.total, { color: theme.colors.primary }]}>
                ₹{o.total.toFixed(2)}
              </Text>
            </View>
            <Text
              style={[styles.items, { color: theme.colors.textSecondary }]}
              numberOfLines={1}
            >
              {o.items.join(", ")}
            </Text>
            <View style={styles.rowBot}>
              <Text style={[styles.date, { color: theme.colors.textTertiary }]}>
                {o.date}
              </Text>
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor:
                      o.status === "Delivered" ? "#22C55E20" : "#EF444420",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    { color: o.status === "Delivered" ? "#22C55E" : "#EF4444" },
                  ]}
                >
                  {o.status}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  sectionLabel: {
    fontSize: typography.fontSizes.xs,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: spacing.md,
  },
  card: {
    borderRadius: radius.xl,
    padding: spacing.base,
    marginBottom: spacing.md,
  },
  rowTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  restName: { fontSize: typography.fontSizes.base, fontWeight: "700" },
  total: { fontWeight: "800" },
  items: { fontSize: typography.fontSizes.xs, marginBottom: spacing.sm },
  rowBot: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: { fontSize: typography.fontSizes.xs },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.full,
  },
  badgeText: { fontSize: 11, fontWeight: "700" },
});
