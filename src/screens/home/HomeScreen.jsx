import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext';
import { BANNERS, CATEGORIES, RESTAURANTS } from '../../constants/mockData';
import { radius, shadows, spacing, typography } from '../../constants/theme';
import { useCart } from '../../context/CartContext';

const { width } = Dimensions.get('window');
const BANNER_WIDTH = width - spacing.base * 2;

function StarRating({ rating, size = 12 }) {
  const { theme } = useTheme();
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Ionicons
          key={i}
          name={i < full ? 'star' : half && i === full ? 'star-half' : 'star-outline'}
          size={size}
          color={theme.colors.star}
        />
      ))}
    </View>
  );
}

function PromoBanner({ item }) {
  const { theme } = useTheme();
  return (
    <View
      style={[
        styles.bannerCard,
        { backgroundColor: item.gradient[0], width: BANNER_WIDTH },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.bannerEmoji}>{item.emoji}</Text>
        <Text style={styles.bannerTitle}>{item.title}</Text>
        <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
        <View style={styles.bannerCodeChip}>
          <Text style={styles.bannerCode}>{item.code}</Text>
        </View>
      </View>
    </View>
  );
}

function CategoryChip({ item, isSelected, onPress }) {
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.categoryChip,
        {
          backgroundColor: isSelected ? theme.colors.primary : theme.colors.surfaceSecondary,
          borderColor: isSelected ? theme.colors.primary : theme.colors.border,
        },
      ]}
    >
      <Text style={styles.categoryEmoji}>{item.icon}</Text>
      <Text
        style={[
          styles.categoryName,
          { color: isSelected ? '#fff' : theme.colors.textSecondary },
        ]}
      >
        {item.name}
      </Text>
    </Pressable>
  );
}

