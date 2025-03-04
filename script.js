window.onloadTurnstileCallback = function () {
    turnstile.render("#captchaContainer", {
      sitekey: "0x4AAAAAAA_jkIM42Rp4MiQU",
      callback: function (token) {
        console.log(`Challenge Success ${token}`);
      },
    });
  };