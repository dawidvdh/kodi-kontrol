import React from 'react';
import * as key from '../../actions/keycodes';

import { GetActivePlayers, PlayPause } from '../../actions/Player';
import { ShowNotification, ToggleFullScreen } from '../../actions/GUI';
import {
  InputDown,
  InputLeft,
  InputRight,
  InputSelect,
  InputUp,
  ShowInfo,
  InputBack,
} from '../../actions/Input';

const performSocketConnection = () => {
  try {
    const socket = new WebSocket(`ws://${process.env.KODI_ADDRESS}:${process.env.KODI_PORT}/jsonrpc`);
    socket.onopen = () => {
      console.log('socket opens!');
      socket.send(JSON.stringify(GetActivePlayers()));
    };
    socket.onmessage = (event) => {
      console.log(event.data);
    };
    window.onkeydown = (e) => {
      switch (e.keyCode) {
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
    console.log(error.message);
  }
};

const App = () => (
  <button onClick={performSocketConnection}>connect</button>
);

export default App;
