/**
 * Global Scroll Animation Utility
 * Uses IntersectionObserver to trigger animations when elements enter the viewport.
 * Supports delay (data-delay) and duration (data-duration) custom attributes.
 */
export function initScrollAnimate() {
	const revealElements = document.querySelectorAll('.reveal, [class*="reveal-"]');

	const observerOptions = {
		root: null,
		rootMargin: '0px 0px -50px 0px', // Triggers when element is slightly inside the viewport
		threshold: 0.05
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const element = entry.target;
				const delay = element.getAttribute('data-delay') || '0';
				const duration = element.getAttribute('data-duration');

				if (duration) {
					element.style.transitionDuration = `${duration}ms`;
				}

				setTimeout(() => {
					element.classList.add('active');
				}, parseInt(delay, 10));

				// Unobserve after animating once
				observer.unobserve(element);
			}
		});
	}, observerOptions);

	revealElements.forEach((el) => {
		// Only observe elements that haven't been animated yet
		if (!el.classList.contains('active')) {
			observer.observe(el);
		}
	});
}
