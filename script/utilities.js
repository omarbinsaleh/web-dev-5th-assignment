function resetButtonColor() {
   document.querySelectorAll("button").forEach(btn => {
      btn.classList.remove("bg-green-400");
   })
}

// load the main balance:
function loadMainBalance() {
   const balance = parseFloat(localStorage.getItem('balance'));
   console.log(balance);
   if (document.querySelector("#blog-main-balance")) {
      document.querySelector("#blog-main-balance").innerText = balance;
   }
   document.querySelector("#main-balance").innerText = balance;
}

// load the donations cards
function loadDonations(donationsArray) {
   document.querySelectorAll(".total-donations").forEach((donation, index) => {
      console.log(index)
      console.log(JSON.parse(localStorage.getItem("donations")))
      donation.innerText = donationsArray[index];
   })
}

// createHistoryLog() function declaration
function createHistoryLog(log) {
   const historyElement = document.createElement('div');
   historyElement.innerHTML = `
      <div class="history-log p-3 border border-gray-400 shadow-md rounded">
         <h1 class="text-xl font-semibold">Donated ${log.amount} BDT to ${log.title}</h1>
         <p class="text-sm text-slate-400">${log.time}</p>
      </div>
   `;

   document.querySelector("#history-container").appendChild(historyElement);
}

// show() function declaration:
function show(id) {
   document.querySelectorAll("#info-container > section").forEach(section => {
      section.classList.add("hidden");
   })

   document.querySelector(id).classList.remove("hidden");
}