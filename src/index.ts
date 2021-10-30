import axios from 'axios';

(async () => {
  try {
    const response = await axios('https://m.tiktok.com/api/recommend/item_list/?aid=1988&count=20', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Mobile Safari/537.36'
      }
    });

    console.log('response: ', response.data);
  } catch (error) {
    console.error('error: ', error);
  }
})();
