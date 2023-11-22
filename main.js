const products = [
  {
    id: 1,
    title: "about product",
    imageSrc: "./images/phone1.jpeg",
    description:
      " a wireless handheld device that allows users to make and receive calls.",
    rate: 10,
    price: 25,
  },
  {
    id: 2,
    title: "about product",
    imageSrc: "./images/phone2.jpeg",
    description:
      " a wireless handheld device that allows users to make and receive calls.",
    rate: 10,
    price: 25,
  },
  {
    id: 2,
    title: "about product",
    imageSrc: "./images/phone3.webp",
    description:
      " a wireless handheld device that allows users to make and receive calls.",
    rate: 10,
    price: 23,
  },
  {
    id: 2,
    title: "about product",
    imageSrc: "./images/phone4.jpeg",
    description:
      " a wireless handheld device that allows users to make and receive calls.",
    rate: 10,
    price: 25,
  },
  {
    id: 2,
    title: "about product",
    imageSrc: "./images/phone5.jpeg",
    description:
      " a wireless handheld device that allows users to make and receive calls.",
    rate: 10,
    price: 25,
  },
  {
    id: 2,
    title: "about product",
    imageSrc: "./images/phone6.jpeg",
    description:
      " a wireless handheld device that allows users to make and receive calls.",
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

const render = () => {
  products.forEach((elem, index) => {
    const item = $(`<div id="card">
    <img id="image"src=${elem.imageSrc}>
    <div >
    <p>${elem.title}</p>
    </div>
    <div id="iconPrice">
    <p class="price">$${elem.price}</p>
    <div class="starIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(210, 235, 24)" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(210, 235, 24)" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(210, 235, 24)" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(210, 235, 24)" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(210, 235, 24)" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    </div>
    
    </div>
    
    </div>`);
    $(".master").append(item);
  });
};
$(window).on("load", render);
