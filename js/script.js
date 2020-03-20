var link = document.querySelector(".header-button");
var form = document.querySelector(".search-form");

var checkin = form.querySelector("[name=check-in-date]");
var checkout = form.querySelector("[name=check-out-date]");
var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children")
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.remove("search-form-error")
  form.classList.toggle("search-form-close");
});

form.addEventListener("submit", function (evt) {
  if (!checkin.value || !checkout.value || !adults.value || !children.value) {
    evt.preventDefault();
    form.classList.remove("search-form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("search-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});