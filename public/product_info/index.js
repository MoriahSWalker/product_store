// get id from the URL
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let id = params.id;

// use that ID to get info from collection
const getProductInfo = async () => {
  let response = await fetch(
    `http://localhost:3000/get_specific_product/${id}`
  );
  let finalResponse = await response.json();
  console.log(finalResponse);
};
getProductInfo();
