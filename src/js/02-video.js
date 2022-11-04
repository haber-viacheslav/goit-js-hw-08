import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframeVideoplayer = document.querySelector('#vimeo-player');
const player = new Player(iframeVideoplayer);
const CURRENT_TIME = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));

player.on('timeupdate', throttle(onUpdateTime, 1000));

function onUpdateTime(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}
