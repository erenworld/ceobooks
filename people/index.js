const openBtn = document.querySelector('.iconSearch');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});

//
function liveSearch() {
  //locate cards elements
  let cards = document.querySelectorAll('.cards');

  //locate search input
  let searchQuery = document.getElementById('searchbox').value;

  //loop through the cards
  for (let i = 0; i < cards.length; i++) {
    //if the text is within the card
    if (cards[i].innerText.toLowerCase().includes(searchQuery)) {
      //remove the is hidden
      cards[i].classList.remove('searchHidden');
    } else {
      //otherwise add class
      cards[i].classList.add('searchHidden');
    }
  }
}
