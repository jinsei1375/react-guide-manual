'use client';

import { useEffect, useState } from 'react';

export default function SSR() {
  const [state, setState] = useState('loading...');
  useEffect(() => {
    setState('client loaded');
  }, []);
  return (
    <>
      <div>{state}</div>
    </>
  );
}
