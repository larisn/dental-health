
const sliderHandle = document.querySelector(".slider-handle");
const slider = document.querySelector(".slider");
const afterImage = document.querySelector(".after");

let isDragging = false;

const handleEvent = {
  mousedown(e) {
    e.preventDefault();
    isDragging = true;
    slider.classList.add("dragging");
    sliderHandle.style.cursor = "grabbing";
  },
  mousemove(e) {
    if (!isDragging) return;
    const rect = slider.getBoundingClientRect();
    const offsetX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const percentage = (offsetX / rect.width) * 100;

    sliderHandle.style.left = `${percentage}%`;

    const clipPathDistance = rect.width <= 768 ? offsetX : percentage;
    setClipPath(clipPathDistance);
  },
  mouseup() {
    if (!isDragging) return;
    isDragging = false;
    slider.classList.remove("dragging");
    sliderHandle.style.cursor = "grab";
  },
};

function setClipPath(distance) {
  afterImage.style.clipPath = `polygon(${distance}px 0, 100% 0, 100% 100%, ${distance}px 100%)`;
}

sliderHandle.addEventListener("mousedown", handleEvent.mousedown);
document.addEventListener("mousemove", handleEvent.mousemove);
document.addEventListener("mouseup", handleEvent.mouseup);
