let paragraphElement = document.getElementById("text");
let paragraphText = document.getElementById("text").innerText;
let showMoreLessButton = document.querySelector(".show-more-less-btn");
let characterCount = 85;
let paragraphStatus = "shorten";

paragraphElement.innerHTML = paragraphText.substring(0, characterCount) + "...";

const onShowMoreLessButtonClick = () => {
  if (paragraphStatus === "shorten") {
    paragraphElement.innerHTML = paragraphText;
    showMoreLessButton.innerHTML = "show less";
    paragraphStatus = "normal";
  } else if (paragraphStatus === "normal") {
    paragraphElement.innerHTML =
      paragraphText.substring(0, characterCount) + "...";
    showMoreLessButton.innerHTML = "show more";
    paragraphStatus = "shorten";
  }
};
