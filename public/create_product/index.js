console.log("js file connected");

let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", async () => {
  let nameString = document.getElementById("name-input").value;
  let urlString = document.getElementById("url-input").value;
  let descriptionString = document.getElementById("description-input").value;
  let priceString = document.getElementById("price-input").value;
  let inventoryNumber = +document.getElementById("inventory-input").value;

  const product = {
    nameString,
    urlString,
    descriptionString,
    priceString,
    inventoryNumber,
  };

  let response = await fetch("http://localhost:3000/new_product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  let uploadStatusTag = document.getElementById("upload-status");
  console.log(response.status);
  if (response.status === 200) {
    console.log(response);
    console.log("uploade complete");
    uploadStatusTag.textContent = "Upload Complete";
    uploadStatusTag.style.color = "green";
  } else {
    console.log(response);
    console.log("upload failed");
    uploadStatusTag.textContent = "Upload Failed";
    uploadStatusTag.style.color = "red";
  }
});
