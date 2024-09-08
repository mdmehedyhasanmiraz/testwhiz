// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    }
  },
}

export default keepTheme(config);

  
