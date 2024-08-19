# vue-ua

Vue User Agent Plugin is contain all the information about the user agent, and it's reactive.
You can use it in your template or script. 
Easy to switch the UI based on the user agent.

It's based on ua-parser-js and vueuse.

## Installation

```bash
npm install vue-ua
```

## Usage

```javascript
<template>
    <div>
        <div v-if="ua.isMobile">Mobile</div>
        <div v-else>Tablet</div>
    </div>
</template>
import { useUserAgent } from 'vue-ua'
const ua = useUserAgent()

/**
 * ua.browser
 * ua.os
 * ua.device
 * ua.isChrome
 * ua.isSafari
 * ua.isFirefox
 * ua.isIE
 * ua.isEdge
 * ua.isAndroid
 * ua.isIOS
 * ua.isWindows
 * ua.isMacOS
 * ua.isLinux
 * ua.isDesktop
 * ua.isMobile
 * ua.isTablet
 */
console.log(ua)
```