import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import Card from '../components/Card';
import Header from '../components/Header';
import { SETTINGS } from '../settings';
import { NavigationProps } from '../types';
import { formatDate } from '../utils/dateUtils';

const HomeScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  const handleNavigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header title="Welcome to React Native" />
        
        <View style={styles.section}>
          <Text style={styles.dateText}>
            Today: {formatDate(new Date())}
          </Text>
        </View>

        <Card
          title="Counter Example"
          subtitle="Tap the buttons to interact"
        >
          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>Count: {counter}</Text>
            <View style={styles.buttonRow}>
              <Button
                title="Increment"
                onPress={handleIncrement}
                variant="primary"
              />
              <Button
                title="Reset"
                onPress={handleReset}
                variant="outline"
              />
            </View>
          </View>
        </Card>

        <Card
          title="Navigation Example"
          subtitle="Navigate to other screens"
          onPress={handleNavigateToProfile}
        >
          <Text style={styles.cardDescription}>
            Tap this card to navigate to the Profile screen
          </Text>
        </Card>

        <View style={styles.section}>
          <Button
            title="Go to Profile"
            onPress={handleNavigateToProfile}
            variant="secondary"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SETTINGS.COLORS.BACKGROUND,
  },
  scrollContent: {
    padding: SETTINGS.SPACING.MD,
  },
  section: {
    marginVertical: SETTINGS.SPACING.MD,
  },
  dateText: {
    fontSize: SETTINGS.TYPOGRAPHY.SIZES.SM,
    color: SETTINGS.COLORS.TEXT.SECONDARY,
    textAlign: 'center',
  },
  counterContainer: {
    alignItems: 'center',
  },
  counterText: {
    fontSize: SETTINGS.TYPOGRAPHY.SIZES.XL,
    fontWeight: SETTINGS.TYPOGRAPHY.WEIGHTS.BOLD,
    color: SETTINGS.COLORS.TEXT.PRIMARY,
    marginBottom: SETTINGS.SPACING.MD,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: SETTINGS.SPACING.SM,
  },
  cardDescription: {
    fontSize: SETTINGS.TYPOGRAPHY.SIZES.SM,
    color: SETTINGS.COLORS.TEXT.SECONDARY,
    textAlign: 'center',
  },
});

export default HomeScreen;
