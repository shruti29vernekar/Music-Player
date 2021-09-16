
            const music = document.querySelector('audio');
            const img = document.querySelector("img");
            const play = document.getElementById('play');

            let isPlyaing = false;

            //for ply function
            const playMusic = () => {
                isPlyaing = true;
                music.play();
                play.classList.replace("fa-play", "fa-pause");
                img.classList.add("anime");

        };
                //for pause function
            const pauseMusic =  () => {
                isPlyaing = false;
                music.pause();
                play.classList.replace("fa-pause", "fa-play");
                img.classList.remove("anime");
            };

            play.addEventListener("click", () =>{
                //if(isPlyaing){
                 //   pauseMusic();
               // }else{
               //     playMusic();
                //}
                isPlyaing ? pauseMusic():playMusic();
            });


        