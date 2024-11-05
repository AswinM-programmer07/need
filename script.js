function loadTexts() {
  const textContainer = document.getElementById("textContainer");
  const inputnameContainer = document.getElementById("inputnameContainer")
  const costContainer = document.getElementById("cost");
  textContainer.innerHTML = ""; // Clear the container
  costContainer.innerHTML = ""; // Clear cost container
  inputnameContainer.innerHTML = "";

  const storedTexts = JSON.parse(localStorage.getItem("textse")) || [];
  const storedTextc = JSON.parse(localStorage.getItem("textce")) || [];
  const storedTextd = JSON.parse(localStorage.getItem("textne")) || [];

  storedTexts.forEach(text => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      textContainer.appendChild(paragraph);
  });

  storedTextc.forEach(cost => {
      const paragraph = document.createElement("p");
      paragraph.textContent = cost;
      costContainer.appendChild(paragraph);
  });
  storedTextd.forEach(cost => {
      const paragraph = document.createElement("p");
      paragraph.textContent = cost;
      inputnameContainer.appendChild(paragraph);
  });


}

function saveText() {
  const inputDate = document.getElementById("inputText");
  const inputCost = document.getElementById("inputCost");
  const inputName = document.getElementById("inputname");

  const newName = inputName.value.trim();
  const newText = inputDate.value.trim();
  const newCost = inputCost.value.trim();

  if (newText && newCost) {
      const storedTexts = JSON.parse(localStorage.getItem("textse")) || [];
      const storedTextc = JSON.parse(localStorage.getItem("textce")) || [];
      const storedTextd = JSON.parse(localStorage.getItem("textne")) || [];

      storedTexts.push(newText);
      storedTextc.push(newCost);
      storedTextd.push(newName)

      localStorage.setItem("textse", JSON.stringify(storedTexts));
      localStorage.setItem("textce", JSON.stringify(storedTextc));
      localStorage.setItem("textne", JSON.stringify(storedTextd));

      loadTexts(); // Reload texts and costs
      inputName.value = "";
      inputDate.value = ""; // Clear date input
      inputCost.value = ""; // Clear cost input
  }
}

function clearLocalStorage() {
  localStorage.clear();
  alert("Local storage has been cleared!");
  loadTexts(); // Clear displayed data
}



  // Get references to both buttons
  const addButton = document.getElementById("pay");
  const tripButton = document.getElementById("cost");

  // Add an event listener to the "Add" button
  addButton.addEventListener("click", function() {
      // Set the display of the "Trip" button to inline or block to make it visible
      tripButton.style.display = "inline";
  });



// Load texts and plot graph when the page is loaded
window.onload = loadTexts;