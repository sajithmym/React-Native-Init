import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";
import { SETTINGS } from "../settings";
import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
}) => {
  const getButtonStyle = (): ViewStyle[] => {
    const baseStyle: ViewStyle[] = [styles.button];

    if (variant === "secondary") {
      baseStyle.push(styles.secondaryButton);
    } else if (variant === "outline") {
      baseStyle.push(styles.outlineButton);
    } else {
      baseStyle.push(styles.primaryButton);
    }

    if (disabled) {
      baseStyle.push(styles.disabledButton);
    }

    return baseStyle;
  };

  const getTextStyle = (): TextStyle[] => {
    const baseStyle: TextStyle[] = [styles.buttonText];

    if (variant === "outline") {
      baseStyle.push(styles.outlineButtonText);
    } else {
      baseStyle.push(styles.primaryButtonText);
    }

    if (disabled) {
      baseStyle.push(styles.disabledButtonText);
    }

    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variant === "outline"
              ? SETTINGS.COLORS.PRIMARY
              : SETTINGS.COLORS.TEXT.LIGHT
          }
          size="small"
        />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: SETTINGS.SPACING.LG,
    paddingVertical: SETTINGS.SPACING.SM,
    borderRadius: SETTINGS.BORDER_RADIUS.MD,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
  },
  primaryButton: {
    backgroundColor: SETTINGS.COLORS.PRIMARY,
  },
  secondaryButton: {
    backgroundColor: SETTINGS.COLORS.SECONDARY,
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: SETTINGS.COLORS.PRIMARY,
  },
  disabledButton: {
    backgroundColor: SETTINGS.COLORS.TEXT.SECONDARY,
    opacity: 0.6,
  },
  buttonText: {
    fontSize: SETTINGS.TYPOGRAPHY.SIZES.MD,
    fontWeight: SETTINGS.TYPOGRAPHY.WEIGHTS.MEDIUM,
  },
  primaryButtonText: {
    color: SETTINGS.COLORS.TEXT.LIGHT,
  },
  outlineButtonText: {
    color: SETTINGS.COLORS.PRIMARY,
  },
  disabledButtonText: {
    color: SETTINGS.COLORS.TEXT.LIGHT,
  },
});

export default Button;
