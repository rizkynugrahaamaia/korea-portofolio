import { useState, useEffect } from 'react';

// Mendefinisikan tipe data untuk hasil return
interface ScreenSize {
  isMobile: boolean;
  windowSize: number;
}

export function useScreen(): ScreenSize {
  const minWidth = 768;

  // Menambahkan tipe untuk state isMobile dan windowSize
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < minWidth);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    // Menambahkan event listener untuk perubahan ukuran jendela
    window.addEventListener('resize', onResize);

    // Cleanup function untuk menghapus event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const onResize = () => {
    const { innerWidth } = window;
    setIsMobile(innerWidth < minWidth);
    setWindowSize(innerWidth);
  };

  return { isMobile, windowSize };
}
