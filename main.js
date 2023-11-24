const products = [
  {
    id: 1,
    title: "about product1",
    imageSrc: "./images/phone1.jpeg",
    description:
      "1 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐",
    price: 25,
    Quantity: 1,
  },
  {
    id: 2,
    title: "about product2",
    imageSrc: "./images/phone1.jpeg",
    description:
      "2 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐⭐⭐",
    price: 25,
    Quantity: 1,
  },
  {
    id: 3,
    title: "about product3",
    imageSrc: "./images/phone1.jpeg",
    description:
      "3 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐",
    price: 23,
    Quantity: 1,
  },
  {
    id: 4,
    title: "about product4",
    imageSrc: "./images/phone1.jpeg",
    description:
      "4 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐⭐⭐",
    price: 25,
    Quantity: 1,
  },
  {
    id: 5,
    title: "about product5",
    imageSrc: "./images/phone1.jpeg",
    description:
      "5 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐⭐",
    price: 25,
    Quantity: 1,
  },
  {
    id: 6,
    title: "about product6",
    imageSrc: "./images/phone1.jpeg",
    description:
      "6 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐",
    price: 25,
    Quantity: 1,
  },
];
const products2 = [
  {
    id: 1,
    title: "about product1",
    imageSrc: "./images/phone2.jpeg",
    description:
      "1 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐",
    price: 25,
    Quantity: 1,
  },
  {
    id: 2,
    title: "about product2",
    imageSrc: "./images/phone2.jpeg",
    description:
      "2 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐⭐⭐",
    price: 25,
    Quantity: 1,
  },
  {
    id: 3,
    title: "about product3",
    imageSrc: "./images/phone2.jpeg",
    description:
      "3 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐",
    price: 23,
    Quantity: 1,
  },
];
const body = $("body");

const btnMode = $("#mode");

function toggle() {
  if (btnMode.val() === "DarkMode") {
    btnMode.val("LightMode");
    body.css({
      "background-color": " black",
    });
  } else if (btnMode.val() === "LightMode") {
    btnMode.val("DarkMode");
    body.css({
      "background-color": " white",
    });
  }
}

function close() {
  $(".popup").css("visibility", "hidden");
  $(".master").css({
    opacity: "1",
    "pointer-events": "auto",
  });
}

let counter = 0;
let totalPrice = [];
const myListProduct = JSON.parse(localStorage.getItem("myListProduct")) || [];

let aa = 0;

