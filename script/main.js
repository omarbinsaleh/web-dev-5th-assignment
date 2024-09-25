document.addEventListener("DOMContentLoaded", function () {
   // get the main balance:
   const balance = parseFloat(localStorage.getItem("balance")) || localStorage.setItem("balance", JSON.stringify(6500));
   const historyLog = JSON.parse(localStorage.getItem("history")) || localStorage.setItem("history", JSON.stringify([]))
   console.log(historyLog);
   const donationsArray = JSON.parse(localStorage.getItem("donations")) || localStorage.setItem("donations", JSON.stringify([0, 0, 0]))

   console.log(balance);
   if (historyLog.length <= 0) {
      document.querySelector("#history-container").innerHTML = `
         <div id='no-log' class="text-xl font-semibold text-slate-400 text-center">No History log recorded..</div>
      `
   }
   else {
      historyLog.forEach(log => {
         createHistoryLog(log);
      })
   }

   // load main Balance:
   loadMainBalance();

   // load the donations:
   loadDonations(donationsArray);

   // add "click" event handler to all the buttons:
   document.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", function () {

         // change the bg color
         resetButtonColor();

         // when the the blog button is clicked on:
         if (this.dataset.button === "btn-blogs") {
            this.classList.add("bg-green-400");
            const root = window.origin;

            window.open(`${root}/web-dev-5th-assignment/pages/blogs.html`)
         }

         // when the the donation button is clicked on:
         if (this.dataset.button === "btn-donation") {
            this.classList.add("bg-green-400");
            
            // window.open(`${window.origin}/web-dev-5th-assignment/`)
            // show the donation section:
            show("#donations-container");
         }

         // when the history button is clicked on:
         if (this.dataset.button === "btn-history") {
            this.classList.add("bg-green-400");

            // show the history section:
            show("#history-container");
         }
      })
   });

   // add "submit" event handler to the donation form:
   const donationForm = document.querySelectorAll("form");
   donationForm.forEach(form => {
      form.addEventListener("submit", function (event) {
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
         const previousDonation = parseFloat(donationElement.innerText);
         const TotalDonation = previousDonation + donation;
         donationElement.innerText = TotalDonation;
         const donaArry = [...JSON.parse(localStorage.getItem("donations"))];
         donaArry[this.dataset.index] = TotalDonation;
         localStorage.setItem("donations", JSON.stringify(donaArry));

         // update the main balance
         const newBalance = currentMainBalance - donation;
         document.querySelector("#main-balance").innerText = newBalance;
         localStorage.setItem("balance", JSON.stringify(newBalance));

         // show the user a successfull message:
         alert(`You have donate ${donation} BDT successfully`)

         // create a history log:
         document.querySelector("#no-log").remove();
         const title = event.currentTarget.parentElement.parentElement.querySelector("h1").innerText;
         const time = new Date();
         const log = { title, time, amount: donation }
         createHistoryLog(log);
         const arry = [...JSON.parse(localStorage.getItem("history")), log];
         localStorage.setItem("history", JSON.stringify(arry));

         // reset the form
         event.currentTarget.reset();

      })
   })


})

