console.log("js file connected");

// create functionality to click on nav bar buttons and direct to that page

let containerEl = document.getElementById("product-container");
console.log(containerEl);

let randomId;

const getProductData = async () => {
  let data = await fetch("/get_product_data");
  data.json().then((parsedData) => {
    console.log(parsedData);
    randomId = parsedData[0]._id;
    parsedData.forEach((object) => {
      let divTag = document.createElement("div");
      divTag.innerHTML = `<div>
      <div>
          ${object.name}
      </div>
      <img class="image-class" src=${object.image} alt="">
        </div>`;
      containerEl.appendChild(divTag);
      console.log(divTag);
      divTag.addEventListener("click", () => {
        console.log("clicked", object);
        window.location.href = `./product_info?id=${object._id}`;
      });
    });
  });
};
getProductData();

// make elements in nav-bar dynamic
const addNavbarFunctionality = () => {
  let addProductButton = document.getElementById("addNew-button");
  // to go to homepage use ../
  addProductButton.addEventListener("click", () => {
    console.log("clicked");
    window.location.href = "./create_product";
  });
  // let randomProductButton = document.getElementById("single-product");

  // randomProductButton.addEventListener("click", () => {
  //   console.log("clicked");
  //   window.location.href = `./product_info/?id=${randomId}`;
  // });
};
addNavbarFunctionality();
