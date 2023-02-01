const data = [
  {
    title: "Product 1",
    description: "Description of product 1",
    image_url: "/images/beanie.webp",
  },
  {
    title: "Product 2",
    description: "Description of product 2",
    image_url: "/images/shoe.webp",
  },
  {
    title: "Product 100",
    description: "Description of product 100",
    image_url: "/images/hoodie.webp",
  },
];

const renderHtml = function (product) {
  const element = document.createElement("div");
  element.innerHTML = `
  <div class="product" id="${product.title}" data-name="${product.title}">
    <div class="image">
      <img src="${product.image_url}" class="image-src" title="image1" />
    </div>
    <h2 class="product-name">${product.title}</h2>
    <p class="product-description">${product.description}</p>
  </div>`;

  element.addEventListener("click", function () {
    if (element.classList.contains("selected")) {
      element.classList.remove("selected");
    } else {
      element.classList.add("selected");
    }
  });

  return element;
};

document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelector("#products");

  for (let i = 0; i < data.length; i++) {
    products.appendChild(renderHtml(data[i]));
  }
});
