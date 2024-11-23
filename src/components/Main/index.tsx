'use client';
import dynamic from 'next/dynamic';

export default dynamic(() => import('./Main'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
