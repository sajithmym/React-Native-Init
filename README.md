# React Native Expo Project

A well-structured React Native project built with Expo and TypeScript, following best practices for scalable and maintainable development.

## 🚀 Features

- **TypeScript** - Type-safe development
- **Expo** - Managed React Native workflow
- **Navigation** - React Navigation v6
- **Component Library** - Reusable UI components
- **Utilities** - Helper functions for common tasks
- **Settings** - Centralized configuration
- **Clean Architecture** - Organized folder structure

## 📁 Project Structure

```
├── App.tsx                 # Root component
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Header.tsx
│   ├── screens/           # Screen components
│   │   ├── HomeScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── navigation/        # Navigation configuration
│   │   └── MainNavigator.tsx
│   ├── utils/            # Utility functions
│   │   ├── dateUtils.ts
│   │   ├── stringUtils.ts
│   │   └── index.ts
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── assets/           # Static assets
│   │   └── README.md
│   └── settings.ts       # App configuration and constants
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Getting Started

1. Open [Expo Snack](https://snack.expo.dev)
2. Copy and paste the project files
3. The app will automatically build and run

## 📱 Screens

- **Home Screen** - Welcome screen with interactive examples
- **Profile Screen** - User profile display

## 🎨 Design System

The project includes a comprehensive design system with:

- **Colors** - Primary, secondary, and semantic colors
- **Typography** - Font sizes and weights
- **Spacing** - Consistent spacing scale
- **Border Radius** - Rounded corner values

## 🧩 Components

### Button

Customizable button component with multiple variants:

- Primary
- Secondary
- Outline
- Loading states
- Disabled states

### Card

Container component for grouping related content with:

- Title and subtitle
- Custom content
- Optional press handling

### Header

Page header component with title and optional subtitle

## 🔧 Utilities

- **Date Utils** - Date formatting and manipulation
- **String Utils** - String processing and validation

## 📝 Best Practices

- **TypeScript** - Full type safety
- **Component Composition** - Reusable and composable components
- **Separation of Concerns** - Clear separation between UI, logic, and data
- **Consistent Styling** - Centralized design tokens
- **Clean Code** - Readable and maintainable code structure

## 🚀 Usage in Expo Snack

This project is optimized for [Expo Snack](https://snack.expo.dev) and includes all necessary dependencies. Simply copy the files into a new Snack project and it will run immediately.

# React Native Expo Project Structure - Complete Guide

I'll create an `instruction.txt` file with a comprehensive explanation of your React Native Expo project structure:

```txt
# React Native Expo Project Structure - Complete Guide

## Project Overview

This project follows a well-organized, modular approach to React Native development using Expo. The structure is designed to scale with application complexity while maintaining code readability and separation of concerns.

## Directory Structure

```

/
├── App.tsx # Application entry point
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── src/ # Source code folder
├── assets/ # Static files (images, fonts, etc.)
├── components/ # Reusable UI components
├── navigation/ # Navigation configuration
├── screens/ # Application screens/pages
├── settings.ts # Global app settings/constants
├── types/ # TypeScript interfaces and types
└── utils/ # Utility functions

````

## Core Concepts

### 1. Component Architecture

The project follows a component-based architecture with:
- Shared UI components in `src/components/`
- Full-screen components in `src/screens/`

Components are designed to be:
- Reusable
- Well-typed with TypeScript interfaces
- Styled using React Native's StyleSheet API
- Consistent through the use of design tokens in `settings.ts`

### 2. Navigation

Navigation is implemented using React Navigation:
- Stack navigation defined in `src/navigation/MainNavigator.tsx`
- Screen components referenced directly in navigation configuration
- Navigation props passed to screens for programmatic navigation

### 3. Styling System

The application uses a design system defined in `src/settings.ts`:
- Color palette
- Typography scales
- Spacing system
- Border radius values
- Animation durations

Always use these values instead of hardcoded numbers to maintain consistency.

### 4. TypeScript Integration

The project leverages TypeScript for type safety:
- Interface definitions in `src/types/index.ts`
- Path aliases configured in `tsconfig.json`
- Strict type checking enabled

### 5. Utility Functions

Common helpers are organized in the `src/utils/` directory:
- Date formatting and manipulation in `dateUtils.ts`
- String operations in `stringUtils.ts`
- Barrel exports through `index.ts` for simpler imports

## Development Workflow

### Starting the Project

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run on specific platforms
npm run android
npm run ios
npm run web
````

### Adding a New Screen

1. Create a new file in `src/screens/` (e.g., `SettingsScreen.tsx`)
2. Define your screen component with proper navigation typing
3. Add the screen to `MainNavigator.tsx`:

```typescript
<Stack.Screen
  name="Settings"
  component={SettingsScreen}
  options={{ title: "Settings" }}
