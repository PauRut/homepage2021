const firstName = "Paulina";
const age = 31;
console.log(`Siema, nazywam sie ${firstName} i mam ${age} lata.`);

// Funkcja strzalkowa

const greet = (ages, secondName) => {
  console.log(
    "Witaj drogi Odwiedzajacy, nazywam sie ${firstName} i mam ${age} lata."
  );
};
greet(32, "Paulina");

// Dodawanie tekst do HTML za pomoca JS

// const heading = document.querySelector('.main__heading--js');
// heading.innerHTML = `ELooo drogi Odwiedzajacy, nazywam sie ${firstName} i mam ${age} lata.`;

// console.log(heading)

// if

if (32 > 20) {
  console.log("to prawda");
} else {
  console.log("to nieprawda");
}

32 > 20 ? console.log("to prawda") : console.log("to niepawda");

const result = 32 > 20 ? true : false;
console.log(result);

// Change the text of heading by clicking on the button
const button = document.querySelector(".action--js");

const myClick = () => {
  const heading = document.querySelector(".main-heading--js");
  heading.innerHTML = `Beautiful furnitures from  zywica, 
    For your office and your home`;
  heading.classList.toggle("change-background-js");
};
button.addEventListener("click", myClick);

// hamburger menu

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
