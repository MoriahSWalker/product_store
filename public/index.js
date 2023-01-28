console.log("js file connected");

// create functionality to click on nav bar buttons and direct to that page

let containerEl = document.getElementById("container");
console.log(containerEl);

const getProductData = async () => {
  let data = await fetch("/get_product_data");
  data.json().then((parsedData) => {
    console.log(parsedData);

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
