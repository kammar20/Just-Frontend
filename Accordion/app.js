const accordionHeaders = document.querySelectorAll('.accordion-header');

for (let head of accordionHeaders) {
  head.addEventListener('click', function () {
    head.classList.toggle('active');
  });
}
