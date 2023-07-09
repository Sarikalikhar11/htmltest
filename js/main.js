let scrollContainer = document.querySelector('.section5-card');
let nextBtn = document.getElementById('#arrow');

scrollContainer.addEventListener('click', (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += 900;
});
