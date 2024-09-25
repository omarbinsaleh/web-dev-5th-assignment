document.addEventListener("DOMContentLoaded", function() {
   const balance = localStorage.getItem("balance");
   document.querySelector("#blog-main-balance").innerText = balance;

   // add "click" event listener to al the buttons:
   document.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", function(event) {
         // when the main balance button is clicked on:
         if (this.dataset.button === "btn-main-balance") {
            console.log(this)
         }
      })
   })
})

