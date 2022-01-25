let paragraphElement = document.getElementById("text");
let paragraphContent = document.getElementById("text").innerText;
let showMoreLessButton = document.querySelector(".show-more-less-btn");

let paragraphStatus = "shorten";

paragraphElement.innerHTML = paragraphContent.substring(0, 85) + "...";

const onShowMoreLessButtonClick = () => {
  if (paragraphStatus === "shorten") {
    paragraphElement.innerHTML = paragraphContent;
    paragraphStatus = "normal";
  } else if (paragraphStatus === "normal") {
    paragraphElement.innerHTML = paragraphContent.substring(0, 85) + "...";
    paragraphStatus = "shorten";
  }
};