const render = (products) => {
  products.forEach((elem, index) => {
    const item = $(` <div id="${index + 1}"  class="cardbutton">
    <div id="${index + 1}" class="card"  title="click for more details">
      <img id="image" src="${elem.imageSrc}" />
      <div>
        <p>${elem.title}</p>
      </div>
      <div id="iconPrice">
        <p class="price">$${elem.price}</p>
        <div class="starIcon">
        <h2>${elem.rate}</h2>
        
        </div>
      </div>
    </div>
    <div id=${index + 1} class="addToCard"><button id=${
      index + 1
    } class="addToCart" >Add To Cart</button></div>
  </div>`);
    $(".master").append(item);
  });
  $(".card").on("click", function open() {
    console.log($(this)[0]);
    console.log($(this)[0].id);
    // const xx = products.filter((x) => x.id == $(this)[0].id);

    $("h2").text(products[$(this)[0].id - 1].title);
    $(".imgPop")[0].src = products[$(this)[0].id - 1].imageSrc;
    $(".detail").text(products[$(this)[0].id - 1].description);
    $(".popup").css({
      visibility: "visible",
      transform: "translate(-50%,-50%) scale(1)",
      top: "50%",
    });
    $(".master").css({
      opacity: "0.4",
      "pointer-events": "none",
    });
  });

  $(".addToCard").on("click", function () {
    counter++;
    localStorage.setItem("counter", counter);
    myBasket[0].value = "My Basket " + `(${counter}) `;

    const xx = products.find((x) => x.id == $(this)[0].id);
    if (myListProduct.includes(xx)) {
      totalPrice.push(xx.price);

      xx.Quantity++;
      localStorage.setItem("myListProduct", JSON.stringify(myListProduct));
    } else {
      myListProduct.push(xx);

      totalPrice.push(xx.price);
      localStorage.setItem("myListProduct", JSON.stringify(myListProduct));
    }
  });
  const myBasket = $(
    `<input type="button" id="Basket" onclick="basketScreen()" value="My Basket (${
      localStorage.getItem("counter") || 0
    })">`
  );

  $(".baskesBin").append(myBasket);
  $(".OK").on("click", close);
};
function basketScreen() {
  $("#section").css({
    display: "none",
  });
  $(".myCart").css({
    display: "flex",
  });
  $("#header").css({
    display: "none",
  });
  const w = JSON.parse(localStorage.getItem("myListProduct"));

  w.forEach((elem, index) => {
    console.log(elem);
    const final = $(`<div id= ${index + 1} class="myProduct">
         
  <div><img src=${JSON.stringify(elem.imageSrc)}/></div>
  <div class="pft">
    <p>${elem.price}</p>
    <p>${elem.Quantity} </p>
    <p>${elem.price * elem.Quantity}</p>
  </div>
 
</div>`);
    $(".myCart").append(final);
  });
  for (let index = 0; index < totalPrice.length; index++) {
    console.log(totalPrice[index]);
    aa += totalPrice[index];
    localStorage.setItem("aa", aa);
  }
  $(".totalPrice").text("Total Price" + " " + localStorage.getItem("aa"));
}

$(window).on("load", render(products));
const renderTwo = (products2) => {
  products2.forEach((elem, index) => {
    const item = $(` <div id="${index + 1}"  class="cardbutton">
    <div id="${index + 1}" class="card"  title="click for more details">
      <img id="image" src="${elem.imageSrc}" />
      <div>
        <p>${elem.title}</p>
      </div>
      <div id="iconPrice">
        <p class="price">$${elem.price}</p>
        <div class="starIcon">
        <h2>${elem.rate}</h2>
        
        </div>
      </div>
    </div>
    <div id=${index + 1} class="addToCard"><button id=${
      index + 1
    } class="addToCart" >Add To Cart</button></div>
  </div>`);
    $(".master").append(item);
  });
  $(".card").on("click", function open() {
    console.log($(this)[0]);
    console.log($(this)[0].id);
    // const xx = products.filter((x) => x.id == $(this)[0].id);

    $("h2").text(products[$(this)[0].id - 1].title);
    $(".imgPop")[0].src = products[$(this)[0].id - 1].imageSrc;
    $(".detail").text(products[$(this)[0].id - 1].description);
    $(".popup").css({
      visibility: "visible",
      transform: "translate(-50%,-50%) scale(1)",
      top: "50%",
    });
    $(".master").css({
      opacity: "0.4",
      "pointer-events": "none",
    });
  });

  $(".addToCard").on("click", function () {
    counter++;
    localStorage.setItem("counter", counter);
    myBasket[0].value = "My Basket " + `(${counter}) `;

    const xx = products.find((x) => x.id == $(this)[0].id);
    if (myListProduct.includes(xx)) {
      totalPrice.push(xx.price);

      xx.Quantity++;
      localStorage.setItem("myListProduct", JSON.stringify(myListProduct));
    } else {
      myListProduct.push(xx);

      totalPrice.push(xx.price);
      localStorage.setItem("myListProduct", JSON.stringify(myListProduct));
    }
  });
  const myBasket = $(
    `<input type="button" id="Basket" onclick="basketScreen()" value="My Basket (${
      localStorage.getItem("counter") || 0
    })">`
  );

  $(".baskesBin").append(myBasket);
  $(".OK").on("click", close);
};
// $("#mobile").on("click", renderTwo(products2));
 
