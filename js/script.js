var searchForm = document.querySelector(".search-hotel__popup");
var searchButton = document.querySelector(".search-hotel__button");
var lessButton = document.querySelector(".amount-container .less-button");
var moreButton = document.querySelector(".amount-container .more-button");

var adultInput = document.getElementById("adult-amount");
var adultTotal = adultInput.value;


searchButton.addEventListener("click", function(e) {
  e.preventDefault();
  searchForm.classList.toggle("visually-hidden");
});

lessButton.addEventListener("click", function(e) {
  if (adultTotal != 0) {
    adultInput.value = --adultTotal;
  }
  console.log(adultTotal);
  return adultTotal;
})

moreButton.addEventListener("click", function(e) {
  adultInput.value = ++adultTotal;
  console.log(adultTotal);
  return adultTotal;
})
