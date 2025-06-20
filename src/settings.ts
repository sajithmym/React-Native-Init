export const SETTINGS = {
  APP: {
    NAME: 'Expo React Native App',
    VERSION: '1.0.0',
  },
  COLORS: {
    PRIMARY: '#007AFF',
    SECONDARY: '#5856D6',
    SUCCESS: '#34C759',
    WARNING: '#FF9500',
    ERROR: '#FF3B30',
    BACKGROUND: '#F2F2F7',
    SURFACE: '#FFFFFF',
    TEXT: {
      PRIMARY: '#000000',
      SECONDARY: '#8E8E93',
      LIGHT: '#FFFFFF',
    },
  },
  SPACING: {
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 24,
    XL: 32,
    XXL: 48,
  },
  TYPOGRAPHY: {
    SIZES: {
      XS: 12,
      SM: 14,
      MD: 16,
      LG: 18,
      XL: 24,
      XXL: 32,
    },
    WEIGHTS: {
      LIGHT: '300' as const,
      REGULAR: '400' as const,
      MEDIUM: '500' as const,
      SEMIBOLD: '600' as const,
      BOLD: '700' as const,
    },
  },
  BORDER_RADIUS: {
    SM: 4,
    MD: 8,
    LG: 12,
    XL: 16,
    ROUND: 50,
  },
  STATUS_BAR: {
    STYLE: 'auto' as const,
  },
  ANIMATION: {
    DURATION: {
      FAST: 200,
      NORMAL: 300,
      SLOW: 500,
    },
  },
} as const;
