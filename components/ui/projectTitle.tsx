'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation';

const ProjectTitle = () => {
  const searchParams = useSearchParams();
  
    const name = searchParams.get('name')
    
  return (
    <h1>
      Проект <br />
      "{name}"
    </h1>
  );
}

export default ProjectTitle