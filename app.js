// creating new msg that a person may say
// you can call speak + passing utterance as a msg
let msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name=voice]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

// add an event called voices changed, create a function that will help populate voices
// mac comes in with built in voices and that is what is in the array
function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join('');
}

// make function to set and change voices

function setVoice() {
  // find the voice that lines up with the value in the drop down -> corresponding
  // speechSynthesisVoice object in the voices array
  msg.voice = voices.find((voice) => voice.name === this.value);
}
// then make it an event listener
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
