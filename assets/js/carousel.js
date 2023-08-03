
const buttons = document.querySelectorAll(".button-carousel button");
const items = document.querySelectorAll(".item");
const maxItems = items.length;
let currentItem = 0;

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentItem = index;

    items.forEach((item) => item.classList.remove("current-item"));
    items[currentItem].classList.add("current-item");

    items[currentItem].scrollIntoView({
      inline: "center",
      behavior: "smooth",
      block: "nearest",
    });

    //button radio
    buttons.forEach((btn) => btn.classList.remove("current-button"));
    button.classList.add("current-button");
  });
});
