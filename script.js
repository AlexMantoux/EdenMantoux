$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

const images = document.querySelectorAll(".img")

function clearActiveImage() {
    images.forEach(function(image) {
        image.classList.remove("active");
    });
}

images.forEach(function(image, index) {
    image.onclick = function () {
        event.stopPropagation()
        if(images[index].classList.contains("active")){
            images[index].classList.remove("active")
        } else {
            clearActiveImage(index)
            images[index].classList.add("active")
        }
    }
})

window.addEventListener("click", () => {
    clearActiveImage()
})

let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.slider img');
  const captions = ['Caption for Image 1', 'Caption for Image 2', 'Caption for Image 3','4','5','6','7','8'];
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${-slideIndex * 100}%)`;
  }
  document.querySelector('.caption').innerText = captions[slideIndex];
}

function nextSlide() {
  showSlide(++slideIndex);
}

function prevSlide() {
  showSlide(--slideIndex);
}

showSlide(slideIndex);