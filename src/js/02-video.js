import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_OF_LOCAL_STORAGE_CURRENT_VELUE = 'videoplayer-current-time';
player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem(KEY_OF_LOCAL_STORAGE_CURRENT_VELUE, e.seconds);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem(KEY_OF_LOCAL_STORAGE_CURRENT_VELUE))
  .catch(function (error) {
    console.error(error);
  });
