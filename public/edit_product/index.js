const updateProductInfo = async () => {
  let response = await fetch(`http://localhost:3000/update_product/${id}`);
  let finalResponse = await response.json();
  console.log(finalResponse);

  //   give html for page
  let containerEl = document.getElementById("product-container");
  containerEl.innerHTML = `
      <div class="single-product">
          <h1 id="name-tag">${finalResponse.name}</h1>
          <img class="product-img" src="${finalResponse.image}" alt="">
          <div id="item-description">${finalResponse.description}</div>
          <div id="remaining-quantity">Remaining: ${finalResponse.inventoryValue}</div>
          <div id="buy-button"><button>BUY!</button></div>
  
      </div>
      `;

  // add functionality to buy-button to decrease inventory amount
};
updateProductInfo();

const addNavbarFunctionality = () => {
  let homeButton = document.getElementById("home-button");
  homeButton.addEventListener("click", () => {
    console.log("clicked");
    window.location.href = "../";
  });
};
addNavbarFunctionality();
