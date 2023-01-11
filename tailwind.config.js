module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR"],
        karla: ["Karla"],
        salonica: ["Salonica"],
      },
      colors: {
        primary: "#20d28c",
        beBlue: "#468cf0",
        beGray: "#575757",
        beGray2: "#909090",
        beLightGray: "#f4f4f4",
        beRed: "#fa5a5a",
      },
    },
  },
  plugins: [],
};
