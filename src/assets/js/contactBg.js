document.addEventListener("DOMContentLoaded", function () {
  if (window.VANTA) {
    VANTA.GLOBE({
      el: "#vanta-bg", // Make sure this matches your element ID
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x006400,     // Dark green
      color2: 0x013220,    // Very dark green
      size: 1.20,
      backgroundColor: 0xffffff // White background
    });
  }
});

