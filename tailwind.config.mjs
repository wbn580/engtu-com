/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7E22CE',
        accent:  '#22D3EE',
        bg:      '#FAF5FF',
        ink:     '#1E1B4B',
        muted:   '#7A6B9A',
      },
      fontFamily: {
        heading: ['Pacifico', 'Georgia', 'serif'],
        body:    ['Quattrocento Sans', 'system-ui', 'sans-serif'],
        mono:    ['Cousine', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
      },
    },
  },
  plugins: [],
};
