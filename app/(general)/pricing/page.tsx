import type { Metadata } from "next";

export const metadata : Metadata = {
 title: 'Pricig Page',
 description: 'SEO Pircing',
 keywords: ['Pricing', 'Page', 'Information']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
};
