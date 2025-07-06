let mappedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const showKeys = document.querySelector(".show-keys input");

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);

  clickedKey.classList.add("active");
  setTimeout(() => clickedKey.classList.remove("active"), 150);
};

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => {
    key.classList.toggle("hide");
  });
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
  if (mappedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

volumeSlider.addEventListener("input", handleVolume);
showKeys.addEventListener("click", showHideKeys);
