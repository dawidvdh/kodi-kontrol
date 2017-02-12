import WebSocket from 'ws';

const ws = new WebSocket(`ws://${process.env.KODI_ADDRESS}:${process.env.KODI_PORT}/jsonrpc`, {
  perMessageDeflate: false,
});

ws.on('open', (error) => {
  ws.send(JSON.stringify({ jsonrpc: '2.0', method: 'Player.GetActivePlayers', id: 1 }));
  console.log(error);
});

ws.on('message', (data) => {
  console.log(data);
});
