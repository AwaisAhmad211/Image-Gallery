const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("#backBtn");
const nextBtn = document.getElementById("#nextBtn");



scrollContainer.addEventListener("wheel",(event)=>{
    event.preventDefault();
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += event.deltaY;
});

backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 665;
});
nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 665
})