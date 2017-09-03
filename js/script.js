var searchForm = document.querySelector(".search-hotel__popup");
var searchButton = document.querySelector(".search-hotel__button");
var lessButton = document.querySelectorAll(".amount-container .less-button");
var moreButton = document.querySelectorAll(".amount-container .more-button");

var adultInput = document.getElementById("adult-amount");
var childrenInput = document.getElementById("children-amount");

var adults = {
  adults__lessButton: lessButton[0],
  adults__moreButton: moreButton[0],
  adultTotal: adultInput.value
};

var childrens = {
  childrens__lessButton: lessButton[1],
  childrens__moreButton: moreButton[1],
  childrenTotal: childrenInput.value
}

searchForm.classList.add("visually-hidden");

searchButton.addEventListener("click", function(e) {
  e.preventDefault();
  searchForm.classList.toggle("visually-hidden");
});

adults.adults__lessButton.addEventListener("click", function(e) {
  if (adults.adultTotal != 0) {
    adultInput.value = --adults.adultTotal;
  }
  console.log(adults.adultTotal);
  return adults.adultTotal;
})

adults.adults__moreButton.addEventListener("click", function(e) {
  adultInput.value = ++adults.adultTotal;
  console.log(adults.adultTotal);
  return adults.adultTotal;
})

childrens.childrens__lessButton.addEventListener("click", function(e) {
  if (childrens.childrenTotal != 0) {
    childrenInput.value = --childrens.childrenTotal;
  }
  console.log(childrens.childrenTotal);
  return childrens.childrenTotal;
})

childrens.childrens__moreButton.addEventListener("click", function(e) {
  childrenInput.value = ++childrens.childrenTotal;
  console.log(childrens.childrenTotal);
  return childrens.childrenTotal;
})
