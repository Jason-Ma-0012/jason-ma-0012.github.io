import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type { WrapperProps } from '@docusaurus/types';

// Giscus Comment Component ===============
import GiscusComponent from '../../../components/GiscusComponent';
// End ====================================

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      {
        // Giscus Comment Component ===============
        <GiscusComponent />
        // End ====================================
      }
      <Footer {...props} />
    </>
  );
}
