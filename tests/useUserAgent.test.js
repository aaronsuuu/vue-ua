import { describe, it, expect } from "vitest";
import { useUserAgent } from "../src";
import { defineComponent, ref } from "vue";
import { mount } from "@vue/test-utils";

const mockUserAgent =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1";

Object.defineProperty(window.navigator, "userAgent", {
  value: mockUserAgent,
  writable: true,
});

describe("useUserAgent", () => {
  it("should return the correct browser", () => {
    const com = mount(
      defineComponent({
        setup() {
          const ua = useUserAgent();
          return { ua };
        },
        template: `<div>{{ ua }}</div>`,
      })
    );

    expect(com.vm.ua.browser.value.name).toBe("Mobile Safari");
    expect(com.vm.ua.os.value.name).toBe("iOS");
    expect(com.vm.ua.device.value.type).toBe("mobile");
    expect(com.vm.ua.isChrome.value).toBe(false);
    expect(com.vm.ua.isSafari.value).toBe(true);
    expect(com.vm.ua.isFirefox.value).toBe(false);
    expect(com.vm.ua.isIE.value).toBe(false);
    expect(com.vm.ua.isEdge.value).toBe(false);
    expect(com.vm.ua.isAndroid.value).toBe(false);
    expect(com.vm.ua.isIOS.value).toBe(true);
    expect(com.vm.ua.isWindows.value).toBe(false);
    expect(com.vm.ua.isMacOS.value).toBe(false);
    expect(com.vm.ua.isLinux.value).toBe(false);
    expect(com.vm.ua.isDesktop.value).toBe(false);
    expect(com.vm.ua.isMobile.value).toBe(true);
    expect(com.vm.ua.isTablet.value).toBe(false);
  });
});
