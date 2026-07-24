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
        "Northwind Commerce 1",
        "E-commerce Platform",
        "A headless storefront built with React and TypeScript. Focused on fast product discovery, buttery-smooth animations, and a checkout flow that converts.",
        "https://placehold.co/600x400.png",
        "https://equali-sign.github.io/northwind-commerce/"
    ),
    createPortfolioData(
        "Northwind Commerce 2",
        "E-commerce Platform",
        "A headless storefront built with React and TypeScript. Focused on fast product discovery, buttery-smooth animations, and a checkout flow that converts.",
        "https://placehold.co/600x400.png",
        "https://equali-sign.github.io/northwind-commerce/"
    ),
]

export { PortfolioData }
