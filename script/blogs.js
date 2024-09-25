document.addEventListener("DOMContentLoaded", function() {
   const balance = localStorage.getItem("balance");
   document.querySelector("#blog-main-balance").innerText = balance;
})