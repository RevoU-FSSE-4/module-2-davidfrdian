// // when click menu bar
// let menu = document.getElementById("menu");
// let navigation = document.querySelector(".navigation");
// let x = document.getElementById("x");

// menu.addEventListener("click",function(){
//   navigation.classList.toggle("active");
//   x.style.display = "inline-flex";
//   menu.style.display = "none";
// })

// // for close menu navigation beyond the content
// document.addEventListener("click", function (e) {
//   if (!menu.contains(e.target) && !navigation.contains(e.target)) {
//     navigation.classList.remove("active");
//     x.style.display = "none";
//     menu.style.display = "inline-flex";
//   }
// });


// login button
let showLogin = document.getElementById("showLogin");
let popupLogin = document.querySelector(".popup-login");
let closeBtnLogin = document.querySelector(".close-btn-login");

showLogin.addEventListener("click", function () {
  popupLogin.classList.add("active");
});

closeBtnLogin.addEventListener("click", function () {
  popupLogin.classList.remove("active");
});

// for close popup login beyond the content
document.addEventListener("click", function (e) {
  if (!showLogin.contains(e.target) && !popupLogin.contains(e.target)) {
    popupLogin.classList.remove("active");
  }
});

// sign up button
let showSignup = document.getElementById("showSignup");
let popupSignup = document.querySelector(".popup-signup");
let closeBtnSignup = document.querySelector(".close-btn-signup");

showSignup.addEventListener("click", function () {
  popupSignup.classList.add("active");
});

closeBtnSignup.addEventListener("click", function () {
  popupSignup.classList.remove("active");
});

// for close popup signup beyond the content
document.addEventListener("click", function (e) {
  if (!showSignup.contains(e.target) && !popupSignup.contains(e.target)) {
    popupSignup.classList.remove("active");
  }
});
