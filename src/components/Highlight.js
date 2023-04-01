import React from 'react';

export default function Highlight({children}) {
  return (
    <span
      style={{
        backgroundColor: 'var(--ifm-color-highlight)',
        borderRadius: '2px',
        color: '#FFF',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}

