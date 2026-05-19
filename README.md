# FoodRush 🍔 - Food Delivery App

A beautiful, fully-featured Food Delivery application built with React Native and Expo. This app features a modern, responsive design with comprehensive features including a complex navigation system, state management, and a rich, dynamic user interface.

## 🌟 Features

*   **Beautiful User Interface**: A modern, premium design with attention to detail, typography, and spacing.
*   **Dynamic Theme System**: Full support for both **Light and Dark Mode** seamlessly integrated across all screens.
*   **Complex Navigation**: Combines Stack, Bottom Tabs, and Drawer navigators for an intuitive user experience.
*   **State Management**: 
    *   **Zustand** for lightweight and fast authentication state.
    *   **React Context API** for managing global Cart and Theme states.
*   **Rich Mock Data**: Comprehensive local data for restaurants, cuisines, menu items, reviews, and promotional banners to provide a real-world feel.
*   **Cart System**: Robust cart functionality with single-restaurant enforcement, quantity adjustments, and price calculations.
*   **Search & Filtering**: Live search capabilities with categorized food exploration.
*   **Interactive Components**: Custom styled components, floating action buttons, animated carousels, and engaging empty states.

## 📸 Screens Included

*   **Onboarding Screen**: Engaging swipeable slides introducing the app.
*   **Authentication (Login)**: Modern login interface with social stubs.
*   **Home Screen**: Features promotional banners, category chips, and a rich list of restaurants.
*   **Restaurant Details**: Hero image headers, categorized menus, and add-to-cart functionality.
*   **Cart Screen**: Itemized cart view with order summary, taxes, and delivery fee calculation.
*   **Search Screen**: Find restaurants and dishes with popular search suggestions.
*   **Orders Screen**: History of past orders with visual status badges.
*   **Profile (Drawer & Tab)**: User statistics, theme toggle, and settings navigation.

## 🛠 Tech Stack

*   **Framework**: [React Native](https://reactnative.dev/) with [Expo (SDK 55)](https://expo.dev/)
*   **Navigation**: [React Navigation v7](https://reactnavigation.org/)
    *   `@react-navigation/native-stack`
    *   `@react-navigation/bottom-tabs`
    *   `@react-navigation/drawer`
*   **State Management**: [Zustand](https://github.com/pmndrs/zustand) & React Context
*   **Icons**: `@expo/vector-icons` (Ionicons)
*   **Storage**: `expo-secure-store` for persistent authentication sessions.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed, along with the Expo CLI.

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd food-delivery-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npm run dev
   # or
   npx expo start
   ```

4. Run the app:
   *   Scan the QR code in your terminal using the **Expo Go** app on your physical device (Android/iOS).
   *   Press `a` to open in an Android Emulator.
   *   Press `i` to open in an iOS Simulator.

## 📁 Project Structure

```text
src/
├── components/       # Reusable UI components (e.g., CustomDrawerContent)
├── constants/        # Global constants (Theme tokens, Mock Data)
├── context/          # React Context providers (CartContext, ThemeContext)
├── navigation/       # Navigation configuration (Root, Auth, Tabs, Drawer, HomeStack)
├── screens/          # Application screens
│   ├── auth/         # Login, Onboarding
│   ├── drawer/       # Settings, Help, MyOrders
│   ├── home/         # HomeScreen, RestaurantDetail, CartScreen
│   └── tabs/         # Profile, Orders, Search
└── store/            # Zustand stores (AuthStore)
```

## 🎨 Theming

The app features a robust design system configured in `src/constants/theme.js`. It defines standard spacing, typography, border radii, shadows, and two complete color palettes for Light and Dark modes. The current theme is applied globally using the custom `ThemeProvider`.

## 📝 License

This project is open-source and available for educational and developmental purposes.
