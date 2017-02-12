// 5.1 Addons

const ADDONS_EXECUTE_ADDON = 'Addons.ExecuteAddon';
const ADDONS_GET_ADDON_DETAILS = 'Addons.GetAddonDetails';
const ADDONS_GET_ADDONS = 'Addons.GetAddons';
const ADDONS_SET_ADDON_ENABLED = 'Addons.SetAddonEnabled';

export function GetAddons() {
  return {
    jsonrpc: '2.0',
    method: ADDONS_GET_ADDONS,
    params: {
      type: 'xbmc.addon.video',
    },
    id: Math.random(0, 100),
  };
}
