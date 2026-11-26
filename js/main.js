document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header on Scroll
  const header = document.getElementById('siteHeader');
  if (header && !header.classList.contains('solid')) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // 2. Mobile Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  // 3. Full-Screen Hero Slider
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    if (!slides.length) return;
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === currentIndex));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
  }

  function startAutoSlide() {
    if (slides.length > 1) {
      slideInterval = setInterval(() => showSlide(currentIndex + 1), 6000);
    }
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
      resetAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
      resetAutoSlide();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      showSlide(Number(dot.dataset.index));
      resetAutoSlide();
    });
  });

  startAutoSlide();

  // 4. Default Arrival & Departure Dates (Today & Tomorrow)
  const arrivalInput = document.getElementById('arrivalDate');
  const departureInput = document.getElementById('departureDate');

  if (arrivalInput && departureInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const fmt = (d) => d.toISOString().split('T')[0];
    arrivalInput.value = fmt(today);
    arrivalInput.min = fmt(today);
    departureInput.value = fmt(tomorrow);
    departureInput.min = fmt(tomorrow);

    arrivalInput.addEventListener('change', () => {
      const nextDay = new Date(arrivalInput.value);
      nextDay.setDate(nextDay.getDate() + 1);
      const minDep = fmt(nextDay);
      departureInput.min = minDep;
      if (departureInput.value <= arrivalInput.value) {
        departureInput.value = minDep;
      }
    });
  }

  // 5. Booking Form Handler & Modal Preview
  const bookingForm = document.getElementById('bookingForm');
  const bookingModal = document.getElementById('bookingModal');
  const modalSummary = document.getElementById('modalSummary');
  const closeModal = document.getElementById('closeModal');
  const confirmModalBtn = document.getElementById('confirmModalBtn');

  if (bookingForm && bookingModal) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const arrival = arrivalInput.value;
      const departure = departureInput.value;
      const adults = document.getElementById('adultsCount').value;
      const children = document.getElementById('childrenCount').value;

      modalSummary.textContent = `Check-in: ${arrival} | Check-out: ${departure} | ${adults} Adult(s), ${children} Child(ren)`;
      bookingModal.classList.add('open');
      bookingModal.setAttribute('aria-hidden', 'false');
    });

    const hideModal = () => {
      bookingModal.classList.remove('open');
      bookingModal.setAttribute('aria-hidden', 'true');
    };

    if (closeModal) closeModal.addEventListener('click', hideModal);
    if (confirmModalBtn) confirmModalBtn.addEventListener('click', hideModal);
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) hideModal();
    });
  }
});
