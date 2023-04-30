const ratingNum1 = document.getElementById('rating-number-1');
const ratingNum2 = document.getElementById('rating-number-2');
const ratingNum3 = document.getElementById('rating-number-3');
const ratingNum4 = document.getElementById('rating-number-4');
const ratingNum5 = document.getElementById('rating-number-5');

const button = document.getElementById('button');

const sectionRating = document.querySelector('.section-rating');
const sectionThanks = document.querySelector('.section-thanks');

let selectedRating;

const ratingNumbers = [
  ratingNum1,
  ratingNum2,
  ratingNum3,
  ratingNum4,
  ratingNum5,
];

function addCheckedClass(event) {
  ratingNumbers.forEach((ratingNumber) => {
    ratingNumber.classList.remove('checked');
  });
  event.target.classList.add('checked');
  selectedRating = event.target.textContent;
}

ratingNumbers.forEach((ratingNumber) => {
  ratingNumber.addEventListener('click', addCheckedClass);
});

//
button.addEventListener('click', function () {
  sectionRating.classList.add('hidden');
  sectionThanks.classList.remove('hidden');
  document.getElementById('selected-rating').innerText = selectedRating;
});
