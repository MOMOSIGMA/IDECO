'use client';

import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ImageModal from '../components/ImageModal';

const products = [
  {
    name: 'Malle Ancestrale',
    description: 'Scène sculpturale sur bois et matière, présentée comme une œuvre d’art.',
    image: '/images/product-002.jpeg',
    whatsappMessage: 'Bonjour, je souhaite commander la Malle Ancestrale.',
  },
  {
    name: 'Coffre Prestige',
    description: 'Volume noble, finition mate et lignes contemporaines.',
    image: '/images/product-003.jpeg',
    whatsappMessage: 'Bonjour, je souhaite commander le Coffre Prestige.',
  },
  {
    name: 'Malle de Voyage Luxe',
    description: 'Objet de collection pour un intérieur galeries d’art.',
    image: '/images/product-009.jpeg',
    whatsappMessage: 'Bonjour, je souhaite commander la Malle de Voyage Luxe.',
  },
  {
    name: 'Étagère Musée',
    description: 'Formes architecturales, textures douces et inventives.',
    image: '/images/product-010.jpeg',
    whatsappMessage: 'Bonjour, je souhaite commander l’Étagère Musée.',
  },
  {
    name: 'Desk Atelier',
    description: 'Pièce fine, minimalisme luxueux et allure galerie.',
    image: '/images/product-011.jpeg',
    whatsappMessage: 'Bonjour, je souhaite commander le Desk Atelier.',
  },
  {
    name: 'Sculpture Intérieure',
    description: 'Œuvre d’ameublement inspirée des lignes organiques.',
    image: '/images/product-012.jpeg',
    whatsappMessage: 'Bonjour, je souhaite commander la Sculpture Intérieure.',
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleImageClick = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#070e1f] text-[#f6f1e8]">
      <ImageModal
        image={selectedImage}
        title={selectedTitle}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#101c33]/95 p-6 shadow-[0_40px_140px_-50px_rgba(15,23,42,0.8)] backdrop-blur-sm">
          <img src="/images/cover.jpeg" alt="Cover" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="relative p-12">
            <h1 className="text-5xl font-serif uppercase tracking-[0.13em] text-[#f7f0dc] sm:text-6xl">
              IDECO
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#c5c2b3] sm:text-lg">
              Decouvrez notre collection d'objets d'art et de mobilier haut de gamme.
            </p>
          </div>
        </header>

        <section className="mt-16">
          <h2 className="text-3xl font-serif mb-10 text-[#f8f2de]">Nos Creations</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                {...product}
                onImageClick={() => handleImageClick(product.image, product.name)}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
