
      const carousel = document.getElementById("carousel");
      const cardWidth = 320 + 24; // card width + gap (Tailwind w-80 = 320px, gap-6 = 24px)
      let position = 0;

      function autoSlide() {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        position += cardWidth;

        if (position > maxScroll) {
          position = 0;
        }

        carousel.style.transform = `translateX(-${position}px)`;
      }

      setInterval(autoSlide, 3000); // slides every 3 seconds
