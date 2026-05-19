import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext';
import useAuthStore from '../../store/authStore';
import { radius, shadows, spacing, typography } from '../../constants/theme';

const MENU_ITEMS = [
  { icon: 'person-outline', label: 'Edit Profile', sub: 'Update your info' },
  { icon: 'location-outline', label: 'Saved Addresses', sub: '2 saved locations' },
  { icon: 'card-outline', label: 'Payment Methods', sub: 'Visa •••• 4242' },
  { icon: 'notifications-outline', label: 'Notifications', sub: 'Manage alerts' },
  { icon: 'star-outline', label: 'Rate the App', sub: 'Leave a review' },
  { icon: 'help-circle-outline', label: 'Help & Support', sub: 'FAQ and contact' },
];

export default function ProfileScreen() {
  const { theme, isDark, toggleTheme } = useTheme();
  const { logout } = useAuthStore();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.background} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Profile Header */}
        <View style={[styles.profileHeader, { backgroundColor: theme.colors.primary }]}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?img=12' }} style={styles.avatar} />
          <Text style={styles.profileName}>Biswajit Sharma</Text>
          <Text style={styles.profileEmail}>biswajit@foodrush.com</Text>
          <View style={styles.statsRow}>
            {[['Orders', '24'], ['Reviews', '8'], ['Saved', '12']].map(([label, val]) => (
              <View key={label} style={styles.statItem}>
                <Text style={styles.statValue}>{val}</Text>
                <Text style={styles.statLabel}>{label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Dark mode toggle */}
        <Pressable
          style={[styles.themeRow, { backgroundColor: theme.colors.card, ...shadows.sm }]}
          onPress={toggleTheme}
        >
          <View style={styles.themeLeft}>
            <View style={[styles.menuIcon, { backgroundColor: theme.colors.tag }]}>
              <Ionicons name={isDark ? 'sunny' : 'moon'} size={20} color={theme.colors.primary} />
            </View>
            <View>
              <Text style={[styles.menuLabel, { color: theme.colors.text }]}>
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </Text>
              <Text style={[styles.menuSub, { color: theme.colors.textSecondary }]}>
                {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={18} color={theme.colors.textTertiary} />
        </Pressable>

        {/* Menu items */}
        <View style={[styles.menuCard, { backgroundColor: theme.colors.card, ...shadows.sm }]}>
          {MENU_ITEMS.map((item, idx) => (
            <React.Fragment key={item.label}>
              <Pressable style={styles.menuRow}>
                <View style={[styles.menuIcon, { backgroundColor: theme.colors.tag }]}>
                  <Ionicons name={item.icon} size={20} color={theme.colors.primary} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.menuLabel, { color: theme.colors.text }]}>{item.label}</Text>
                  <Text style={[styles.menuSub, { color: theme.colors.textSecondary }]}>{item.sub}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color={theme.colors.textTertiary} />
              </Pressable>
              {idx < MENU_ITEMS.length - 1 && (
                <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />
              )}
            </React.Fragment>
          ))}
        </View>

        {/* Logout */}
        <Pressable
          style={[styles.logoutBtn, { backgroundColor: theme.colors.error + '15', borderColor: theme.colors.error + '30' }]}
          onPress={logout}
        >
          <Ionicons name="log-out-outline" size={20} color={theme.colors.error} />
          <Text style={[styles.logoutText, { color: theme.colors.error }]}>Sign Out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  profileHeader: {
    alignItems: 'center',
    paddingTop: spacing['2xl'],
    paddingBottom: spacing['2xl'],
    marginHorizontal: spacing.base,
    marginTop: spacing.md,
    borderRadius: radius.xl,
  },
  avatar: { width: 88, height: 88, borderRadius: 44, borderWidth: 3, borderColor: 'rgba(255,255,255,0.7)', marginBottom: spacing.md },
  profileName: { color: '#fff', fontSize: typography.fontSizes.xl, fontWeight: '800' },
  profileEmail: { color: 'rgba(255,255,255,0.8)', fontSize: typography.fontSizes.sm, marginTop: 2 },
  statsRow: { flexDirection: 'row', gap: spacing['2xl'], marginTop: spacing.lg },
  statItem: { alignItems: 'center' },
  statValue: { color: '#fff', fontSize: typography.fontSizes.lg, fontWeight: '800' },
  statLabel: { color: 'rgba(255,255,255,0.75)', fontSize: typography.fontSizes.xs },

  themeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: spacing.base,
    marginTop: spacing.base,
    padding: spacing.md,
    borderRadius: radius.xl,
  },
  themeLeft: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },

  menuCard: {
    marginHorizontal: spacing.base,
    marginTop: spacing.base,
    borderRadius: radius.xl,
    overflow: 'hidden',
    paddingHorizontal: spacing.md,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.md,
  },
  menuIcon: { width: 40, height: 40, borderRadius: radius.md, alignItems: 'center', justifyContent: 'center' },
  menuLabel: { fontSize: typography.fontSizes.base, fontWeight: '600' },
  menuSub: { fontSize: typography.fontSizes.xs, marginTop: 1 },
  divider: { height: 1 },

  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    marginHorizontal: spacing.base,
    marginTop: spacing.base,
    padding: spacing.md,
    borderRadius: radius.xl,
    borderWidth: 1,
  },
  logoutText: { fontSize: typography.fontSizes.base, fontWeight: '700' },
});
