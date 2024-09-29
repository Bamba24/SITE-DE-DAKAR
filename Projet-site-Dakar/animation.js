const threshold = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    // parcoure tous les entry
    if (entry.intersectionRatio > threshold) {
      // entry superieur au ratio
      entry.target.classList.add("reveal-visible"); // ajoute la class "reveal"
      observer.unobserve(entry.target); // puis arrete l'observation
    }
  });
};

const handleIntersect1 = function (entries, observer) {
  entries.forEach(function (entry) {
    // parcoure tous les entry
    if (entry.intersectionRatio > threshold) {
      // entry superieur au ratio
      entry.target.classList.add("reveal-visible-animation"); // ajoute la class "reveal"
      observer.unobserve(entry.target); // puis arrete l'observation
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options); // callBack et options
const featureElements = document.querySelectorAll(".reveal");
featureElements.forEach((element) => {
  observer.observe(element);
});

const observer2 = new IntersectionObserver(handleIntersect1, options);
const articleElements = document.querySelectorAll(".reveal-article");
articleElements.forEach((element) => {
  observer2.observe(element);
});

const articleElements2 = document.querySelectorAll(".reveal-article-2");
articleElements2.forEach((element) => {
  observer2.observe(element);
});
