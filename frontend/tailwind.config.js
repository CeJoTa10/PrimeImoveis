/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f6fe',
          100: '#ebf0fd',
          200: '#dae3fa',
          300: '#bfcef5',
          400: '#99b0ee',
          500: '#758ee6',
          600: '#4f6adb', // Azul Corporativo Premium
          700: '#4356c9',
          800: '#3745a5',
          900: '#2f3b84',
          950: '#1d2353',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e', // Verde para Venda/Sucesso
          600: '#16a34a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
