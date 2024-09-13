'use client';

import React, { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <p>Error</p>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
};

export default Error;
