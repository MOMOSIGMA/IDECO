'use client';

import React, { useState } from 'react';

interface ProductProps {
  name: string;
  description: string;
  image: string;
  whatsappMessage: string;
  onImageClick: () => void;
}

export default function ProductCard({ name, description, image, whatsappMessage, onImageClick }: ProductProps) {
  const whatsappUrl = `https://wa.me/221775080502?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111b2f]/95 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.5)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_-34px_rgba(15,23,42,0.55)]">
      <div
        className="relative overflow-hidden bg-slate-950 cursor-pointer"
        onClick={onImageClick}
      >
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 flex items-center justify-center">
          <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition">Cliquer pour agrandir</p>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-lg font-serif text-[#f6f1e7] mb-2">{name}</h2>
        <p className="text-sm leading-5 text-[#c3becf] mb-4">{description}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full bg-[#f3e7c8]/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111827] transition hover:bg-[#ede2bb]"
        >
          Commander
        </a>
      </div>
    </article>
  );
}
