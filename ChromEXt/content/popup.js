document
  .getElementById("h1Button")
  .addEventListener("click", () => changeColor("h1"));
document
  .getElementById("h2Button")
  .addEventListener("click", () => changeColor("h2"));
document
  .getElementById("aButton")
  .addEventListener("click", () => changeColor("a"));
document
  .getElementById("pButton")
  .addEventListener("click", () => changeColor("p"));
document
  .getElementById("titleButton")
  .addEventListener("click", () => changeColor("title"));

function changeColor(tag) {
  const color = getRandomColor();
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: applyColor,
      args: [tag, color],
    });
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function applyColor(tag, color) {
  if (tag === "title") {
    document.title = "Colored Title"; // Optional: Change the document title text
    document.querySelector("head > title").style.color = color;
  } else {
    const elements = document.querySelectorAll(tag);
    elements.forEach((element) => {
      element.style.color = color;
    });
  }
}
