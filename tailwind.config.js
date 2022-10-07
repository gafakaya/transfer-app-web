/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      textColor: {
        skin: {
          primary: withOpacity("--color-text-primary"),
          secondary: withOpacity("--color-text-secondary"),
          red: withOpacity("--color-red"),
          yellow: withOpacity("--color-yellow"),
          blue: withOpacity("--color-blue"),
          green: withOpacity("--color-green"),
        },
      },
      backgroundColor: {
        skin: {
          primary: withOpacity("--color-background-primary"),
          secondary: withOpacity("--color-background-secondary"),
          tertiary: withOpacity("--color-background-tertiary"),
          red: withOpacity("--color-red"),
          yellow: withOpacity("--color-yellow"),
          blue: withOpacity("--color-blue"),
          green: withOpacity("--color-green"),
        },
      },
      borderColor: {
        skin: {
          primary: withOpacity("--color-border-primary"),
          secondary: withOpacity("--color-border-secondary"),
          tertiary: withOpacity("--color-border-tertiary"),
          red: withOpacity("--color-red"),
          yellow: withOpacity("--color-yellow"),
          blue: withOpacity("--color-blue"),
          green: withOpacity("--color-green"),
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
};
