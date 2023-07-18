const carouselThree = document.getElementById("carousel-three");
const firstImgThree = document.getElementById("firstImgThree");
const arrowIconsThree = document.querySelectorAll(".icon-three");

let isDragStartThree = false, prevPageXThree, prevScrollLeftThree;
let firstImgWidthThree = firstImgThree.clientWidth + 14;

arrowIconsThree.forEach(iconThree => {
    iconThree.addEventListener("click", () => {
        console.log(iconThree);
        carouselThree.scrollLeft += iconThree.id == "left-three" ? -firstImgWidthThree : firstImgWidthThree;
    })
})

const dragStartThree = (e) => {
    isDragStartThree = true;
    prevPageXThree = e.pageX;
    prevScrollLeftThree = carouselThree.scrollLeft
}

const draggingThree = (e) => {
    if(!isDragStartThree) return;
    e.preventDefault();
    carouselThree.classList.add("dragging");
    let positionDiffThree = e.pageX - prevPageXThree;
    carouselThree.scrollLeft = prevScrollLeftThree - positionDiffThree;
}

const dragStopThree = (e) => {
    isDragStartThree = false;
    carouselThree.classList.remove("dragging");
}

carouselThree.addEventListener("mousedown", dragStartThree)
carouselThree.addEventListener("mousemove", draggingThree)
carouselThree.addEventListener("mouseup", dragStopThree)