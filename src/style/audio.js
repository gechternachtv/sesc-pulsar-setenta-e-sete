const btn = document.getElementById('play-pause-btn');
const audio = document.querySelector('audio');
const play = `<svg viewBox="0 0 24 24" width="98" height="98" fill="white"><polygon points="5,3 19,12 5,21"/></svg>`;
const pause = `<svg viewBox="0 0 24 24" width="98" height="98" fill="white"><rect x="5" y="3" width="4" height="18"/><rect x="15" y="3" width="4" height="18"/></svg>`;

btn.addEventListener('click', () => audio.paused ? audio.play() : audio.pause());
audio.addEventListener('play', () => btn.innerHTML = pause);
audio.addEventListener('pause', () => btn.innerHTML = play);
audio.addEventListener('ended', () => btn.innerHTML = play);

if (window.localStorage.getItem("qr")) {
    document.querySelector(".qr-code").setAttribute("style", "display:block !important")
}