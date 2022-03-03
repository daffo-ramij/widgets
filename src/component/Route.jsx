import React, { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [pathValue, setPathValue] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setPathValue(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return pathValue === path ? children : null;
};

export default Route;
