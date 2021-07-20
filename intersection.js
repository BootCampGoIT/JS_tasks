// const third = document.querySelector(".third");
// const sixth = document.querySelector(".sixth");

// const getsomething = (intersectingElements, property) => {
// //   console.log("intersectingElements :>> ", intersectingElements);
// //   console.log("property :>> ", property);
//   intersectingElements.forEach((element) => {
//       console.log('element :>> ', element);
//     if (element.isIntersecting) {
//       console.log("intersecting");
//       element.target.style.backgroundColor = "blue";
//     }
//   });
// };

// const options = {
//   root: null,
// //   rootMargin: "-50px",
//   threshold: 0.25, //[0, 0.25, 0.5, 0.75, 1]
// };

// const observer = new IntersectionObserver(getsomething, options);

// observer.observe(third);
// observer.observe(sixth);

// ===================================

const sectionsArr = document.querySelector(".observer").children;
// console.log("sectionsArr :>> ", sectionsArr);

function onObserve(intersectingElements) {
  intersectingElements.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      [...sectionsArr].forEach((element) => {
        if (element.classList.contains("activeTitle")) {
          return;
        } else {
          [...sectionsArr].forEach((link) => {
            link.dataset.id === target.id && link.classList.add("activeTitle");
          });
        }
      });
    }
    if (!isIntersecting) {
      [...sectionsArr].forEach((link) => {
        link.dataset.id === target.id && link.classList.remove("activeTitle");
      });
    }

    //   sectionsArr;
    //   console.log("arr :>> ", arr);

    //   arr.forEach((item) => {
    //     item.classList.add("activeTitle");
    //     observer.unobserve(target);
    //   });
    // }
    // if (!isIntersecting) {
    //   const arr = target.querySelectorAll(".title");
    //   arr.forEach((item) => {
    //     item.classList.remove("activeTitle");
    //   });
    // }
  });
}

const options = {
  root: null,
  rootMargin: "-50px",
  threshold: 0.75,
};

const observer = new IntersectionObserver(onObserve, options);

const mainBlock = document.querySelector(".mainBlock");

mainBlock.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
