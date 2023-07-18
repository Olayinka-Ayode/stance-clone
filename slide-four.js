const carouselFour = document.getElementById("carousel-four");
const firstImgFour = document.getElementById("firstImgFour");
const arrowIconsFour = document.querySelectorAll(".icon-four");

let isDragStartFour = false,
  prevPageXFour,
  prevScrollLeftFour;
let firstImgWidthFour = firstImgFour.clientWidth + 14;

arrowIconsFour.forEach((iconFour) => {
  iconFour.addEventListener("click", () => {
    carouselFour.scrollLeft +=
      iconFour.id == "left-Four" ? -firstImgWidthFour : firstImgWidthFour;
  });
});

const dragStartFour = (e) => {
  isDragStartFour = true;
  prevPageXFour = e.pageX;
  prevScrollLeftFour = carouselFour.scrollLeft;
};

const draggingFour = (e) => {
  if (!isDragStartFour) return;
  e.preventDefault();
  carouselFour.classList.add("dragging");
  let positionDiffFour = e.pageX - prevPageXFour;
  carouselFour.scrollLeft = prevScrollLeftFour - positionDiffFour;
};

const dragStopFour = (e) => {
  isDragStartFour = false;
  carouselFour.classList.remove("dragging");
};

carouselFour.addEventListener("mousedown", dragStartFour);
carouselFour.addEventListener("mousemove", draggingFour);
carouselFour.addEventListener("mouseup", dragStopFour);
