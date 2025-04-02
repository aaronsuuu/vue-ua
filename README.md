# vue-ua

Vue User Agent Plugin is contain all the information about the user agent.It provides a simple API to get the user agent information in your Vue 3 application.

User agent information is reactive, it will update automatically when window resize or change.
You can use it in your template or script.
Easy to switch the UI based on the user agent.

It's based on ua-parser-js and vueuse.

## Installation

```bash
npm install vue-ua
```

## Usage

```vue
<script setup>
import { useUserAgent } from "vue-ua";
const {
  browser,
  os,
  device,

  isChrome,
  isSafari,
  isFirefox,
  isIE,
  isEdge,

  isAndroid,
  isIOS,

  isWindows,
  isMacOS,
  isLinux,

  isDesktop,
  isMobile,
  isTablet,
} = useUserAgent();
</script>
<template>
  <div>
    <div v-if="isMobile">Mobile</div>
    <div v-else-if="isDesktop">Desktop</div>
    <div v-else-if="isTablet">Tablet</div>
    <div v-else>Other</div>
  </div>
</template>
```
