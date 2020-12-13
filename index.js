
        //Array of sounds:

        const sounds = [
            'sounds/fart.mp3',
            'sounds/burp.mp3',
            'sounds/monkey.mp3',
            'sounds/fart2.mp3',
           ];

          
        //Function that chooses a random sound from the  array of sounds

        document.querySelector(".trump-img").addEventListener("click", function() {
            let audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
            audio.play();    
            wall.style.backgroundColor = randomColor();
        });

        const wall = document.querySelector('body');


  
        //Function that changes the img from trump to UFO when pressing ENTER once.
        //On second ENTER (keypress) the eventlistener adds a class to the image which is styled with css and makes the UFO move

        document.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                const trump = document.querySelector(".trump-img");
                trump.src = "/images/ufo.png";
                document.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                trump.classList.add('img-new');
                trump.classList.add('visible');        
                }
                });
            }
        });


        //Completely useless but cool function that changes the color of the whole document-background when scrolling the mouse

        const colors = ['#EEDD82', '#c0ffd5', '#c0cbff', '#f9daff', 'orange'];

        function randomColor(){
           const randomNr = Math.floor(Math.random() * colors.length)

            for (color in colors) {
            if (color == randomNr) {
                return colors[color];
            }          
            };
        };


        //This function changes the backgroundcolor when scrolling the mouse
        
        window.addEventListener('scroll', () => {
            document.body.style.backgroundColor =
              window.scrollY < 100 ? 'rgb(245, 212, 245)' : '#ffc0cb';
          });



        

        