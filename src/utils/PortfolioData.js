export function createPortfolioData(title, subtitle, description, image, linkWork, imageOrder = 2, textOrder = 1) {
    return {
        title,
        subtitle,
        description,
        image,
        linkWork,
        imageOrder,
        textOrder
    }
}

const PortfolioData = [
    createPortfolioData(
        "Northwind Commerce",
        "E-commerce Platform",
        "A headless storefront built with React and TypeScript. Focused on fast product discovery, buttery-smooth animations, and a checkout flow that converts.",
        "https://placehold.co/600x400.png",
        "#",
        2, 1
    ),
    createPortfolioData(
        "Pulse Analytics",
        "Data Dashboard",
        "Real-time analytics dashboard for a SaaS team. Complex charting, virtualized tables, and a design system that scales across dozens of screens.",
        "https://placehold.co/600x400.png",
        "#",
        1, 2
    ),
    createPortfolioData(
        "Halo Banking",
        "Mobile Web App",
        "Progressive web app for a neobank. Motion-first interactions, tactile card animations, and rock-solid accessibility across every flow.",
        "https://placehold.co/600x400.png",
        "#",
        2, 1
    ),

]

export { PortfolioData }
