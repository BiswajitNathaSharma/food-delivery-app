// ─── Color Palette ────────────────────────────────────────────────────────────
export const COLORS = {
  // Brand
  primary: '#FF6B35',       // Vibrant orange
  primaryDark: '#E85D2A',
  primaryLight: '#FF8C60',
  secondary: '#2EC4B6',     // Teal accent
  secondaryDark: '#1AA39A',
  accent: '#FFBF00',        // Golden yellow

  // Neutrals
  white: '#FFFFFF',
  black: '#0A0A0A',

  // Greys
  grey50: '#F9FAFB',
  grey100: '#F3F4F6',
  grey200: '#E5E7EB',
  grey300: '#D1D5DB',
  grey400: '#9CA3AF',
  grey500: '#6B7280',
  grey600: '#4B5563',
  grey700: '#374151',
  grey800: '#1F2937',
  grey900: '#111827',

  // Semantic
  success: '#22C55E',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
};

// ─── Light Theme ──────────────────────────────────────────────────────────────
export const lightTheme = {
  isDark: false,
  colors: {
    primary: COLORS.primary,
    primaryDark: COLORS.primaryDark,
    primaryLight: COLORS.primaryLight,
    secondary: COLORS.secondary,
    accent: COLORS.accent,

    background: '#FAFAFA',
    surface: '#FFFFFF',
    surfaceElevated: '#FFFFFF',
    surfaceSecondary: '#F3F4F6',

    text: '#111827',
    textSecondary: '#4B5563',
    textTertiary: '#9CA3AF',
    textInverse: '#FFFFFF',

    border: '#E5E7EB',
    borderLight: '#F3F4F6',

    tabBar: '#FFFFFF',
    tabBarInactive: '#9CA3AF',
    tabBarActive: COLORS.primary,

    header: COLORS.primary,
    headerText: '#FFFFFF',

    card: '#FFFFFF',
    cardShadow: 'rgba(0,0,0,0.08)',

    badge: COLORS.error,
    success: COLORS.success,
    error: COLORS.error,
    warning: COLORS.warning,

    inputBg: '#F3F4F6',
    inputBorder: '#E5E7EB',
    inputText: '#111827',
    placeholder: '#9CA3AF',

    drawerBg: '#FFFFFF',
    drawerActive: '#FFF3EE',
    drawerActiveText: COLORS.primary,

    skeleton: '#E5E7EB',
    overlay: 'rgba(0,0,0,0.5)',

    gradientStart: '#FF6B35',
    gradientEnd: '#FF8C60',

    star: '#FFBF00',
    tag: '#FFF3EE',
    tagText: COLORS.primary,
  },
};

// ─── Dark Theme ───────────────────────────────────────────────────────────────
export const darkTheme = {
  isDark: true,
  colors: {
    primary: '#FF7A45',
    primaryDark: '#FF6B35',
    primaryLight: '#FF9A70',
    secondary: '#2EC4B6',
    accent: '#FFBF00',

    background: '#0D0D0D',
    surface: '#1A1A1A',
    surfaceElevated: '#222222',
    surfaceSecondary: '#2A2A2A',

    text: '#F9FAFB',
    textSecondary: '#D1D5DB',
    textTertiary: '#6B7280',
    textInverse: '#111827',

    border: '#2A2A2A',
    borderLight: '#222222',

    tabBar: '#1A1A1A',
    tabBarInactive: '#6B7280',
    tabBarActive: '#FF7A45',

    header: '#1A1A1A',
    headerText: '#F9FAFB',

    card: '#1A1A1A',
    cardShadow: 'rgba(0,0,0,0.4)',

    badge: COLORS.error,
    success: '#4ADE80',
    error: '#F87171',
    warning: '#FCD34D',

    inputBg: '#222222',
    inputBorder: '#2A2A2A',
    inputText: '#F9FAFB',
    placeholder: '#6B7280',

    drawerBg: '#1A1A1A',
    drawerActive: '#2A1A10',
    drawerActiveText: '#FF7A45',

    skeleton: '#2A2A2A',
    overlay: 'rgba(0,0,0,0.75)',

    gradientStart: '#FF7A45',
    gradientEnd: '#FF9A70',

    star: '#FFBF00',
    tag: '#2A1A10',
    tagText: '#FF7A45',
  },
};

// ─── Typography ───────────────────────────────────────────────────────────────
export const typography = {
  fontSizes: {
    xs: 11,
    sm: 13,
    base: 15,
    md: 17,
    lg: 20,
    xl: 24,
    '2xl': 28,
    '3xl': 34,
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
  },
};

// ─── Spacing ──────────────────────────────────────────────────────────────────
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
};

// ─── Border Radius ────────────────────────────────────────────────────────────
export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 20,
  '2xl': 28,
  full: 9999,
};

// ─── Shadows ──────────────────────────────────────────────────────────────────
export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  colored: {
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
};
