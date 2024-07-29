import type { Metadata } from "next";

export const metadata : Metadata = {
 title: 'Contac Page',
 description: 'SEO Contact',
 keywords: ['Contact','Page', 'information']
};

export default function ContactPage () {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}