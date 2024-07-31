// components/ClientLoader.js

'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const DynamicLoader = dynamic(() => import('./Loader/loader'), {
  loading: () => <p>Loading...</p>, // Optional: You can customize this to show a simple text or a different loading indicator
});

const ClientLoader = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000); // Simulate a delay to show loader
    };

    handleRouteChange();

    return () => {};
  }, [pathname, searchParams]);

  return (
    <>
      {loading && <DynamicLoader />}
      {children}
    </>
  );
};

export default ClientLoader;
