export const defaultParams = (): {[key: string]: string | number} => ({
  aid: 1988,
  verifyFp: 'verify_kvfr3riz_HLYxKN3N_v4jk_4hWM_86jq_mrti859vrj0R',
  app_name: 'tiktok_web',
  device_platform: 'web_mobile',
  screen_width: '1920',
  screen_height: '1080',
  region: 'US',
  language: 'en',
  priority_region: '',
  os: 'ios',
  referer: '',
  root_referer: '',
  cookie_enabled: 'true',
  browser_language: 'en-us',
  browser_platform: 'iPhone',
  browser_name: 'Mozilla',
  browser_version:
    '5.0+(Linux%3B+Android+6.0%3B+Nexus+5+Build%2FMRA58N)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F95.0.4638.54+Mobile+Safari%2F537.36',
  browser_online: 'true',
  timezone_name: 'America/Chicago',
  is_page_visible: 'true',
  focus_state: 'true',
  is_fullscreen: 'false',
  history_len: Math.floor(Math.random() * 30)
});

export const getTrendingParams = (): {[key: string]: string | number} => ({
  ...defaultParams(),
  count: 20
});

export const getHashtagParams = (challengeID: number): {[key: string]: string | number} => ({
  ...defaultParams(),
  challengeID,
  count: 24
});
