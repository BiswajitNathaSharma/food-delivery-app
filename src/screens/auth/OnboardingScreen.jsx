import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAuthStore from '../../store/authStore';
import { useTheme } from '../../context/ThemeContext';
import { radius, shadows, spacing, typography } from '../../constants/theme';

const { width } = Dimensions.get('window');

const SLIDES = [
  {
    id: '1',
    emoji: '🍔',
    title: 'Top Restaurants',
    subtitle: 'Discover hundreds of local & premium restaurants, all in one place',
    bg: '#FF6B35',
  },
  {
    id: '2',
    emoji: '⚡',
    title: 'Lightning Fast',
    subtitle: 'Real-time tracking and super-fast delivery right to your doorstep',
    bg: '#2EC4B6',
  },
  {
    id: '3',
    emoji: '💳',
    title: 'Easy Payments',
    subtitle: 'Pay with cards, wallets, or cash – completely secure & simple',
    bg: '#8B5CF6',
  },
];

export default function OnboardingScreen({ navigation }) {
  const { login } = useAuthStore();
  const { theme, isDark } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      <FlatList
        data={SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          setActiveSlide(Math.round(e.nativeEvent.contentOffset.x / width));
        }}
        keyExtractor={(s) => s.id}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <View style={[styles.emojiCircle, { backgroundColor: item.bg }]}>
              <Text style={styles.slideEmoji}>{item.emoji}</Text>
            </View>
            <Text style={[styles.slideTitle, { color: theme.colors.text }]}>{item.title}</Text>
            <Text style={[styles.slideSubtitle, { color: theme.colors.textSecondary }]}>{item.subtitle}</Text>
          </View>
        )}
      />

      {/* Dots */}
      <View style={styles.dotsRow}>
        {SLIDES.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor: i === activeSlide ? theme.colors.primary : theme.colors.border,
                width: i === activeSlide ? 24 : 8,
              },
            ]}
          />
        ))}
      </View>

      <View style={styles.actions}>
        <Pressable
          style={({ pressed }) => [
            styles.getStartedBtn,
            { backgroundColor: theme.colors.primary, opacity: pressed ? 0.88 : 1, ...shadows.colored },
          ]}
          onPress={login}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.signinLink, { color: theme.colors.textSecondary }]}>
            Already have an account?{' '}
            <Text style={{ color: theme.colors.primary, fontWeight: '700' }}>Sign in</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing['2xl'],
  },
  emojiCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing['2xl'],
  },
  slideEmoji: { fontSize: 72 },
  slideTitle: { fontSize: typography.fontSizes['2xl'], fontWeight: '800', textAlign: 'center', marginBottom: spacing.md },
  slideSubtitle: { fontSize: typography.fontSizes.base, textAlign: 'center', lineHeight: 24 },

  dotsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm, marginBottom: spacing.xl },
  dot: { height: 8, borderRadius: 4 },

  actions: { paddingHorizontal: spacing['2xl'], gap: spacing.md, paddingBottom: spacing.xl },
  getStartedBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
    borderRadius: radius.xl,
  },
  getStartedText: { color: '#fff', fontSize: typography.fontSizes.md, fontWeight: '700' },
  signinLink: { textAlign: 'center', fontSize: typography.fontSizes.sm },
});
