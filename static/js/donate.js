const playAudio = () => {
  try {
    const audio = document.getElementById("audio");
    audio.play();
  } catch (err) {
    console.log(err);
  }
};
setInterval(playAudio, 1000);
