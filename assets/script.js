const data = [
  {
    title: "Leather Jacket",
    description: "//",
    image_url: "/images/jacket.jpg",
  },
  {
    title: "Blue Beanie",
    description: "//",
    image_url: "/images/beanie.webp",
  },
  {
    title: "Stussy Black Hoodie",
    description: "€125.00",
    image_url: "/images/hoodie.webp",
  },
  {
    title: "Black Parachute Pants",
    description: "//",
    image_url: "/images/pants.avif",
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

if (myCounter) {
  element.addEventListener("click", function () {
    if (element.classList.contains("selected")) {
      count--;
      element.classList.remove("selected");
    } else {
      count++;
      element.classList.add("selected");
    }
    myCounter.textContent = count;
  });
}

/*
this event makes the function select all the products and the for loop starts from position 0 in the
array and if i is smaller than the number of data stored in the array it keeps showing each element.
this means that every element in the array is shown. on line 67 .appendchild allows to attach the 
child to the html by calling the function renderHtml which is called as many times as the for loop
is runned
*/

/*
this event makes the function select or unselct the item when it is clicked. if the element contains
select in its classlist then selected is removed. if it doesn't contain selected in the classlist
then selected is added. the final element is returned
 */

/* 
a constant named renderHtml was created and consists of a function that takes product as an argument
another constant named element allows to create an element, in this case a div and exports it to the 
html thanks to the property .innerHTML. a weird quotation mark is used to say what will be shown in
the html.the first div includes the class of the product and its id and data name, by using the ${}
the product title is retrieved from the array stored in the constant data. the following div includes 
the image and its properties stored in the class. the h2 stores the title of each product which is 
again retrieved by using the ${}. the p tag includes the product description which is also retrieved
from the data array
*/

/* 
a constant variable called data was created to store all the products in an array. There are three 
products (0,1,2) each made up of three objects which have 3 properties. These properties are all strings.
*/
