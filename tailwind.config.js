module.exports = {
  darkMode: 'class', // Enable dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins, sans-serif",
      },
      colors: {
        "light-content": "#A7A7A7",
        "dark-heading": "#1f2428",
           "dark-content": "#666666",
           "light-heading": "#CCCCCC",
           "dark-mode": "#0a192f",
           "dark-card": "#363636",
           "green-text": "#018C0F",
           "greenbg": "#D7FFE0",
      },
    },
  },
  plugins: [],
};
