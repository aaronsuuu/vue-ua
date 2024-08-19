import { UAParser } from 'ua-parser-js'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useEventListener } from '@vueuse/core'

export function useUserAgent() {
  const browser = ref(null)
  const os = ref(null)
  const device = ref(null)
  const result = ref(null)

  const isChrome = computed(() => browser.value?.name === 'Chrome' || false)
  const isSafari = computed(() => ['Safari', 'Mobile Safari'].includes(browser.value?.name) || false)
  const isFirefox = computed(() => browser.value?.name === 'Firefox' || false)
  const isIE = computed(() => browser.value?.name === 'IE' || false)
  const isEdge = computed(() => browser.value?.name === 'Edge' || false)

  const isAndroid = computed(() => os.value?.name === 'Android' || false)
  const isIOS = computed(() => os.value?.name === 'iOS' || false)

  const isWindows = computed(() => os.value?.name === 'Windows' || false)
  const isMacOS = computed(() => os.value?.name === 'Mac OS' || false)
  const isLinux = computed(() => os.value?.name === 'Linux' || false)

  const isDesktop = computed(
    () =>
      !['console', 'embedded', 'mobile', 'smarttv', 'tablet', 'wearable', 'xr'].includes(device.value?.type) || false,
  )
  const isMobile = computed(() => device.value?.type === 'mobile' || false)
  const isTablet = computed(() => device.value?.type === 'tablet' || false)

  function update() {
    const parser = new UAParser()
    browser.value = parser.getBrowser()
    os.value = parser.getOS()
    device.value = parser.getDevice()
    result.value = parser.getResult()
  }

  let cleanup = null

  onMounted(() => {
    update()
    cleanup = useEventListener('resize', update)
  })

  onUnmounted(() => cleanup && cleanup())

  return {
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
  }
}
