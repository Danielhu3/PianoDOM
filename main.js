// get all keys
const keys = document.querySelectorAll('.key')

// play notes

function getKeyCode(event) {
  let keyCode

  const isKeyboard = event.type === 'keydown'

  if (isKeyboard) {
    keyCode = event.key
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function playAudio(audioKeyCode) {
  //play audio
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0
  audio.play()
}

function playNote(event) {
  //keycode
  let audioKeyCode = getKeyCode(event)

  let key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  //if key exists

  const cantFoundAnyKey = !key

  if (cantFoundAnyKey) {
    return
  }

  playAudio(audioKeyCode)
  addPlayingClass(key)
}

function addPlayingClass(key) {
  key.classList.add('playing')
}

function removePlayingClass(event) {
  event.target.classList.remove('playing')
}

function registerEvents() {
  // mouse click
  keys.forEach(function (key) {
    key.addEventListener('click', playNote)
    key.addEventListener('transitionend', removePlayingClass)
  })

  // type keyboard
  window.addEventListener('keydown', playNote)
}

window.addEventListener('load', registerEvents)
