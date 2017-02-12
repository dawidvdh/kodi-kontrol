// 5.5 GUI
// const GUI_ACTIVATE_WINDOW = 'GUI.ActivateWindow';
// const GUI_GET_PROPERTIES = 'GUI.GetProperties';
const GUI_SET_FULLSCREEN = 'GUI.SetFullscreen';
const GUI_SHOW_NOTIFICATION = 'GUI.ShowNotification';

export function ShowNotification() {
  return {
    jsonrpc: '2.0',
    method: GUI_SHOW_NOTIFICATION,
    id: Math.random(0, 100),
    params: {
      title: 'SWEEEEDI',
      message: 'love you...',
      image: 'http://pngimg.com/upload/heart_PNG691.png',
    },
  };
}

export function ToggleFullScreen() {
  return {
    jsonrpc: '2.0',
    method: GUI_SET_FULLSCREEN,
    id: Math.random(0, 100),
  };
}
