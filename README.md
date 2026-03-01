# Kulay - Add to Cart by neil-justin

My submission entry for Kulay's mini task

##  Download Android APK

[![Download APK](https://img.shields.io/badge/Download-Android%20APK-green?style=for-the-badge&logo=android)](httRecordingps://github.com/neil-justin/kulay-add-to-cart/releases/download/v1.0.0/kulay-add-to-cart-v1.0.0.apk)

**Latest Version:** v1.0.0 | **Size:** ~81MB

### Installation Instructions:
1. **Download** the APK using the button above
2. **Enable** "Install from unknown sources" in your Android device settings
3. **Open** the downloaded APK file to install
4. **Launch** the Kulay app and start shopping! 🛒

> 💡 **Alternative:** Check out [all releases](https://github.com/neil-justin/kulay-add-to-cart/releases) for version history

## App Preview

### Mobile App Screenshots
<div align="center">

**Products tab**

**Cart tab**

</div>

### Web View Screenshot  
<div align="center">

**Products tab**

**Cart tab**

</div>

## Tech Stack

- **React Native** (using Expo)
- **NativeWind** - Tailwind CSS for React Native
- **TypeScript** - Type safety and better development experience
- **Expo Router** - File-based navigation system

## Project Features

- **Scalable folder structure** - Organized by feature domains (components, hooks, context, interfaces, constants)
- **Type aliases** for cleaner importing syntax using `@/` path mapping via babel-plugin-module-resolver
- **Reusable components** - Modular UI components for products, cart, vouchers, loading states, and errors
- **Custom hooks** - `useProducts`, `useCurrencyConverter`, and `useCart` for state management
- **Strongly typed interfaces** - Product, Cart, Currency types for type safety
- **Constants management** - Centralized API endpoints, voucher codes, and currency configuration

## External APIs Used

- **[FakeStore API](https://fakestoreapi.com/)** - Products listing (`https://fakestoreapi.com/products`)
- **[Frankfurter API](https://frankfurter.dev/)** - Currency conversion from USD to PHP (`https://api.frankfurter.app/latest`)

## Requirements

- [x] **1. Static Products List**
  - Create at least 4 static products.
  - Each product should have the following fields:
    - productName (string)
    - description (string)
    - price (number)

- [x] **2. Add to Cart Functionality**
  - Allow users to add products to cart.
  - Allow users to remove individual products from cart.

- [x] **3. Cart Display**
  - Display the number of items in the cart (real-time).
  - Show all items in the cart with:
    - Product name
    - Price
  - Display the total amount of all cart items (real-time updates required).

- [x] **4. Bonus (Optional) - Voucher Feature**
  - Add an input field to apply a voucher code.
  - If the user enters discount10, apply a 10% discount to the total.
  - Show the updated discounted total clearly.

- [x] **5. Hooks Usage**
  - Showcase the use of different React Hooks such as:
    - useState
    - useEffect
    - useMemo (if applicable)
    - useContext or custom hooks (optional bonus)

- [x] **6. Layout and Styling**
  - Use Tailwind CSS for React Native for styling/layout

## Output

- [x] Push your code to a public GitHub repository and share the link.
- [x] Export and include a working Android APK build.

## Implementation Details

### Context & State Management
- **CartContext** - Global cart state using React Context API with useContext hook
- **Custom useCart hook** - Encapsulates cart operations (add, remove, update quantity, clear, voucher management)

### Custom Hooks Implemented
- **useProducts** - Fetches products from FakeStore API with loading and error states
- **useCurrencyConverter** - Real-time USD to PHP currency conversion with fallback rates
- **useCart** - Cart state management with TypeScript support

### Components Structure
- **Products**: ProductCard, ProductList
- **Cart**: CartList, CartSummary, CartTabLabel, EmptyCart  
- **Voucher**: VoucherInput with validation
- **Common**: Loading, Error components for better UX

### React Hooks Usage
- **useState** - Local component state management
- **useEffect** - API calls and side effects
- **useContext** - Global cart state access
- **useMemo** - Performance optimization for calculations
- **Custom hooks** - Reusable logic encapsulation

## Improvement Ideas

- **TanStack Query** for fetching instead of custom React hooks and useEffect
- **ARIA labels** and keyboard support for better accessibility
- **Offline support** with AsyncStorage (or something similar) for cart persistence
- **Advanced error boundaries** for better error handling
- **Animation support** using React Native Reanimated for smooth transitions

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
