
// ALL BELOW JS IS USED FOR SHOWCASING ONLY. SETS A RANDOM SEED FOR EVERY PLACEHOLDER IMAGE.
function getRandom(num) {
  return Math.floor(Math.random() * num);
}

function SetRandom(){
    images = document.querySelectorAll(".card-img-top");

    for (let i = 0; i < images.length; i++) {
      images[i].src = `https://picsum.photos/seed/${getRandom(9000)}/200/200`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
     SetRandom();
     pageButtons = document.querySelectorAll(".page-link");
     for (let i = 0; i < pageButtons.length; i++) {
       let button = pageButtons[i];
       button.onclick = () => {
         SetRandom();
       };
     }
});
