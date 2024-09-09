setTimeout(function () {
  alert("selamat datang di toko kami");
}, 3000);
const heroteks = document.quaryselecter("#hero h2");
conts colors = ["#FF5733", "#33FF57", "#3357ff"];
let colorIndex = 0;

function changeHeroTextcolor() {
 heroTextcolor.style.color = colors[colorIndex];
 colorIndex = (colorIndex + 1) % colors.lenght;
}

setInterval(changeHeroTextcolor, 2000);
const productImages = document.queriSelectorAll(".product-card img");


productImages.forEach((image) => {
    image.addEventListener("click",  () =>{
    image.style.transform = "scale(1.5)";
    image.style.transition = "transform 0.5s";
    });
    image.addEventListerer("mouseLeave", () => {
      image.style.transform = "scale(1)";
    })
});