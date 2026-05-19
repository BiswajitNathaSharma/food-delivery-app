import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuthStore from "../../store/authStore";
import { useTheme } from "../../context/ThemeContext";
import { radius, shadows, spacing, typography } from "../../constants/theme";

export default function LoginScreen() {
  const { login } = useAuthStore();
  const { theme, isDark, toggleTheme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.background}
      />
      <Pressable
        style={[
          styles.themeToggle,
          { backgroundColor: theme.colors.surfaceSecondary },
        ]}
        onPress={toggleTheme}
      >
        <Ionicons
          name={isDark ? "sunny" : "moon"}
          size={20}
          color={theme.colors.primary}
        />
      </Pressable>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 24}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.content}>
              {/* Header */}
              <View style={styles.header}>
                <View
                  style={[
                    styles.logoCircle,
                    {
                      backgroundColor: theme.colors.primary,
                      ...shadows.colored,
                    },
                  ]}
                >
                  <Text style={styles.logoEmoji}>🍔</Text>
                </View>

                <Text style={[styles.appName, { color: theme.colors.text }]}>
                  FoodRush
                </Text>

                <Text
                  style={[
                    styles.tagline,
                    { color: theme.colors.textSecondary },
                  ]}
                >
                  Delicious food, delivered fast
                </Text>
              </View>

              {/* Form Card */}
              <View
                style={[
                  styles.formCard,
                  {
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.colors.border,
                  },
                ]}
              >
                <View
                  style={[
                    styles.inputWrapper,
                    {
                      backgroundColor: theme.colors.inputBg,
                      borderColor: theme.colors.inputBorder,
                    },
                  ]}
                >
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color={theme.colors.placeholder}
                  />

                  <TextInput
                    style={[styles.input, { color: theme.colors.inputText }]}
                    placeholder="Email address"
                    placeholderTextColor={theme.colors.placeholder}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <View
                  style={[
                    styles.inputWrapper,
                    {
                      backgroundColor: theme.colors.inputBg,
                      borderColor: theme.colors.inputBorder,
                    },
                  ]}
                >
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color={theme.colors.placeholder}
                  />

                  <TextInput
                    style={[styles.input, { color: theme.colors.inputText }]}
                    placeholder="Password"
                    placeholderTextColor={theme.colors.placeholder}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPw}
                  />

                  <Pressable onPress={() => setShowPw((p) => !p)}>
                    <Ionicons
                      name={showPw ? "eye-off-outline" : "eye-outline"}
                      size={20}
                      color={theme.colors.placeholder}
                    />
                  </Pressable>
                </View>

                <Pressable
                  style={({ pressed }) => [
                    styles.loginBtn,
                    {
                      backgroundColor: theme.colors.primary,
                      opacity: pressed ? 0.9 : 1,
                      ...shadows.colored,
                    },
                  ]}
                  onPress={login}
                >
                  <Text style={styles.loginBtnText}>Sign In</Text>

                  <Ionicons name="arrow-forward" size={20} color="#fff" />
                </Pressable>

                <View style={styles.dividerRow}>
                  <View
                    style={[
                      styles.divider,
                      { backgroundColor: theme.colors.border },
                    ]}
                  />

                  <Text
                    style={[
                      styles.dividerText,
                      { color: theme.colors.textTertiary },
                    ]}
                  >
                    OR CONTINUE WITH
                  </Text>

                  <View
                    style={[
                      styles.divider,
                      { backgroundColor: theme.colors.border },
                    ]}
                  />
                </View>

                <View style={styles.socialRow}>
                  {["logo-google", "logo-apple", "logo-facebook"].map(
                    (icon) => (
                      <Pressable
                        key={icon}
                        style={[
                          styles.socialBtn,
                          {
                            backgroundColor: theme.colors.surfaceSecondary,
                            borderColor: theme.colors.border,
                          },
                        ]}
                        onPress={login}
                      >
                        <Ionicons
                          name={icon}
                          size={22}
                          color={theme.colors.text}
                        />
                      </Pressable>
                    ),
                  )}
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing["3xl"],
  },

  header: {
    alignItems: "center",
    marginBottom: spacing["3xl"],
  },

  themeToggle: {
    position: "absolute",
    top: 56,
    right: spacing.base,
    width: 42,
    height: 42,
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },

  logoCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },

  logoEmoji: {
    fontSize: 52,
  },

  appName: {
    fontSize: typography.fontSizes["4xl"],
    fontWeight: "800",
    letterSpacing: 0.5,
    marginBottom: spacing.sm,
  },

  tagline: {
    fontSize: typography.fontSizes.md,
    textAlign: "center",
    lineHeight: 22,
  },

  formCard: {
    borderWidth: 1,
    borderRadius: radius["2xl"],
    padding: spacing.xl,
    gap: spacing.lg,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    borderWidth: 1,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.lg,
    height: 60,
  },

  input: {
    flex: 1,
    fontSize: typography.fontSizes.base,
  },

  loginBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    height: 58,
    borderRadius: radius.xl,
    marginTop: spacing.sm,
  },

  loginBtnText: {
    color: "#fff",
    fontSize: typography.fontSizes.md,
    fontWeight: "700",
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },

  divider: {
    flex: 1,
    height: 1,
  },

  dividerText: {
    fontSize: typography.fontSizes.xs,
    fontWeight: "600",
    letterSpacing: 1,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.md,
  },

  socialBtn: {
    width: 58,
    height: 58,
    borderRadius: radius.xl,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
