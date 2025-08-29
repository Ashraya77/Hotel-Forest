import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}", // 👈 important
  ],
  theme: {
    extend: {},
  },
  plugins: [
    heroui(), 
  ],
};
