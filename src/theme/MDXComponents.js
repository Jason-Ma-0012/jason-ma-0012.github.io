import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import DocCardList from '@theme/DocCardList';
import Highlight from '@site/src/components/Highlight';
import Images from '@site/src/components/Images';
import Video from '@site/src/components/Video';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  DocCardList,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Highlight,
  Images,
  Video,
};

