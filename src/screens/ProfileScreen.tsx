import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";
import { SETTINGS } from "../settings";
import { NavigationProps, User } from "../types";

const ProfileScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const user: User = {
    id: "1",
    name: "Sajithmym",
    email: "Sajithmym@gmail.com",
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleEditProfile = () => {
    // Handle edit profile action
    console.log("Edit profile pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header title="User Profile" />

        <Card title="Profile Information">
          <View style={styles.profileContainer}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarText}>
                  {user.name.charAt(0).toUpperCase()}
                </Text>
              </View>
            </View>

            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userEmail}>{user.email}</Text>
            </View>
          </View>
        </Card>

        <Card title="Account Settings">
          <View style={styles.settingsContainer}>
            <Text style={styles.settingItem}>• Notifications: Enabled</Text>
            <Text style={styles.settingItem}>• Dark Mode: Disabled</Text>
            <Text style={styles.settingItem}>• Language: English</Text>
          </View>
        </Card>

        <View style={styles.buttonContainer}>
          <Button
            title="Edit Profile"
            onPress={handleEditProfile}
            variant="primary"
          />
          <Button title="Go Back" onPress={handleGoBack} variant="outline" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SETTINGS.COLORS.BACKGROUND,
  },
  content: {
    flex: 1,
    padding: SETTINGS.SPACING.MD,
  },
  profileContainer: {
    alignItems: "center",
  },
  avatarContainer: {
    marginBottom: SETTINGS.SPACING.MD,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: SETTINGS.COLORS.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: SETTINGS.TYPOGRAPHY.SIZES.XL,
    fontWeight: SETTINGS.TYPOGRAPHY.WEIGHTS.BOLD,
    color: SETTINGS.COLORS.TEXT.LIGHT,
  },
  userInfo: {
    alignItems: "center",
  },
  userName: {
    fontSize: SETTINGS.TYPOGRAPHY.SIZES.LG,
    fontWeight: SETTINGS.TYPOGRAPHY.WEIGHTS.SEMIBOLD,
    color: SETTINGS.COLORS.TEXT.PRIMARY,
    marginBottom: SETTINGS.SPACING.XS,
  },
  userEmail: {
    fontSize: SETTINGS.TYPOGRAPHY.SIZES.MD,
    color: SETTINGS.COLORS.TEXT.SECONDARY,
  },
  settingsContainer: {
    paddingVertical: SETTINGS.SPACING.SM,
  },
  settingItem: {
    fontSize: SETTINGS.TYPOGRAPHY.SIZES.MD,
    color: SETTINGS.COLORS.TEXT.PRIMARY,
    marginBottom: SETTINGS.SPACING.SM,
  },
  buttonContainer: {
    marginTop: SETTINGS.SPACING.LG,
    gap: SETTINGS.SPACING.SM,
  },
});

export default ProfileScreen;
