import React from 'react';

export default function Video({children, src}) {
  return (
    <video 
      src={src}
      preload="preload" draggable="true" controls="true"
      autoplay="autoplay" muted="muted" loop="loop"
      style={{
        maxHeight: 'var(--ifm-image-max-height)',
        display: 'block',
        margin: '0 auto',
      }}
    >
      {children}
    </video>
  );
}

