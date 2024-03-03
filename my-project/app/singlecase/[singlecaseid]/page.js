"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from 'next/navigation'
import PageSuccess from '@/components/successfulcomp/[category]/page';

const Singlecase = () => {
  const router = useRouter(); // Use useRouter to access query parameters
  const { singlecaseid } = router.query || {}; // Access the query parameters using router.query

  if (!singlecaseid) {
    // Handle loading or error state
    return <div>Loading...</div>; // You can render a loading state here
  }

  console.log(singlecaseid);
  return (
    <div>
        <p>Single Case ID: {singlecaseid}</p> {/* Just for testing */}
      {/* <PageSuccess id={singlecaseid} /> */}
    </div>
  );
};

export default Singlecase;
