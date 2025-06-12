
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
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
				portfolio: {
					primary: 'hsl(var(--portfolio-primary))',
					secondary: 'hsl(var(--portfolio-secondary))',
					accent: 'hsl(var(--portfolio-accent))',
					warning: 'hsl(var(--portfolio-warning))',
					error: 'hsl(var(--portfolio-error))',
					success: 'hsl(var(--portfolio-success))',
					info: 'hsl(var(--portfolio-info))',
					pink: 'hsl(var(--portfolio-pink))',
					orange: 'hsl(var(--portfolio-orange))',
					indigo: 'hsl(var(--portfolio-indigo))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				glow: {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--portfolio-primary) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--portfolio-primary) / 0.6)' }
				},
				'color-shift': {
					'0%, 100%': { 
						backgroundPosition: '0% 50%'
					},
					'50%': { 
						backgroundPosition: '100% 50%'
					}
				},
				pulse: {
					'0%, 100%': { 
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': { 
						transform: 'scale(1.05)',
						opacity: '0.8'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				float: 'float 6s ease-in-out infinite',
				glow: 'glow 2s ease-in-out infinite',
				'color-shift': 'color-shift 8s ease-in-out infinite',
				'pulse-gentle': 'pulse 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'portfolio-gradient': 'linear-gradient(135deg, hsl(var(--portfolio-primary)), hsl(var(--portfolio-secondary)))',
				'portfolio-gradient-secondary': 'linear-gradient(135deg, hsl(var(--portfolio-accent)), hsl(var(--portfolio-info)))',
				'portfolio-gradient-accent': 'linear-gradient(135deg, hsl(var(--portfolio-pink)), hsl(var(--portfolio-orange)))',
				'portfolio-gradient-rainbow': 'linear-gradient(135deg, hsl(var(--portfolio-primary)), hsl(var(--portfolio-secondary)), hsl(var(--portfolio-accent)), hsl(var(--portfolio-pink)))'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
