// tailwind.config.js
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EF5149',
        red: '#EF5149',
        // Thêm các màu khác nếu cần
        blue: '#1E40AF',
        green: '#10B981',
      },
    },
  },
  plugins: [],
};

