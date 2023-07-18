const carouselTwo = document.getElementById("carousel-two");
const firstImgTwo = document.getElementById("firstImgTwo");
const arrowIconsTwo = document.querySelectorAll(".icon-two");

let isDragStartTwo = false, prevPageXTwo, prevScrollLeftTwo;
let firstImgWidthTwo = firstImgTwo.clientWidth + 14;

arrowIconsTwo.forEach(iconTwo => {
    iconTwo.addEventListener("click", () => {
        console.log(iconTwo);
        carouselTwo.scrollLeft += iconTwo.id == "left-two" ? -firstImgWidthTwo : firstImgWidthTwo;
    })
})

const dragStartTwo = (e) => {
    isDragStartTwo = true;
    prevPageXTwo = e.pageX;
    prevScrollLeftTwo = carouselTwo.scrollLeft
}

const draggingTwo = (e) => {
    if(!isDragStartTwo) return;
    e.preventDefault();
    carouselTwo.classList.add("dragging");
    let positionDiffTwo = e.pageX - prevPageXTwo;
    carouselTwo.scrollLeft = prevScrollLeftTwo - positionDiffTwo;
}

const dragStopTwo = (e) => {
    isDragStartTwo = false;
    carouselTwo.classList.remove("dragging");
}

carouselTwo.addEventListener("mousedown", dragStartTwo)
carouselTwo.addEventListener("mousemove", draggingTwo)
carouselTwo.addEventListener("mouseup", dragStopTwo)