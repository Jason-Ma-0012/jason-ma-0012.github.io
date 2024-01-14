import React from 'react';
import Giscus from "@giscus/react";
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common';

interface CustomThemeConfig extends ThemeConfig {
  giscus: GiscusProps & { darkTheme: string };
}

export default function GiscusComponent() {
  const { colorMode } = useColorMode();
  const { giscus } = useThemeConfig() as CustomThemeConfig;
  const { theme = 'light', darkTheme = 'dark_dimmed' } = giscus;
  const giscusTheme = colorMode === 'dark' ? darkTheme : theme;

  return (
    <Giscus    
	    {...giscus}
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={giscusTheme}
      lang="zh-CN"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}