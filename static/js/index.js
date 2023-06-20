try {
  const dialog = document.getElementById("dialog");
  const dialogTextField = document.getElementById("dialog-text");
  const body = document.getElementById("body");
  dialog.show();
  const dialogText = [
    "Hi ugazien (❁´◡`❁)",
    "If you are not an ugazien, then join us! <a target='_blank' href='https://www.google.com/search?client=opera-gx&q=avropaya+getmədən+avropada+təhsil&sourceid=opera&ie=UTF-8&oe=UTF-8'>Bura vur</a>",
    "Kidding you wouldn't wanna join us anyway X﹏X",
    "OK. I'm sorry I didn't introduce myself.",
    "I'm Lil Sabiş boii. I was fired from ugaz(",
    "So now I'm working here .·´¯`(>▂<)´¯`·. ",
    "Anyway this website was created by ugazien(s)",
    "And you can use this website to look at the ranking",
    "You can also calculate your gpa (ağlamamaq şərtilə)",
    "Good luck! (you'll need that)<br /> ヾ(≧▽≦*)o",
    "And remember that disrespekt implays disrespekt",
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
