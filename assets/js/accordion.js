
const accordionQuestions = document.querySelectorAll(".container-questions");

accordionQuestions.forEach((accordion) => {
  const answer = accordion.querySelector(".answer");
  const icon = accordion.querySelector(".icon");

  accordion.addEventListener("click", () => {
    const isOpen = accordion.classList.contains("open");

    closeAllQuestions();

    if (!isOpen) {
      accordion.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.innerHTML = "-";
    }
  });
});

function closeAllQuestions() {
  const openQuestions = document.querySelectorAll(".container-questions.open");

  openQuestions.forEach((question) => {
    const answer = question.querySelector(".answer");
    const icon = question.querySelector(".icon");

    question.classList.remove("open");
    answer.style.maxHeight = null;
    icon.innerHTML = "+";
  });
}
