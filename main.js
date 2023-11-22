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
    price: 25,
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
    const card = $(`<div id="card">
    <img id="image"src=${elem.imageSrc}>
    </div>`);
     
  });
};
$(window).on("load", render); //q2
 