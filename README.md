# Mentory

A cross-platform React Native app built with TypeScript to display real-time weather data. The app allows users to search for a city's weather, view current location weather, and toggle between Celsius and Fahrenheit.

---

## Features
### **Home Screen**
- Search for a city's weather with auto-suggestions as you type.
- Fetch weather for the current location using geolocation.

### **Details Screen**
- Displays detailed weather information, such as:
  - Humidity
  - Wind speed
  - Sunrise and sunset times
- Dynamically handles unavailable data.

### **Settings Screen**
- Toggle between Celsius and Fahrenheit temperature units.
- Persistent settings saved between app launches.

### **Error Handling**
- Alerts users if location access is denied or the weather API request fails.
- Prevents app crashes for network or geolocation issues.

---
## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or Yarn
- Expo CLI
- An OpenWeatherMap API key
- A GeoNames Search Webservice username

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/obisopulu/mentory.git
   cd mentory
   
2. Install dependencies:
   ```bash
   npm i
   
2. Run App:
   ```bash
   npx expo start