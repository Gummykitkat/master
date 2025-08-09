import React from 'react';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="relative w-5000 h-3000">
      <Image
        src="/logo.png"
        alt="Next Logic AI and Design Logo"
        width={5000}  // Replace with actual dimensions
        height={3000}
        priority
      />
    </div>
  );
};