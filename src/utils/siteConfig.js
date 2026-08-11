// ─────────────────────────────────────────────
//  SITE CONFIG — edit this file to personalize
//  your portfolio. No component changes needed.
// ─────────────────────────────────────────────

import profilePhoto from '../assets/IMG_0492.jpg';
import resumePDF from '../assets/eki_frontend_developer.pdf';

const siteConfig = {
	// ── Identity ──────────────────────────────
	name: 'equali.sign',
	/** Rendered as: "equali<accent>.</accent>sign" — the dot is the accent char */
	nameParts: { before: 'equali', accent: '.', after: 'sign' },
	title: 'Frontend Developer',
	tagline: 'crafting interfaces people love.',
	/** Italic / accent word highlighted in the hero tagline */
	taglineAccent: 'interfaces',
	bio: 'I design and build fast, accessible, and pixel-perfect web experiences.',
	profilePhoto,

	// ── Short intro section (home page) ───────
	introHeading: 'crafting interfaces',
	introBio: `I started my career in design back in 2015. As time passed, I wanted to provide my clients with more than just static visuals, so I specialized in converting Figma and Photoshop designs into clean, responsive HTML, CSS, and JavaScript. With this dual expertise in both web design and front-end development, I bridge the gap between concept and reality to ensure a seamless user experience. My focus remains on delivering exceptional work that meets the needs of my clients and their customers.`,
	resumeUrl: resumePDF,

	// ── Contact form ──────────────────────────
	contactHeading: `<i class='font-bodoni normal-case' style="color:#CC2B0E;">Let's start A</i><br/> <span class='font-hanken'> CONVERSATION</span>`,
	contactSubtext: "Have a project, a question, or just want to say hello? Fill out the form and I'll get back to you as soon as possible.",
	/** Set to a mailto:, a form API endpoint, or leave '#' */
	contactFormAction: '#',

	// ── Navigation links ──────────────────────
	nav: [
		{ label: 'About', to: '/' },
		{ label: 'Work', to: '/work' },
		// { label: 'Contact', to: '/' },
	],
	/** CTA button in the nav bar */
	navCta: { label: "Get in Touch", to: '/' },

	// ── Footer ────────────────────────────────
	footerHeading: 'Have a project in mind?',
	footerSubheading: "Let's build it.",
	/** Footer quick-links (right column) */
	footerLinks: [
		{ label: 'Write Email', href: 'mailto:eq.susanto@gmail.com' },
		{ label: 'Work', href: '/work' },
	],

	// ── Social links ──────────────────────────
	// Each entry: { platform, href }
	// SVG icons are matched by platform name in Footer.jsx
	social: [
		{ platform: 'linkedin', href: 'https://www.linkedin.com/in/eki-susanto-a9914291' },
		{ platform: 'github', href: 'https://github.com/eq2907' },
		{ platform: 'instagram', href: 'https://www.instagram.com/eki.susanto/' },
	],
};

export default siteConfig;
