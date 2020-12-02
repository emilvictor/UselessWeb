var trumpClick = document.querySelectorAll(".trump-img").length;

for (var i = 0; i < trumpClick; i++) {

    document.querySelectorAll(".trump-img")[i].addEventListener("click", function() {

        var audio = new Audio('sounds/fart.mp3');
        audio.play();
    });
}