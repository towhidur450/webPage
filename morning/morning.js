const input = document.getElementById("search-input");
const button = document.getElementById("search-button");
const content = document.getElementById("content");

button.addEventListener("click", function() {
  const searchTerm = input.value.toLowerCase();
  const searchableNodes = content.childNodes;

  for (let i = 0; i < searchableNodes.length; i++) {
    if (searchableNodes[i].nodeType === Node.TEXT_NODE) {
      const node = searchableNodes[i];
      const nodeContent = node.textContent.toLowerCase();
      const searchTermIndex = nodeContent.indexOf(searchTerm);

      if (searchTermIndex !== -1) {
        const highlightedText = node.textContent.substr(
          searchTermIndex,
          searchTerm.length
        );
        node.textContent =
          node.textContent.replace(highlightedText, `<mark>${highlightedText}</mark>`);
      }
    }
  }
});
