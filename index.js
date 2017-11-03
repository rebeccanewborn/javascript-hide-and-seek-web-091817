function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
  }
}

function deepestChild() {
  const grand = document.querySelector("#grand-node");
  return grand.children[0].children[0].children[0].children[0];
}
