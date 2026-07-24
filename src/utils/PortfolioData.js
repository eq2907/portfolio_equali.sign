export function createPortfolioData(title, subtitle, description, image, linkWork) {
    return {
        title,
        subtitle,
        description,
        image,
        linkWork
    }
}

const PortfolioData = [
    createPortfolioData(
        "Northwind Commerce",
        "E-commerce Platform",
        "A headless storefront built with React and TypeScript. Focused on fast product discovery, buttery-smooth animations, and a checkout flow that converts.",
        "https://placehold.co/600x400.png",
        "#"
    ),
    createPortfolioData(
        "Pulse Analytics",
        "Data Dashboard",
        "Real-time analytics dashboard for a SaaS team. Complex charting, virtualized tables, and a design system that scales across dozens of screens.",
        "https://placehold.co/600x400.png",
        "#"
    ),
    createPortfolioData(
        "Halo Banking",
        "Mobile Web App",
        "Progressive web app for a neobank. Motion-first interactions, tactile card animations, and rock-solid accessibility across every flow.",
        "https://placehold.co/600x400.png",
        "#"
    ),

]

export { PortfolioData }
