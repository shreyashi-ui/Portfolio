// This file is the BEHAVIOR: small things that happen when you use the page.

// 1. Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Add a thin line under the menu once you scroll down
const nav = document.getElementById("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("scrolled", window.scrollY > 10);
});

// 3. "Copy email" button: copies the email and shows "Copied!" for 2 seconds
const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText("Shreyashic301@gmail.com");
  copyBtn.textContent = "Copied!";
  setTimeout(function () { copyBtn.textContent = "Copy email"; }, 2000);
});
