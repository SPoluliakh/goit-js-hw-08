import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_OF_LOCAL_STORAGE_CURRENT_VELUE = 'videoplayerCurrentTime';

continueTimePlayer();

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem(KEY_OF_LOCAL_STORAGE_CURRENT_VELUE, e.seconds);
    console.log(KEY_OF_LOCAL_STORAGE_CURRENT_VELUE);
  }, 1000)
);

function continueTimePlayer() {
  const getTimePlaying = localStorage.getItem(
    KEY_OF_LOCAL_STORAGE_CURRENT_VELUE
  );

  try {
    player.setCurrentTime(getTimePlaying);
  } catch (error) {
    console.error(error);
  }
}
