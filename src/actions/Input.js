// 5.6 Input

// 5.6.1 Input.Back
const INPUT_BACK = 'Input.Back';
const INPUT_CONTEXT_MENU = 'Input.ContextMenu';
const INPUT_DOWN = 'Input.Down';
const INPUT_EXECUTE_ACTION = 'Input.ExecuteAction';
const INPUT_HOME = 'Input.Home';
const INPUT_INFO = 'Input.Info';
const INPUT_LEFT = 'Input.Left';
const INPUT_RIGHT = 'Input.Right';
const INPUT_SELECT = 'Input.Select';
const INPUT_SEND_TEXT = 'Input.SendText';
const INPUT_SHOW_CODEC = 'Input.ShowCodec';
const INPUT_SHOW_OSD = 'Input.ShowOSD';
const INPUT_UP = 'Input.Up';

export function InputHome() {
  return { jsonrpc: '2.0', method: INPUT_HOME, id: Math.random(0, 100) };
}
export function InputContextMenu() {
  return { jsonrpc: '2.0', method: INPUT_CONTEXT_MENU, id: Math.random(0, 100) };
}
export function InputRight() {
  return { jsonrpc: '2.0', method: INPUT_RIGHT, id: Math.random(0, 100) };
}
export function InputLeft() {
  return { jsonrpc: '2.0', method: INPUT_LEFT, id: Math.random(0, 100) };
}
export function InputUp() {
  return { jsonrpc: '2.0', method: INPUT_UP, id: Math.random(0, 100) };
}
export function InputDown() {
  return { jsonrpc: '2.0', method: INPUT_DOWN, id: Math.random(0, 100) };
}
export function InputBack() {
  return { jsonrpc: '2.0', method: INPUT_BACK, id: Math.random(0, 100) };
}
export function InputSelect() {
  return { jsonrpc: '2.0', method: INPUT_SELECT, id: Math.random(0, 100) };
}
export function ShowInfo() {
  return { jsonrpc: '2.0', method: INPUT_INFO, id: Math.random(0, 100) };
}
export function ShowCodec() {
  return { jsonrpc: '2.0', method: INPUT_SHOW_CODEC, id: Math.random(0, 100) };
}
export function ShowOSD() {
  return { jsonrpc: '2.0', method: INPUT_SHOW_OSD, id: Math.random(0, 100) };
}
export function SendText(text) {
  return { jsonrpc: '2.0', method: INPUT_SEND_TEXT, id: Math.random(0, 100), params: { text } };
}
export function SendAction(action) {
  return { jsonrpc: '2.0', method: INPUT_EXECUTE_ACTION, id: Math.random(0, 100), params: { action } };
}
