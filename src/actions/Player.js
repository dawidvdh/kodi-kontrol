// 5.9 Player
const PLAYER_GET_ACTIVE_PLAYERS = 'Player.GetActivePlayers';
// const PLAYER_GET_ITEM = 'Player.GetItem';
// const PLAYER_GET_PROPERTIES = 'Player.GetProperties';
// const PLAYER_GOTO = 'Player.GoTo';
// const PLAYER_MOVE = 'Player.Move';
// const PLAYER_OPEN = 'Player.Open';
const PLAYER_PLAYPAUSE = 'Player.PlayPause';
// const PLAYER_ROTATE = 'Player.Rotate';
// const PLAYER_SEEK = 'Player.Seek';
// const PLAYER_SET_AUDIOSTREAM = 'Player.SetAudioStream';
// const PLAYER_SET_PARTYMODE = 'Player.SetPartymode';
// const PLAYER_SET_REPEAT = 'Player.SetRepeat';
// const PLAYER_SET_SHUFFLE = 'Player.SetShuffle';
// const PLAYER_SET_SPEED = 'Player.SetSpeed';
// const PLAYER_SET_SUBTITLE = 'Player.SetSubtitle';
// const PLAYER_STOP = 'Player.Stop';
// const PLAYER_ZOOM = 'Player.Zoom';

export function GetActivePlayers() {
  return {
    jsonrpc: '2.0',
    method: PLAYER_GET_ACTIVE_PLAYERS,
    id: Math.random(0, 100),
  };
}

export function PlayPause() {
  return {
    jsonrpc: '2.0',
    method: PLAYER_PLAYPAUSE,
    id: Math.random(0, 100),
    params: {
      playerid: 1,
    },
  };
}
