import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const soundVideo = player => player.soundVideo();
const tooglePlay = player => player.tooglePlay();

const video = document.querySelector('video');
const playButton: HTMLElement = document.querySelector('#playButton');
const muteButton: HTMLElement = document.getElementById('muteButton');
const player = new MediaPlayer(
    {
        element: video,
        plugins: [new AutoPlay(), new AutoPause()],
    }
);

muteButton.onclick = () => soundVideo(player);
playButton.onclick = () => tooglePlay(player);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./../sw.js')
        .catch(error => console.log(error));
}