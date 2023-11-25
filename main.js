const products = [
  {
    id: 1,
    title: "adidas 1",
    imageSrc: "./images/redshoes.png",
    description:
      "1 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐",
    price: 50,
    Quantity: 1,
  },
  {
    id: 2,
    title: "nike 2",
    imageSrc: "./images/wshoes.png",
    description:
      "2 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐⭐⭐",
    price: 60,
    Quantity: 1,
  },
  {
    id: 3,
    title: "buma 3",
    imageSrc: "./images/ccc.png",
    description:
      "3 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐",
    price: 70,
    Quantity: 1,
  },
  { 
    id: 4,
    title: "adidas 4",
    imageSrc: "./images/ccccc-removebg-preview.png",
    description:
      "4 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐⭐⭐",
    price: 80,
    Quantity: 1,
  },
  {
    id: 5,
    title: "adidas 5",
    imageSrc: "./images/aa.png",
    description:
      "5 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐⭐",
    price: 90,
    Quantity: 1,
  },
  {
    id: 6,
    title: "adidas 6",
    imageSrc: "./images/cv.png",
    description:
      "6 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐",
    price: 100,
    Quantity: 1,
  },
] 
const mobile = [
  {
    id: 1,
    title: "I PHONE X",
    imageSrc: "./images/phone1.jpeg",
    description:
      "1 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐",
    price: 25,
    Quantity: 1,
  },
  {
    id: 2,
    title: "I PHONE 11PRO MAX",
    imageSrc: "./images/phone2.jpeg",
    description:
      "2 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐⭐⭐",
    price: 24,
    Quantity: 1,
  },
  {
    id: 3,
    title: "I PHONE 12PRO MAX",
    imageSrc: "./images/phone4.jpeg",
    description:
      "2 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐⭐⭐",
    price: 24,
    Quantity: 1,
  },
  {
    id: 4,
    title: "I PHONE 13PRO MAX",
    imageSrc: "./images/phone5.jpeg",
    description:
      "2 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐⭐⭐",
    price: 24,
    Quantity: 1,
  },
  {
    id: 5,
    title: "I PHONE 14PRO MAX",
    imageSrc: "./images/phone6.jpeg",
    description:
      "2 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐⭐⭐",
    price: 24,
    Quantity: 1,
  },
  {
    id: 6,
    title: "I PHONE 15PRO MAX",
    imageSrc: "./images/phone7.jpeg",
    description:
      "2 a wireless handheld device that allows users to make and receive calls.",
    rate: "⭐⭐⭐⭐⭐",
    price: 24,
    Quantity: 1,
  },

 
];
 
const body = $("body");

const btnMode = $("#mode");
$("#Basket").html(`My Basket (${localStorage.getItem("totalQuantity") || 0})`)
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
    $("#Basket").html(` My Basket  (${totalQuantity}) `);
   // $("#Basket")[0].value = ` My Basket  (${totalQuantity}) `;
  });

  // const myBasket = $(
  //   `<input type="button" id="Basket" onclick="basketScreen()" value="My Basket (${
  //     localStorage.getItem("totalQuantity") || 0
  //   })">`
  // );

  // $(".baskesBin").append(myBasket);
  $(".OK").on("click", close);
};
const renderMobile = () => {
  mobile.forEach((elem, index) => {
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
    <div id=${index + 1} class="addToCard1"><button id=${
      index + 1
    } class="addToCart" >Add To Cart</button></div>
  </div>`);
    $(".master2").append(item);
  });
  // !! for popup------------------------
  $(".card").on("click", function open() {
    $(".poph2").text(mobile[$(this)[0].id - 1].title);
    $(".imgPop")[0].src = mobile[$(this)[0].id - 1].imageSrc;
    $(".detail").text(mobile[$(this)[0].id - 1].description);
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
  $(".addToCard1").on("click", function () {
    const xx = mobile.find((x) => x.id == $(this)[0].id);
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

   // $("#Basket")[0].value = ` My Basket  (${totalQuantity}) `;
   $("#Basket").html(`My Basket (${totalQuantity})`)
  });

  // const myBasket = $(
  //   `<input type="button" id="Basket" onclick="basketScreen()" value="My Basket (${
  //     localStorage.getItem("totalQuantity") || 0
  //   })">`
  // );

  // $(".baskesBin").append(myBasket);
  
  $(".OK").on("click", close);
};
// !! ----------finish render-------------

const  basketScreen=()=> {
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

    // Check if there are no more items in the cart
    if (myListProduct.length === 0) {
      // Clear the entire local storage
      localStorage.clear();
    } else {
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
$("#Basket").on("click",function(){
  basketScreen()
})
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
renderallproducts(products) 
renderMobile(mobile) 

$(".master2").hide()
$("#mobile").on("click",function(){
  $(".master").hide()
  $(".master2").show()
  

})
$("#shoes").on("click",function(){

   $(".master2").hide()
  $(".master").show()
//render(products)
 

 
})
//  renderallproducts(products)
// $(window).on("load",);
