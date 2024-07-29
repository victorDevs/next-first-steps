import type { Metadata } from "next";

export const metadata : Metadata= { // Si se define el tipo de la metada, nos podrá dar opciones para agrgar metadatas
 title: 'About Page',
 description: 'SEO Description',
 keywords: ['About Page', 'Victor', 'Information', '...']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">Hola About Page</span>
        </>
    )    
};
