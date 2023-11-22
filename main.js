const products = [
  {
    id: 1,
    title: "about product1",
    imageSrc: "./images/phone1.jpeg",
    description:
      "1 a wireless handheld device that allows users to make and receive calls.",
    rate: 10,
    price: 25,
  },
  {
    id: 2,
    title: "about product2",
    imageSrc: "./images/phone1.jpeg",
    description:
      "2 a wireless handheld device that allows users to make and receive calls.",
    rate: 10,
    price: 25,
  },
  {
    id: 3,
    title: "about product3",
    imageSrc: "./images/phone1.jpeg",
    description:
      "3 a wireless handheld device that allows users to make and receive calls.",
    rate: 10,
    price: 23,
  },
  {
    id: 4,
    title: "about product4",
    imageSrc: "./images/phone1.jpeg",
    description:
      "4 a wireless handheld device that allows users to make and receive calls.",
    rate: 10,
    price: 25,
  },
  {
    id: 5,
    title: "about product5",
    imageSrc: "./images/phone1.jpeg",
    description:
      "5 a wireless handheld device that allows users to make and receive calls.",
    rate: 10,
    price: 25,
  },
  {
    id: 6,
    title: "about product6",
    imageSrc: "./images/phone1.jpeg",
    description:
      "6 a wireless handheld device that allows users to make and receive calls.",
    rate: 10,
    price: 25,
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
function x() {
  console.log($(this)[0]);
}
const render = () => {
  products.forEach((elem, index) => {
    const item = $(` <div class="cardbutton">
    <div id="${index+1}" class="card"  title="click for more details">
      <img id="image" src="${elem.imageSrc}" />
      <div>
        <p>${elem.title}</p>
      </div>
      <div id="iconPrice">
        <p class="price">$${elem.price}</p>
        <div class="starIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="rgb(210, 235, 24)"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="rgb(210, 235, 24)"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="rgb(210, 235, 24)"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="rgb(210, 235, 24)"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="rgb(210, 235, 24)"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="addToCard"><button id="${
      index + 1
    }" class="addToCard">Add To Cart</button></div>
  </div>`);
    $(".master").append(item);
  });
  $(".card").on("click", function open() {
    

    console.log($(this)[0]);
    console.log($(this)[0].id);

    $("h2").text(products[$(this)[0].id-1].title);
    $('.imgPop')[0].src=products[$(this)[0].id-1].imageSrc
    $(".detail").text(products[$(this)[0].id-1].description);
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
  // $(".addToCard").on("click",);
  $(".OK").on("click", close);
};

$(window).on("load", render);
