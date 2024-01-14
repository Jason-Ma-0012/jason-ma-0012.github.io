import React from 'react';
import Giscus from "@giscus/react";
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common';


export default function GiscusComponent() {
	const { colorMode } = useColorMode();
	const { giscus } = useThemeConfig();

  return (
    <Giscus    
	  {...giscus}
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}