function RestaurantCard({ item, onPress }) {
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={() => onPress(item)}
      style={({ pressed }) => [
        styles.restaurantCard,
        {
          backgroundColor: theme.colors.card,
          opacity: pressed ? 0.93 : 1,
          ...shadows.md,
          shadowColor: theme.colors.cardShadow,
        },
      ]}
    >
      <View style={styles.restaurantImageContainer}>
        <Image source={{ uri: item.image }} style={styles.restaurantImage} />
        {!item.isOpen && (
          <View style={styles.closedOverlay}>
            <Text style={styles.closedText}>Closed</Text>
          </View>
        )}
        {item.isFeatured && (
          <View style={[styles.featuredBadge, { backgroundColor: theme.colors.primary }]}>
            <Text style={styles.featuredBadgeText}>Featured</Text>
          </View>
        )}
      </View>
      <View style={styles.restaurantInfo}>
        <View style={styles.restaurantRow}>
          <Text style={[styles.restaurantName, { color: theme.colors.text }]} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={[styles.priceRange, { color: theme.colors.textSecondary }]}>
            {item.minOrder} - {item.maxOrder}
          </Text>
        </View>
        <Text style={[styles.cuisineText, { color: theme.colors.textSecondary }]} numberOfLines={1}>
          {item.cuisine}
        </Text>
        <View style={styles.restaurantMeta}>
          <View style={styles.ratingRow}>
            <StarRating rating={item.rating} />
            <Text style={[styles.ratingText, { color: theme.colors.text }]}>
              {item.rating} ({item.reviewCount.toLocaleString()})
            </Text>
          </View>
        </View>
        <View style={styles.deliveryRow}>
          <View style={styles.metaChip}>
            <Ionicons name="time-outline" size={12} color={theme.colors.textTertiary} />
            <Text style={[styles.metaChipText, { color: theme.colors.textSecondary }]}>
              {item.deliveryTime}
            </Text>
          </View>
          <View style={styles.metaChip}>
            <Ionicons name="bicycle-outline" size={12} color={theme.colors.textTertiary} />
            <Text style={[styles.metaChipText, { color: theme.colors.textSecondary }]}>
              {item.deliveryFee}
            </Text>
          </View>
          <View style={styles.metaChip}>
            <Ionicons name="location-outline" size={12} color={theme.colors.textTertiary} />
            <Text style={[styles.metaChipText, { color: theme.colors.textSecondary }]}>
              {item.distance}
            </Text>
          </View>
        </View>
        {item.tags.length > 0 && (
          <View style={styles.tagsRow}>
            {item.tags.map((tag) => (
              <View key={tag} style={[styles.tag, { backgroundColor: theme.colors.tag }]}>
                <Text style={[styles.tagText, { color: theme.colors.tagText }]}>{tag}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </Pressable>
  );
}

export default function HomeScreen({ navigation }) {
  const { theme, isDark, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('c1');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = RESTAURANTS.filter((r) => {
    const matchCat =
      selectedCategory === 'c1' ||
      CATEGORIES.find((c) => c.id === selectedCategory)?.name === r.category;
    const matchSearch =
      searchQuery === '' ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('RestaurantDetail', { restaurantId: restaurant.id });
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
      edges={['top']}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />

      {/* ── Header ── */}
      <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
        <View>
          <Text style={[styles.headerGreeting, { color: theme.colors.textTertiary }]}>
            Deliver to 📍
          </Text>
          <Text style={[styles.headerLocation, { color: theme.colors.text }]}>
            123 Main Street
          </Text>
        </View>
        <View style={styles.headerActions}>
          <Pressable
            onPress={toggleTheme}
            style={[styles.iconBtn, { backgroundColor: theme.colors.surfaceSecondary }]}
          >
            <Ionicons
              name={isDark ? 'sunny' : 'moon'}
              size={20}
              color={theme.colors.primary}
            />
          </Pressable>
          <Pressable
            style={[styles.iconBtn, { backgroundColor: theme.colors.surfaceSecondary }]}
            onPress={() => navigation.navigate('Cart')}
          >
            <Ionicons name="cart-outline" size={20} color={theme.colors.primary} />
            {totalItems > 0 && (
              <View style={[styles.cartBadge, { backgroundColor: theme.colors.badge }]}>
                <Text style={styles.cartBadgeText}>{totalItems}</Text>
              </View>
            )}
          </Pressable>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ── Search ── */}
        <View style={[styles.searchContainer, { backgroundColor: theme.colors.inputBg, borderColor: theme.colors.inputBorder }]}>
          <Ionicons name="search" size={18} color={theme.colors.placeholder} />
          <TextInput
            style={[styles.searchInput, { color: theme.colors.inputText }]}
            placeholder="Search restaurants, cuisines..."
            placeholderTextColor={theme.colors.placeholder}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <Pressable onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={18} color={theme.colors.placeholder} />
            </Pressable>
          )}
        </View>

        {/* ── Promo Banners ── */}
        {searchQuery === '' && (
          <View style={styles.sectionBlock}>
            <FlatList
              data={BANNERS}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(b) => b.id}
              renderItem={({ item }) => <PromoBanner item={item} />}
              contentContainerStyle={{ gap: spacing.base }}
              snapToInterval={BANNER_WIDTH + spacing.base}
              decelerationRate="fast"
            />
          </View>
        )}

        {/* ── Categories ── */}
        <View style={styles.sectionBlock}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Cuisines</Text>
          <FlatList
            data={CATEGORIES}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(c) => c.id}
            renderItem={({ item }) => (
              <CategoryChip
                item={item}
                isSelected={selectedCategory === item.id}
                onPress={() => setSelectedCategory(item.id)}
              />
            )}
            contentContainerStyle={{ gap: spacing.sm, paddingRight: spacing.base }}
          />
        </View>

        {/* ── Restaurants List ── */}
        <View style={[styles.sectionBlock, { paddingBottom: spacing['3xl'] }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
              {selectedCategory === 'c1' ? 'All Restaurants' : CATEGORIES.find(c => c.id === selectedCategory)?.name}
            </Text>
            <Text style={[styles.sectionCount, { color: theme.colors.textTertiary }]}>
              {filtered.length} places
            </Text>
          </View>
          {filtered.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              item={restaurant}
              onPress={handleRestaurantPress}
            />
          ))}
          {filtered.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>🍽️</Text>
              <Text style={[styles.emptyTitle, { color: theme.colors.text }]}>No results found</Text>
              <Text style={[styles.emptySubtitle, { color: theme.colors.textSecondary }]}>
                Try a different category or search term
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
  },
  headerGreeting: { fontSize: typography.fontSizes.xs, fontWeight: typography.fontWeights.medium },
  headerLocation: {
    fontSize: typography.fontSizes.base,
    fontWeight: typography.fontWeights.bold,
    marginTop: 2,
  },
  headerActions: { flexDirection: 'row', gap: spacing.sm },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: { color: '#fff', fontSize: 9, fontWeight: '700' },

  // Search
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginHorizontal: spacing.base,
    marginBottom: spacing.base,
    paddingHorizontal: spacing.md,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    borderRadius: radius.lg,
    borderWidth: 1,
  },
  searchInput: { flex: 1, fontSize: typography.fontSizes.base },

  // Sections
  sectionBlock: { paddingHorizontal: spacing.base, marginBottom: spacing.base },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: { fontSize: typography.fontSizes.md, fontWeight: typography.fontWeights.bold },
  sectionCount: { fontSize: typography.fontSizes.sm },

  // Banners
  bannerCard: {
    borderRadius: radius.xl,
    padding: spacing.lg,
    minHeight: 140,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerEmoji: { fontSize: 36, marginBottom: 4 },
  bannerTitle: { fontSize: typography.fontSizes['2xl'], fontWeight: '800', color: '#fff' },
  bannerSubtitle: { fontSize: typography.fontSizes.sm, color: 'rgba(255,255,255,0.85)', marginTop: 2 },
  bannerCodeChip: {
    marginTop: spacing.sm,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    borderRadius: radius.full,
  },
  bannerCode: { color: '#fff', fontWeight: '700', fontSize: typography.fontSizes.sm },

  // Categories
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
    borderWidth: 1,
  },
  categoryEmoji: { fontSize: 16 },
  categoryName: { fontSize: typography.fontSizes.sm, fontWeight: typography.fontWeights.medium },

  // Restaurant Card
  restaurantCard: {
    borderRadius: radius.xl,
    marginBottom: spacing.base,
    overflow: 'hidden',
  },
  restaurantImageContainer: { position: 'relative' },
  restaurantImage: { width: '100%', height: 180 },
  closedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closedText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  featuredBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.full,
  },
  featuredBadgeText: { color: '#fff', fontSize: 11, fontWeight: '700' },

  restaurantInfo: { padding: spacing.md },
  restaurantRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  restaurantName: { fontSize: typography.fontSizes.md, fontWeight: typography.fontWeights.bold, flex: 1 },
  priceRange: { fontSize: typography.fontSizes.sm, marginLeft: spacing.sm },
  cuisineText: { fontSize: typography.fontSizes.sm, marginTop: 2 },

  restaurantMeta: { flexDirection: 'row', alignItems: 'center', marginTop: spacing.sm, gap: spacing.sm },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  ratingText: { fontSize: typography.fontSizes.xs, fontWeight: typography.fontWeights.medium },

  deliveryRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginTop: spacing.sm },
  metaChip: { flexDirection: 'row', alignItems: 'center', gap: 3 },
  metaChipText: { fontSize: typography.fontSizes.xs },

  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs, marginTop: spacing.sm },
  tag: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: radius.full },
  tagText: { fontSize: 11, fontWeight: '600' },

  // Empty State
  emptyState: { alignItems: 'center', paddingVertical: spacing['3xl'] },
  emptyEmoji: { fontSize: 48, marginBottom: spacing.md },
  emptyTitle: { fontSize: typography.fontSizes.lg, fontWeight: '700', marginBottom: spacing.sm },
  emptySubtitle: { fontSize: typography.fontSizes.base, textAlign: 'center' },
});
