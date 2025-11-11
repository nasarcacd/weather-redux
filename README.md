# Weather Redux

A modern weather application built with React and Redux to demonstrate state management patterns and API integration. Search for weather information for any city and view detailed weather data including temperature, humidity, pressure, and more.

## 🌟 Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature, min/max temperatures
- 💧 Show humidity and atmospheric pressure
- 🎨 Clean and intuitive user interface
- 🔄 Redux state management for predictable data flow
- ⚡ Fast and responsive design

## 🛠️ Technologies

- **React 19** - Modern UI library
- **Redux** - Predictable state container
- **Redux Thunk** - Middleware for async actions
- **Axios** - HTTP client for API requests
- **React Redux** - Official React bindings for Redux

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nasarcacd/weather-redux.git
cd weather-redux
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload when you make changes. You'll also see any lint errors in the console.

## 📝 Available Scripts

### `npm start` or `yarn start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test` or `yarn test`

Launches the test runner in interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

## 📖 Usage

1. Enter a city name in the search box
2. Click the "Search" button
3. View the weather information displayed in the table

## 🏗️ Project Structure

```
weather-redux/
├── public/              # Static files
├── src/
│   ├── redux/          # Redux store, actions, and reducers
│   ├── App.js          # Main application component
│   ├── App.css         # Application styles
│   └── index.js        # Application entry point
├── package.json        # Project dependencies and scripts
└── README.md          # Project documentation
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👤 Author

**nasarcacd**
- GitHub: [@nasarcacd](https://github.com/nasarcacd)

## 📄 License

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🔗 Additional Resources

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Redux documentation](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
