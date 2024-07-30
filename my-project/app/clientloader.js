// components/ClientLoader.js

'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Loader from './Loader/loader';

const ClientLoader = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000); // Simulate a delay to show loader
    };

    handleRouteChange();

    return () => {};
  }, [pathname, searchParams]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
};

export default ClientLoader;
