let paragraphElement = document.getElementById("text");
let paragraphContent = document.getElementById("text").textContent;
let showMoreButton = document.querySelector(".show-more-btn");
let showLessButton = document.querySelector(".show-less-btn");

function shortenParagraphContent() {
  if (paragraphContent.length > 1) {
    paragraphElement.innerHTML = paragraphContent.slice(0, 10);
  }
}

const showMoreContent = () => {
  paragraphElement.innerHTML = paragraphContent;
  showMoreButton.style.display = "none";
  showLessButton.style.display = "block";
};

const showLessContent = () => {
  shortenParagraphContent();
  showMoreButton.style.display = "block";
  showLessButton.style.display = "none";
};

shortenParagraphContent();
