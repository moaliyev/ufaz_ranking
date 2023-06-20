const mentalIllness = () => {
  const mentalIllnessSound = document.getElementById("mentalIllnessSound");
  mentalIllnessSound.play();
};

const damnMoves = () => {
  const footer = document.getElementById("footer");
  const video = document.getElementById("video");
  const empty = document.getElementById("empty");
  empty.classList.remove("hide");
  video.autoplay = true;
  video.loop = true;
  video.play();
  footer.classList.add("footer-go-down");
};
try {
  const dialog = document.getElementById("dialog");
  const dialogTextField = document.getElementById("dialog-text");
  const body = document.getElementById("body");
  dialog.show();
  const dialogText = [
    "あなたは小さなチンポを持っています",
    "Oh... You don't know japanese?? Gomenasaii(( I didnt know that(",
    "OK then I will speak in english",
    "Hi ugazien (❁´◡`❁)",
    "If you are not an ugazien, then join us! <a target='_blank' href='https://www.google.com/search?client=opera-gx&q=avropaya+getmədən+avropada+təhsil&sourceid=opera&ie=UTF-8&oe=UTF-8'>Smash here</a>",
    "Hey! Don't smash it hard like that.. it hurts ≧ ﹏ ≦",
    "Oh.. are you ok? You kinda seem uhhh... sad. Maybe I can help you.",
    "You seem kinda lonely. I think I can fix that. Just click <button onclick='mentalIllness()'>here</button>",
    "OK. I'm so sorry that wasn't me. <br>（＞人＜；）",
    "I would never say something terrible like that to someone kawaii like you (✿◕‿◕✿)",
    "Do you want me to cheer you up? <button onclick='damnMoves()'>Yes</button> <button id='0'>No</button>",
  ];
  body.classList.add("layer");
  let index = 0;
  dialogTextField.innerText = dialogText[index];
  dialog.addEventListener("click", e => {
    index++;
    if (index >= dialogText.length) {
      dialog.close();
      body.classList.remove("layer");
    }
    dialogTextField.innerHTML = dialogText[index];
  });
} catch (err) {}
