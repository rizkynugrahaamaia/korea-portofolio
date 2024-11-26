import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInUp: 'fadeInUp 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' }, // Konten dimulai dengan transparansi penuh.
          '100%': { opacity: '1' }, //  konten menjadi sepenuhnya terlihat.
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)', // Mulai dari bawah
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)', // Berakhir di posisi normal
          },
        },
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      screens: {
        desk: '1024px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
export default config;
