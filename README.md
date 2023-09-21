# Cryptocurrency Rate App made with React 🪙
Application made with React for Bitcoin Romania's recruitment process, the main scope of which is showcasing different cryptocurrencies and the current rates in real-time using CoinGecko public API.

## 📑 Table of Contents

**[📃 First Time Installation](#-first-time-installation)**<br>
**[📱Running The App](#-running-the-app)**<br>
**[₿ Features](#-features)**<br>

### ⚡ Technologies and Utilities
![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

<img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" />


## 📃 First Time Installation

- Make a copy of the repo in a location of your choosing
- Open a terminal inside of the code base and run `npm install --legacy-peer-deps` to install all dependencies
- The --legacy-peer-deps part helps install old versions of MUI and ChartJS, even though the React version is 18.0.0+
- Installation Completed!

## 📱 Running the app
- Open a terminal inside the code base and run `npm run build`
- Then run `serve -s build`
- (Optional: If running development server) Open a terminal and inside run `npm start`
- You can also preview the project in Vercel using the link https://btc-app-mu.vercel.app/

## ₿ Features
- A header with a logo placeholder that acts as a homepage button
- A currency selector that changes the currency in which all rates are displayed.
- A carousel that displays the 10 most trending coins in succession, all of which can be clicked for more details.
- A responsive table with a search bar and pagination for displaying and searching among the top 100 coins from CoinGecko.
- Each table entry can be clicked for redirection to a Coin Info page.
- The coin info page includes the image, name, description and a rate graph for each cryptocurrency.
