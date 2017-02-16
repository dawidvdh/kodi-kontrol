import React from 'react';
import * as annyang from 'annyang';
import * as key from '../../actions/keycodes';

import { GetActivePlayers, PlayPause, Stop } from '../../actions/Player';
import { ShowNotification, ToggleFullScreen } from '../../actions/GUI';
import {
  InputDown,
  InputLeft,
  InputRight,
  InputSelect,
  InputUp,
  ShowInfo,
  InputBack,
  SendText,
  SendAction,
} from '../../actions/Input';

function dialog() {
  const text = prompt('Search:', ''); // eslint-disable-line no-alert
  if (!text) {
    return false;
  }
  return text;
}

annyang.start();

const performSocketConnection = () => {
  try {
    const socket = new WebSocket(`ws://${process.env.KODI_ADDRESS}:${process.env.KODI_PORT}/jsonrpc`);
    socket.onopen = () => {
      socket.send(JSON.stringify(GetActivePlayers()));
    };
    // socket.onmessage = (event) => {
    //   console.log(event.data);
    // };

    /* eslint-disable */
    const commands = {
      'play': () => { socket.send(JSON.stringify(PlayPause())); },
      'stop': () => { socket.send(JSON.stringify(Stop())); },
      'send': (userSaid) => { socket.send(JSON.stringify(SendText(userSaid))); },
      'notify': () => { socket.send(JSON.stringify(ShowNotification())); },
    };
    /* eslint-disable */

    annyang.addCommands(commands);

    window.onkeydown = (e) => {
      switch (e.keyCode) {
        case key.S:
          return socket.send(JSON.stringify(Stop()));
        case key.NUM_MINUS:
          return socket.send(JSON.stringify(SendAction('volumedown')));
        case key.NUM_PLUS:
          return socket.send(JSON.stringify(SendAction('volumeup')));
        case key.T:
          return socket.send(JSON.stringify(SendText(dialog())));
        case key.SPACE:
          return socket.send(JSON.stringify(PlayPause()));
        case key.F:
          return socket.send(JSON.stringify(ToggleFullScreen()));
        case key.BACKSPACE:
          return socket.send(JSON.stringify(InputBack()));
        case key.I:
          return socket.send(JSON.stringify(ShowInfo()));
        case key.N:
          return socket.send(JSON.stringify(ShowNotification()));
        case key.LEFT:
          return socket.send(JSON.stringify(InputLeft()));
        case key.UP:
          return socket.send(JSON.stringify(InputUp()));
        case key.RIGHT:
          return socket.send(JSON.stringify(InputRight()));
        case key.DOWN:
          return socket.send(JSON.stringify(InputDown()));
        case key.ENTER:
          return socket.send(JSON.stringify(InputSelect()));
        default:
          return false;
      }
    };
  } catch (error) {
    console.error(error.message);
  }
};

const App = () => (
  <button onClick={performSocketConnection}>connect</button>
);

export default App;
