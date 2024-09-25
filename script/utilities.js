function resetButtonColor() {
   document.querySelectorAll("button").forEach(btn => {
      btn.classList.remove("bg-green-400");
   })
}

// load the main balance:
function loadMainBalance() {
   const balance = parseFloat(localStorage.getItem('balance'));
   console.log(balance);
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

// showModal()
function showModal() {
   const modal = document.createElement("dialog");
   modal.classList.add("w-[40%]", "min-w-[300px]", "bg-white", "p-4", "rounded-lg", "flex", "flex-col", "items-center", "justify-center", "gap-5");
   modal.innerHTML = `
   <h1 class="text-3xl font-bold">Congrates!</h1>
   <div class="my-2 flex items-center justify-center gap-3 text-xl font-bold">
      <img class="w-10 aspect-square mx-auto" src="./assets/coin.png" alt="">
      <p><span>100</span></p>
   </div>
   <div class="text-center">
      <h2 class="">You have donated for humankind</h2>
      <h2 class="text-lg font-semibold">Successfully</h2>
   </div>
   <div>
      <button id="hide-modal-1" class="btn hover:bg-red-500 hover:text-white">
         Close Confirmation
      </button>
   </div>
   `;

   const modalOverlay = document.querySelector("#modal-1");
   modalOverlay.classList.remove("hidden");
   modalOverlay.classList.add("flex");
   modalOverlay.appendChild(modal);
}

function hideModal() {
   const modalOverlay = document.querySelector("#modal-1");
   const modal = modalOverlay.querySelector("dialog");
   modalOverlay.removeChild(modal);
   modalOverlay.classList.add("hidden");
   modalOverlay.classList.remove("flex");
}