/>
```

### Creating a New Component

1. Create a file in components (e.g., `Toggle.tsx`)
2. Define the component's props interface in index.ts
3. Use SETTINGS constants for styling
4. Export the component as the default

### Adding New Utility Functions

1. Choose an appropriate file in utils or create a new one
2. Define and export your functions
3. If creating a new file, add it to the exports in index.ts

## Path Aliases

The project uses TypeScript path aliases for cleaner imports:

```typescript
// Instead of relative imports:
import Button from "../../components/Button";

// Use path aliases:
import Button from "@/components/Button";
```

Available aliases:

- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/screens/*` → `./src/screens/*`
- `@/utils/*` → `./src/utils/*`
- `@/types/*` → `./src/types/*`
- `@/assets/*` → `./src/assets/*`

## File Breakdown

### App.tsx

The root component that:

- Sets up SafeAreaProvider for proper layout
- Initializes the MainNavigator
- Configures StatusBar appearance

### MainNavigator.tsx

Defines the application's navigation structure using React Navigation:

- Stack navigator configuration
- Screen definitions and options
- Navigation theme settings

### src/screens/\*

Each file represents a full application screen:

- Receives navigation props
- Composes UI using components
- Manages screen-specific state
- Handles navigation actions

### src/components/\*

Reusable UI elements:

- Button.tsx: Configurable button with variants
- Card.tsx: Content container with title/subtitle
- Header.tsx: Page title component

### settings.ts

Central configuration for design tokens:

- Color schemes
- Typography scales
- Spacing values
- Animation timings

### src/utils/\*

Pure utility functions:

- dateUtils.ts: Date formatting and manipulation
- stringUtils.ts: String operations and validation

### index.ts

TypeScript interfaces for:

- Component props
- Navigation parameters
- Data models

## Best Practices

1. **Component Structure**

   - Props interface at the top
   - Component logic in the middle
   - StyleSheet definition at the bottom

2. **Styling**

   - Always use SETTINGS constants instead of hardcoded values
   - Keep styles colocated with components
   - Use descriptive style names

3. **Navigation**

   - Type navigation props properly
   - Use screen names as constants to avoid typos

4. **Imports**

   - Use path aliases for cleaner imports
   - Group imports by source (React, libraries, local)

5. **TypeScript**

   - Define types for all props and state
   - Use strict mode for better type safety
   - Export interfaces for reuse

6. **File Structure**
   - Keep related files together
   - Use index files for easier imports
   - Create new directories as needed for organization

## Extending the Project

### Adding State Management

For more complex state management, consider:

- Redux with @reduxjs/toolkit
- MobX
- React Context API for simpler cases

### Adding API Integration

For backend communication:

- Create an `api` folder with service files
- Consider using React Query or SWR for data fetching

### Adding Testing

For component testing:

- Set up Jest with React Native Testing Library
- Create a `__tests__` folder alongside components

### Asset Management

For handling static assets:

- Place images, fonts in the `assets` folder
- Follow the README.md in the assets directory

## Conclusion

This project structure provides a solid foundation for scalable React Native development with Expo. Follow the patterns established here for consistent, maintainable code as your application grows.
