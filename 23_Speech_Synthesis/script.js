const message = new SpeechSynthesisUtterance();
let voices = [];
const voiceDropDown = document.getElementById('voices');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakBtn = document.getElementById('speak');
const stopBtn = document.getElementById('stop');

message.text = document.getElementById('textarea').value;

function populateVoices() {
  voices = this.getVoices();
  const voiceOptions = voices
    .map((voice) => {
      return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
    })
    .join('');
  voiceDropDown.innerHTML = voiceOptions;
}

function setVoice() {
  message.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(message);
  }
}

function setOption() {
  message[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voiceDropDown.addEventListener('change', setVoice);
options.forEach((option) => option.addEventListener('change', setOption));
speakBtn.addEventListener('click', toggle);
stopBtn.addEventListener('click', () => toggle(false));
