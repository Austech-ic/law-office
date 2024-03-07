"use client"

import React from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import PageSuccess from '@/components/successfulcomp/[category]/page';

const Singlecase = () => {
  const {singlecaseid} = useParams();

  

  if (!singlecaseid) {
    // Handle loading or error state
    return null;
 
  }
  console.log(singlecaseid)
  return (
    <div>

      <PageSuccess id={singlecaseid} />
    </div>
  );
};

export default Singlecase;
