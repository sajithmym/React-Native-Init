import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './src/navigation/MainNavigator';
import { SETTINGS } from './src/settings';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainNavigator />
      <StatusBar style={SETTINGS.STATUS_BAR.STYLE} />
    </SafeAreaProvider>
  );
}
