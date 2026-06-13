'use client';

import React from 'react';

interface ImageModalProps {
  image: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({ image, title, isOpen, onClose }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-xl font-bold hover:text-[#f3e7c8] transition"
        >
          ✕
        </button>
        <img
          src={image}
          alt={title}
          className="h-auto w-full rounded-lg object-contain"
        />
        <p className="mt-4 text-center text-sm uppercase tracking-[0.18em] text-[#f3e7c8]">
          {title}
        </p>
      </div>
    </div>
  );
}
