let slideIndex = 0;
  const slides = document.querySelectorAll('.carousel img');
  
  function showSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
  }
  
  function changeSlide(n) {
    showSlide(n);
  }
  
  showSlide(0);
