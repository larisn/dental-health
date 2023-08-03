
const carousel = document.getElementById("s-depositions");
const items = carousel.querySelectorAll(".item");
const maxItems = items.length;
const radioLabels = carousel.querySelectorAll(".button-carousel label");
let currentItem = 0;

carousel.addEventListener("click", (e) => {
  const targetLabel = e.target.tagName === "LABEL" ? e.target : null;
  if (targetLabel) {
    currentItem = [...radioLabels].indexOf(targetLabel);
    updateCarousel();
  }
});

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.toggle("current-item", index === currentItem);
  });

  items[currentItem].scrollIntoView({inline: "center", behavior: "smooth"});
}
