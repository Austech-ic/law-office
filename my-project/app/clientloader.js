// components/ClientLoader.js

'use client';

import { useState, useEffect, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const DynamicLoader = dynamic(() => import('./Loader/loader'), {
  loading: () => <p></p>, // Optional: You can customize this to show a simple text or a different loading indicator
});

const ClientLoader = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000); // Simulate a delay to show loader
    };

    handleRouteChange();

    return () => {};
  }, [pathname]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {loading && <DynamicLoader />}
      {children}
    </Suspense>
  );
};

export default ClientLoader;
