let meuaudio = document.getElementById("meuAudio");

function iniciarAudio() {     
      meuaudio.currentTime = 0;
      meuaudio.play();
}

function pararAudio() {     
      meuaudio.pause();
}