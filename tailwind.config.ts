import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
			'accordion-down': {
				from: { height: '0' },
				to: { height: 'var(--radix-accordion-content-height)' }
			},
			'accordion-up': {
				from: { height: 'var(--radix-accordion-content-height)' },
				to: { height: '0' }
			},
			'float': {
				'0%, 100%': { transform: 'translateY(0px)' },
				'50%': { transform: 'translateY(-20px)' }
			},
			'float-slow': {
				'0%, 100%': { transform: 'translateY(0px)' },
				'50%': { transform: 'translateY(-10px)' }
			},
			'float-fast': {
				'0%, 100%': { transform: 'translateY(0px)' },
				'50%': { transform: 'translateY(-30px)' }
			},
			'pulse-glow': {
				'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
				'50%': { opacity: '0.8', transform: 'scale(1.1)' }
			},
			'shimmer': {
				'0%': { backgroundPosition: '-200% 0' },
				'100%': { backgroundPosition: '200% 0' }
			},
			'spin-slow': {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(360deg)' }
			},
			'particle': {
				'0%': { opacity: '0', transform: 'translateY(0) scale(0)' },
				'50%': { opacity: '1', transform: 'translateY(-50px) scale(1)' },
				'100%': { opacity: '0', transform: 'translateY(-100px) scale(0)' }
			},
			'slide-up': {
				'0%': { opacity: '0', transform: 'translateY(30px)' },
				'100%': { opacity: '1', transform: 'translateY(0)' }
			},
			'slide-down': {
				'0%': { opacity: '0', transform: 'translateY(-30px)' },
				'100%': { opacity: '1', transform: 'translateY(0)' }
			},
			'slide-left': {
				'0%': { opacity: '0', transform: 'translateX(30px)' },
				'100%': { opacity: '1', transform: 'translateX(0)' }
			},
			'slide-right': {
				'0%': { opacity: '0', transform: 'translateX(-30px)' },
				'100%': { opacity: '1', transform: 'translateX(0)' }
			},
			'scale-in': {
				'0%': { opacity: '0', transform: 'scale(0.9)' },
				'100%': { opacity: '1', transform: 'scale(1)' }
			},
			'bounce-in': {
				'0%': { opacity: '0', transform: 'scale(0.3)' },
				'50%': { transform: 'scale(1.05)' },
				'70%': { transform: 'scale(0.9)' },
				'100%': { opacity: '1', transform: 'scale(1)' }
			},
			'text-gradient': {
				'0%, 100%': { backgroundPosition: '0% 50%' },
				'50%': { backgroundPosition: '100% 50%' }
			},
			'morph': {
				'0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
				'50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' }
			},
			'glow-pulse': {
				'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
				'50%': { boxShadow: '0 0 60px hsl(var(--primary) / 0.6)' }
			},
			'rotate-3d': {
				'0%': { transform: 'perspective(1000px) rotateY(0deg)' },
				'100%': { transform: 'perspective(1000px) rotateY(360deg)' }
			},
			'tilt': {
				'0%, 100%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
				'25%': { transform: 'perspective(1000px) rotateX(2deg) rotateY(2deg)' },
				'75%': { transform: 'perspective(1000px) rotateX(-2deg) rotateY(-2deg)' }
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'float': 'float 6s ease-in-out infinite',
			'float-slow': 'float-slow 8s ease-in-out infinite',
			'float-fast': 'float-fast 4s ease-in-out infinite',
			'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
			'shimmer': 'shimmer 3s linear infinite',
			'spin-slow': 'spin-slow 20s linear infinite',
			'particle': 'particle 3s ease-in-out infinite',
			'slide-up': 'slide-up 0.6s ease-out forwards',
			'slide-down': 'slide-down 0.6s ease-out forwards',
			'slide-left': 'slide-left 0.6s ease-out forwards',
			'slide-right': 'slide-right 0.6s ease-out forwards',
			'scale-in': 'scale-in 0.5s ease-out forwards',
			'bounce-in': 'bounce-in 0.6s ease-out forwards',
			'text-gradient': 'text-gradient 4s ease infinite',
			'morph': 'morph 8s ease-in-out infinite',
			'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
			'rotate-3d': 'rotate-3d 10s linear infinite',
			'tilt': 'tilt 6s ease-in-out infinite'
		},
  		boxShadow: {
  			'2xs': 'var(--shadow-2xs)',
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
  		},
  		fontFamily: {
  			sans: [
  				'Lato',
  				'ui-sans-serif',
  				'system-ui',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'Helvetica Neue',
  				'Arial',
  				'Noto Sans',
  				'sans-serif'
  			],
  			serif: [
  				'EB Garamond',
  				'ui-serif',
  				'Georgia',
  				'Cambria',
  				'Times New Roman',
  				'Times',
  				'serif'
  			],
  			mono: [
  				'Fira Code',
  				'ui-monospace',
  				'SFMono-Regular',
  				'Menlo',
  				'Monaco',
  				'Consolas',
  				'Liberation Mono',
  				'Courier New',
  				'monospace'
  			]
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
