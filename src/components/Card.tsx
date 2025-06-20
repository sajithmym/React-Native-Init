import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SETTINGS } from '../settings';
import { CardProps } from '../types';

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  onPress,
}) => {
  const CardComponent = onPress ? TouchableOpacity : View;

  return (
    <CardComponent
      style={styles.card}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {children && <View style={styles.content}>{children}</View>}
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: SETTINGS.COLORS.SURFACE,
    borderRadius: SETTINGS.BORDER_RADIUS.LG,
    padding: SETTINGS.SPACING.MD,
    marginVertical: SETTINGS.SPACING.SM,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    marginBottom: SETTINGS.SPACING.SM,
  },
  title: {
    fontSize: SETTINGS.TYPOGRAPHY.SIZES.LG,
    fontWeight: SETTINGS.TYPOGRAPHY.WEIGHTS.SEMIBOLD,
    color: SETTINGS.COLORS.TEXT.PRIMARY,
    marginBottom: SETTINGS.SPACING.XS,
  },
  subtitle: {
    fontSize: SETTINGS.TYPOGRAPHY.SIZES.SM,
    color: SETTINGS.COLORS.TEXT.SECONDARY,
  },
  content: {
    paddingTop: SETTINGS.SPACING.SM,
  },
});

export default Card;
