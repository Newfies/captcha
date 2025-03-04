// On Website Load
window.onloadTurnstileCallback = function () {
    turnstile.render("#captchaContainer", {
        sitekey: "0x4AAAAAAA_jkIM42Rp4MiQU",
        callback: function (token) {
            const captcha = document.getElementById('captchaContainer');
            captcha.style.display = "none";
            const site = document.getElementById('site');
            site.style.display = "block";
        },
    });
};

// Before You're Allowed To Click The Button