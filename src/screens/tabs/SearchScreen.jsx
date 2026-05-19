import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext';
import { RESTAURANTS, SEARCH_SUGGESTIONS } from '../../constants/mockData';
import { radius, spacing, typography } from '../../constants/theme';

export default function SearchScreen({ navigation }) {
  const { theme, isDark } = useTheme();
  const [query, setQuery] = useState('');

  const results = query.length > 1
    ? RESTAURANTS.filter(
        (r) =>
          r.name.toLowerCase().includes(query.toLowerCase()) ||
          r.cuisine.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.background} />

      <Text style={[styles.title, { color: theme.colors.text }]}>Search</Text>

      {/* Search bar */}
      <View style={[styles.searchBar, { backgroundColor: theme.colors.inputBg, borderColor: theme.colors.inputBorder }]}>
        <Ionicons name="search" size={18} color={theme.colors.placeholder} />
        <TextInput
          style={[styles.input, { color: theme.colors.inputText }]}
          placeholder="Restaurants, cuisines, dishes..."
          placeholderTextColor={theme.colors.placeholder}
          value={query}
          onChangeText={setQuery}
          autoFocus
        />
        {query.length > 0 && (
          <Pressable onPress={() => setQuery('')}>
            <Ionicons name="close-circle" size={18} color={theme.colors.placeholder} />
          </Pressable>
        )}
      </View>

      {/* Suggestions or results */}
      {query.length < 2 ? (
        <View style={styles.suggestionsContainer}>
          <Text style={[styles.sectionLabel, { color: theme.colors.textSecondary }]}>Popular Searches</Text>
          <View style={styles.chips}>
            {SEARCH_SUGGESTIONS.map((s) => (
              <Pressable
                key={s}
                style={[styles.chip, { backgroundColor: theme.colors.surfaceSecondary, borderColor: theme.colors.border }]}
                onPress={() => setQuery(s)}
              >
                <Ionicons name="trending-up-outline" size={14} color={theme.colors.primary} />
                <Text style={[styles.chipText, { color: theme.colors.text }]}>{s}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(r) => r.id}
          contentContainerStyle={{ padding: spacing.base }}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>🔍</Text>
              <Text style={[styles.emptyText, { color: theme.colors.text }]}>No results for "{query}"</Text>
            </View>
          }
          renderItem={({ item }) => (
            <Pressable
              style={[styles.resultRow, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
              onPress={() => navigation.navigate('Home', { screen: 'RestaurantDetail', params: { restaurantId: item.id } })}
            >
              <View style={[styles.resultIcon, { backgroundColor: theme.colors.tag }]}>
                <Text style={{ fontSize: 24 }}>🍽️</Text>
              </View>
              <View style={styles.resultInfo}>
                <Text style={[styles.resultName, { color: theme.colors.text }]}>{item.name}</Text>
                <Text style={[styles.resultCuisine, { color: theme.colors.textSecondary }]} numberOfLines={1}>
                  {item.cuisine}
                </Text>
                <View style={styles.resultMeta}>
                  <Ionicons name="star" size={12} color={theme.colors.star} />
                  <Text style={[styles.resultMetaText, { color: theme.colors.textSecondary }]}>{item.rating}</Text>
                  <Text style={[styles.resultMetaText, { color: theme.colors.textTertiary }]}>• {item.deliveryTime}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={18} color={theme.colors.textTertiary} />
            </Pressable>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: typography.fontSizes['2xl'], fontWeight: '800', paddingHorizontal: spacing.base, paddingVertical: spacing.md },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginHorizontal: spacing.base,
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
    borderRadius: radius.xl,
    borderWidth: 1,
  },
  input: { flex: 1, fontSize: typography.fontSizes.base },

  suggestionsContainer: { paddingHorizontal: spacing.base },
  sectionLabel: { fontSize: typography.fontSizes.sm, fontWeight: '600', marginBottom: spacing.md },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
    borderWidth: 1,
  },
  chipText: { fontSize: typography.fontSizes.sm, fontWeight: '500' },

  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    marginBottom: spacing.md,
  },
  resultIcon: { width: 52, height: 52, borderRadius: radius.md, alignItems: 'center', justifyContent: 'center' },
  resultInfo: { flex: 1 },
  resultName: { fontSize: typography.fontSizes.base, fontWeight: '700' },
  resultCuisine: { fontSize: typography.fontSizes.xs, marginTop: 2 },
  resultMeta: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  resultMetaText: { fontSize: typography.fontSizes.xs },

  emptyState: { alignItems: 'center', paddingTop: spacing['3xl'] },
  emptyEmoji: { fontSize: 48, marginBottom: spacing.md },
  emptyText: { fontSize: typography.fontSizes.md, fontWeight: '600' },
});
