# 🌤️ Weather App Using WeatherAPI

This is a simple web-based weather application that allows users to check real-time weather data by entering any city, town, or location. It fetches data using the [WeatherAPI](https://www.weatherapi.com/) and displays essential weather details such as temperature, condition, humidity, and wind speed.

## 📦 Features

- 🔍 Search weather by city or location  
- 🌡️ Get real-time temperature, humidity, wind speed  
- 🕒 Shows last updated time from the weather station  
- ⚡ Built using HTML, CSS, JavaScript (Vanilla)  
- ✅ Works globally (supports most cities, zip codes, and coordinates)  

## 🖥️ Live Demo

> You can run this project locally by opening `index.html` in any browser.

## 🚀 Setup Instructions

1. Clone or Download the Repository:  
   `git clone https://github.com/AyushMhaisane/weather-api-app.git`  
   `cd weather-api-app`

2. Create three project files in your folder:  
   - `index.html` – for structure/UI  
   - `style.css` – for styling  
   - `script.js` – JavaScript for API interaction

3. Use your WeatherAPI key:  
   - Get your free API key from https://www.weatherapi.com/signup.aspx  
   - Open `script.js` and replace the existing key:
     ```javascript
     const apiKey = "YOUR_API_KEY_HERE";
     ```

4. Run the app:  
   - Open `index.html` in your browser  
   - Type a city name (e.g., Mumbai, London, Tokyo)  
   - Click **Get Weather** to see results

## 📊 Data to Receive

- Temperature in Celsius  
- Weather condition (text + icon)  
- Humidity in percentage  
- Wind speed in kilometers per hour  
- Last updated time of the report  

## 💡 Future Improvements

- 🔎 Autocomplete suggestions for location  
- 📅 Multi-day forecast (3-day / 7-day)  
- 🌍 Auto-detect location by IP  
- 📱 Mobile responsive design  
- 🌗 Light/Dark theme switch  

## 🧑‍💻 Author

**Ayush Mhaisane**  
Built using pure HTML, CSS, and JavaScript.  
Feel free to contribute or suggest improvements.

## 📃 License

MIT License – Free to use, modify, and distribute.
