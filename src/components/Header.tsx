import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SETTINGS } from '../settings';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: SETTINGS.SPACING.LG,
    paddingVertical: SETTINGS.SPACING.MD,
  },
  title: {
    fontSize: SETTINGS.TYPOGRAPHY.SIZES.XXL,
    fontWeight: SETTINGS.TYPOGRAPHY.WEIGHTS.BOLD,
    color: SETTINGS.COLORS.TEXT.PRIMARY,
    textAlign: 'center',
    marginBottom: SETTINGS.SPACING.XS,
  },
  subtitle: {
    fontSize: SETTINGS.TYPOGRAPHY.SIZES.MD,
    color: SETTINGS.COLORS.TEXT.SECONDARY,
    textAlign: 'center',
  },
});

export default Header;
