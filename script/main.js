document.addEventListener("DOMContentLoaded", function() {
   
   // add "click" event handler to all the buttons:
   document.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", function() {
         
         // change the bg color
         resetButtonColor();
         this.classList.add("bg-green-400");
      })
   });

   // add "submit" event handler to the donation form:
   const donationForm = document.querySelectorAll("form");
   donationForm.forEach(form => {
      form.addEventListener("submit", function(event) {
         // stop the default form submition:
         event.preventDefault();

         // get the iformation from the user:
         const donation = parseFloat(event.currentTarget.querySelector(".donation-amount").value);

         // validte the user information:
         const currentMainBalance = parseFloat(document.querySelector("#main-balance").innerText);
         if (donation < 0) {
            alert("Invalid Input\nAmount must be more than 1 BDT")
            event.currentTarget.querySelector(".donation-amount").focus();
            return
         }

         if (donation > currentMainBalance) {
            alert("Insufficient Balance");
            event.currentTarget.querySelector(".donation-amount").focus();
            return
         }

         // add the donation amount the total donation:
         const donationElement = event.currentTarget.parentElement.parentElement.querySelector(".total-donations");
         const previousDonation =  parseFloat(donationElement.innerText);
         const TotalDonation = previousDonation + donation;
         donationElement.innerText = TotalDonation;

         // update the main balance
         const newBalance = currentMainBalance - donation;
         document.querySelector("#main-balance").innerText = newBalance;

         // show the user a successfull message:
         alert(`You have donate ${donation} BDT successfully`)

         // reset the form
         event.currentTarget.reset();

      })
   })
})

