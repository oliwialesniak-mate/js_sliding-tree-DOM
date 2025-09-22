'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const tree = document.getElementById("tree"); // assuming tree root has id="tree"

  tree.addEventListener("click", (event) => {
    // Only act if click is on a <span>
    if (event.target.tagName !== "SPAN") return;

    const parentLi = event.target.closest("li");
    if (!parentLi) return;

    const childrenContainer = parentLi.querySelector("ul");
    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;
  });
});
