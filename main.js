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
    price: 24,
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
    price: 22,
    Quantity: 1,
  },
  {
    id: 5,
    title: "about product5",
    imageSrc: "./images/phone1.jpeg",
    description:
      "5 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐⭐",
    price: 21,
    Quantity: 1,
  },
  {
    id: 6,
    title: "about product6",
    imageSrc: "./images/phone1.jpeg",
    description:
      "6 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐",
    price: 20,
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
    $("#searchBtn").css({
      "background-color": "goldenrod",
    });
    $("#header").css({
      "background-color": " goldenrod",
    });
    $("P").css({
      " color": " goldenrod",
    });
    $(".master").css({
      "background-color": " rgb(75, 65, 65",
    });
    $(".logoSearch").css({
      "background-color": " rgb(75, 65, 65",
    });
    $(".arrowBack").css({
      "background-color": " transparent",
    });
    $(".myCart").css({
      "background-color": " rgb(75, 65, 65",
      color: " #c2d9ff",
    });
    $(".pft").css({
      "background-color": " #c2d9ff",
    });
    $(".addToCart").css({
      "background-color": " goldenrod",
    });
    $(".link").css({
      "background-color": " goldenrod",
    });
    btnMode.css({
      "background-color": " goldenrod",
    });
  } else if (btnMode.val() === "LightMode") {
    btnMode.val("DarkMode");
    // body.css({
    //   "background-color": " white",
    // });
    // !!
    $("#header").css({
      "background-color": "var(--button) ",
    });
    $(".master").css({
      "background-color": "white",
    });
    $(".logoSearch").css({
      "background-color": "white",
    });
    $(".arrowBack").css({
      "background-color": " transparent",
    });
    $(".myCart").css({
      "background-color": " rgb(75, 65, 65",
      color: " #c2d9ff",
    });
    $(".pft").css({
      "background-color": " #c2d9ff",
    });
    $(".addToCart").css({
      "background-color": "  var(--button)",
    });
    $(".link").css({
      "background-color": "  var(--button)",
    });
    btnMode.css({
      "background-color": " var(--button)",
    });
    $("#searchBtn").css({
      "background-color": " var(--button)",
    });
    $("p").css({
      " color": " goldenrod",
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

let totalPrice = [];
const myListProduct = JSON.parse(localStorage.getItem("myListProduct")) || [];

let aa = 0;

// !! --------render-------------

const renderallproducts = () => {
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
  // !! for popup------------------------
  $(".card").on("click", function open() {
    $(".poph2").text(products[$(this)[0].id - 1].title);
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
  // !! -----------for addToCard -----------
  $(".addToCard").on("click", function () {
    const xx = products.find((x) => x.id == $(this)[0].id);
    if (myListProduct.includes(xx)) {
      totalPrice.push(xx.price);
      localStorage.setItem("totalPrice", totalPrice);
      xx.Quantity++;
      localStorage.setItem("myListProduct", JSON.stringify(myListProduct));
    } else {
      myListProduct.push(xx);

      totalPrice.push(xx.price);
      localStorage.setItem("myListProduct", JSON.stringify(myListProduct));
      localStorage.setItem("totalPrice", totalPrice);
    }
    const finalQuantity = JSON.parse(
      localStorage.getItem("myListProduct")
    )?.map((ele) => {
      return ele.Quantity;
    });
    const totalQuantity = finalQuantity?.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    localStorage.setItem("totalQuantity", totalQuantity);
    console.log(totalQuantity);
    $(".arrowBack").css({
      display: "block",
    });

    $("#Basket")[0].value = ` My Basket  (${totalQuantity}) `;
  });

  const myBasket = $(
    `<input type="button" id="Basket" onclick="basketScreen()" value="My Basket (${
      localStorage.getItem("totalQuantity") || 0
    })">`
  );

  $(".baskesBin").append(myBasket);
  $(".OK").on("click", close);
};
// !! ----------finish render-------------

function basketScreen() {
  $(".totalPrice").show();
  $(".headerBasket").css({
    display: "flex",
  });
  const finalPrice = JSON.parse(localStorage.getItem("myListProduct"))?.map(
    (ele) => {
      return ele.price * ele.Quantity;
    }
  );

  const sumWithInitial = finalPrice?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  $(".arrowBack").css({
    display: "block",
  });
  $("#section").css({
    display: "none",
  });
  $(".myCart").css({
    display: "flex",
  });
  $("#header").css({
    display: "none",
  });
  const basketList = JSON.parse(localStorage.getItem("myListProduct"));

  basketList?.forEach((elem, index) => {
    console.log(index);

    const final = $(`<div id= ${index + 1} class="myProduct">
         
  <div class="imgTrash"><img src=${JSON.stringify(elem.imageSrc)}/> <button class="bt" " ><i class="fa-solid fa-trash-can"></i></button></div>
  <div class="pft">
    <p>${elem.price}</p>
    <p>${elem.Quantity} </p>
    <p>${elem.price * elem.Quantity}</p>
    
  </div>
 
</div>`);
 
$(".bt").on("click", function () {
  const productIdToRemove = $(this).closest(".myProduct").attr("id");

  // Find the product in myListProduct array by id
  const indexToRemove = myListProduct.findIndex((product) => product.id.toString() === productIdToRemove);

  if (indexToRemove !== -1) {
    // Remove the product from the array in memory
    myListProduct.splice(indexToRemove, 1);
    totalPrice.splice(indexToRemove, 1);

    // Save the updated array back to local storage
    localStorage.setItem("myListProduct", JSON.stringify(myListProduct));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));

    // Remove the corresponding HTML element
    $(this).closest(".myProduct").remove();

    // Recalculate total price
    const finalPrice = JSON.parse(localStorage.getItem("myListProduct"))?.map(
      (ele) => ele.price * ele.Quantity
    );

    const sumWithInitial = finalPrice?.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    // Update the total price display
    $(".totalPrice").text("Total Price" + " " + sumWithInitial);

    // Update the total quantity in the basket
    const finalQuantity = JSON.parse(localStorage.getItem("myListProduct"))?.map(
      (ele) => ele.Quantity
    );
    const totalQuantity = finalQuantity?.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    localStorage.setItem("totalQuantity", totalQuantity);
    $("#Basket")[0].value = ` My Basket  (${totalQuantity}) `;
  }
});
    $(".myCart").append(final);
  });
  for (let index = 0; index < totalPrice.length; index++) {
    aa += totalPrice[index];
    localStorage.setItem("aa", aa);
  }
  $(".totalPrice").text("Total Price" + " " + sumWithInitial);
}
const hide = function () {
  $(".totalPrice").hide();
  $(".arrowBack").hide();
  $(".headerBasket").hide();
  $(".myProduct").hide(1000);
  $("#section").css({
    display: "grid",
  });
  $("#header").css({
    display: "flex",
  });
};

$(window).on("load", renderallproducts(products));
