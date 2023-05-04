document.addEventListener('DOMContentLoaded', function() {
    var playSoundButton = document.getElementById('playSound');
    playSoundButton.addEventListener('click', function() {
      var audio = new Audio('sound.mp3');
      audio.play();
    });
  });
  