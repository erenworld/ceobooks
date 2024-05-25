const openBtn = document.querySelector('.iconSearch');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});
