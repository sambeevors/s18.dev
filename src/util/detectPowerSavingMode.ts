const detectPowerSavingMode = (): Promise<boolean | undefined> => {
  // for iOS/iPadOS Safari
  if (/iP(hone|ad|od)/.test(navigator.userAgent)) {
    // In Low Power Mode, cumulative delay effect happens on setInterval()
    return new Promise((resolve) => {
      const fps = 50;
      const numFrames = 30;
      const startTime = performance.now();
      let i = 0;
      const handle = setInterval(() => {
        if (i < numFrames) {
          i++;
          return;
        }
        clearInterval(handle);
        const interval = 1000 / fps;
        const actualInterval = (performance.now() - startTime) / numFrames;
        const ratio = actualInterval / interval; // 1.3x or more in Low Power Mode, 1.1x otherwise
        console.log(actualInterval, interval, ratio);
        resolve(ratio > 1.3);
      }, 1000 / fps);
    });
  }
  // for Safari, Chromium 108 (experimental)
  else {
    // for Chromium, experimental feature [battery saver mode](about://flags/#battery-saver-mode-available) need to be enabled firstly
    // and then [Energy Saver](chrome://settings/performance)
    return detectFrameRate().then((frameRate) => {
      // frameRate will be 30fps or 20fps in Battery Saver Mode, otherwise will be closed to monitor refresh rate (typically 60Hz)
      if (frameRate < 31) {
        return true;
      }
      return undefined;
    });
  }
};

export function detectFrameRate(): Promise<number> {
  return new Promise((resolve) => {
    const numFrames = 30;
    const startTime = performance.now();
    let i = 0;
    const tick = () => {
      if (i < numFrames) {
        i++;
        requestAnimationFrame(tick);
        return;
      }
      const frameRate = numFrames / ((performance.now() - startTime) / 1000);
      resolve(frameRate);
    };
    requestAnimationFrame(() => {
      tick();
    });
  });
}

export default detectPowerSavingMode;
