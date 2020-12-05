var trumpClick = document.querySelectorAll(".trump-img").length;

for (var i = 0; i < trumpClick; i++) {

    document.querySelectorAll(".trump-img")[i].addEventListener("click", function() {

        var audio = new Audio('sounds/fart.mp3');
        audio.play();
    });
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var trump = document.querySelector(".trump-img");
        trump.src = "/images/ufo.png";
        document.addEventListener('keypress', function (e) {
         if (e.key === 'Enter') {
             for (i = 50; i >= 0; i--) {
                trump.style.position = "absolute";
                trump.style.top = i + "px";

             }
         }
        });
    }
});