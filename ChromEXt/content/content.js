// Function to apply styles based on JSON data
function applyStylesToPage(styles) {
  Object.keys(styles).forEach((tag) => {
    const elements = document.querySelectorAll(tag);
    elements.forEach((element) => {
      Object.assign(element.style, styles[tag]);
    });
  });
}
