// AOS.init();

const servicesDetails = [
  {
    id: "one",
    heading: "all muscial instruments repairs.",
    secondHeading:
      "with our well trained engineers, with years of experience in the playing and repairing of musical instrument, your music instrument are i save hands",
    thirdHeading:
      "we deliver at the promised date. no unneccessary delay. we are reliable and dependable. no worries if your musical instrument are bad, we got you covered!",
    image: "./images/repairs3.jpeg"
  },
  {
    id: "two",
    heading: "sales and supply all kinds of musical instrument.",
    secondHeading:
      "with our well trained engineers, with years of experience in the playing and repairing of musical instrument, your music instrument are i save hands",
    thirdHeading:
      "we deliver at the promised date. no unneccessary delay. we are reliable and dependable. no worries if your musical instrument are bad, we got you covered!",
    image: "./images/sales2.jpeg"
  },
  {
    id: "three",
    heading: "installation of all kinds of musical instrument.",
    secondHeading:
      "with our well trained engineers, with years of experience in the playing and repairing of musical instrument, your music instrument are i save hands",
    thirdHeading:
      "we deliver at the promised date. no unneccessary delay. we are reliable and dependable. no worries if your musical instrument are bad, we got you covered!",
    image: "./images/repairs1.jpg"
  },
  {
    id: "four",
    heading: "audio balancing.",
    secondHeading:
      "with our well trained engineers, with years of experience in the playing and repairing of musical instrument, your music instrument are i save hands",
    thirdHeading:
      "we deliver at the promised date. no unneccessary delay. we are reliable and dependable. no worries if your musical instrument are bad, we got you covered!",
    image: "./images/audio_balancing.jpeg"
  },
  {
    id: "five",
    heading: "solar panel and inverter installation.",
    secondHeading:
      "with our well trained engineers, with years of experience in the playing and repairing of musical instrument, your music instrument are i save hands",
    thirdHeading:
      "we deliver at the promised date. no unneccessary delay. we are reliable and dependable. no worries if your musical instrument are bad, we got you covered!",
    image: "./images/solar_installation.jpeg"
  },
  {
    id: "six",
    heading: "solar panel sales and supply.",
    secondHeading:
      "with our well trained engineers, with years of experience in the playing and repairing of musical instrument, your music instrument are i save hands",
    thirdHeading:
      "we deliver at the promised date. no unneccessary delay. we are reliable and dependable. no worries if your musical instrument are bad, we got you covered!",
    image: "./images/solar_sales.jpeg"
  }
];

const lines = document.querySelector(".hamburger .lines");
const ul = document.querySelector(".ul");
const nav = document.querySelector("nav");
const main = document.querySelector("body");
const container = document.querySelector(".container");
const span = document.querySelector(".date small");
const back_Top =document.querySelector('.back__top')
const hamburger = elem => {
  elem.classList.toggle("active");
};
lines.addEventListener("click", e => {
  hamburger(ul);
});
const navOnScroll = (elem,value)=> {
const navSize= elem.getBoundingClientRect().height;
if(value > navSize){
  nav.style.background="#4c5dbe";
}
else{
  
  nav.style.background="transparent";
}
}
window.addEventListener("scroll", () => {
  ul.classList.remove("active");
  const onScroll =window.pageYOffset;
  navOnScroll(nav,onScroll)
});


/** services page functionality */
const retriveData = data => {
  const savedData = data
    .map(data => {
      return `<div class="services" id=${data.id}>
    <div class="image_container" data-aos="fade-left"     data-aos-duration="2000" data-aos-delay="10">
      <img src=${data.image} alt="repairs" />
    </div>
    <div class="container_text" data-aos="fade-right"     data-aos-duration="2000"
    >
    <div class="inner_container"
      <span id="headingOne" class="heading">
        <h2>${data.heading}</h2>
      </span>
      <span class="heading" id="headingTwo">
        <h5>
          ${data.secondHeading}
        </h5>
      </span>
      <span class="heading" id="headingThree">
        <h5>
          ${data.thirdHeading}
        </h5>
      </span>
      </div>
    </div>
  </div>`;
    })
    .join("");
  container.insertAdjacentHTML("beforeend", savedData);
};
retriveData(servicesDetails);

/** dynamic page */
const date = new Date().getFullYear();
span.innerText = `${date}`;
/** animate on scroll */
