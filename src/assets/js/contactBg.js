document.addEventListener("DOMContentLoaded", function () {
  if (window.VANTA) {
    VANTA.NET({
      el: "#vanta-bg", // Update this selector to match your actual element
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x69a7ff, // Your new blue tone
      backgroundColor: 0xf9f9f9, // Light gray background
      maxDistance: 16.0,
      spacing: 14.0
    });
  }
});
