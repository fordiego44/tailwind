/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "'Poppins', sans-serif",
        "dm-sans": "'DM Sans', sans-serif",
        "inter": ["'Inter'", "sans-serif"]
      },
      colors:{
        "green-color": "#27AE60",
        "gray-color": '#828282',
        "card-color": '#212121',
        "color-background": '#171717',
        "menu-color": "#172554",
        "lime-green": " hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        "facebook": "hsl(208, 92%, 53%)",

        "twitter": "hsl(203, 89%, 53%)",
        "instagram-first": "hsl(37, 97%, 70%)",
        "instagram-second": "hsl(329, 70%, 58%)",
        "youtube": "hsl(348, 97%, 39%)",

        "gradient-switch-first": "hsl(210, 78%, 56%)",
        "gradient-switch-second": "hsl(146, 68%, 55%)",


        "very-dark-blue": "hsl(230, 17%, 14%)",
        "very-dark-blue-top":  "hsl(232, 19%, 15%)",
        "dark-desatured-blue": "hsl(228, 28%, 20%)",
        "desaturated-blue": "hsl(228, 34%, 66%)",

        "very-pale-blue": "hsl(225, 100%, 98%)",
        "light-grayish-blue": "hsl(227, 47%, 96%)",
        "dark-grayish-blue": "hsl(228, 12%, 44%)",
        "very-dark-blue": "hsl(230, 17%, 14%)"

      },
      backgroundImage: {
        "laptop-image": "url('../public/background-form.jpg')",
        "open-menu": "url('../public/menu.svg')",
        "close-menu": "url('../public/close.svg')"
      }
    },
  },
  plugins: [],
}

