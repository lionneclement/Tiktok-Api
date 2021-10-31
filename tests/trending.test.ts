import {describe, expect, test} from '@jest/globals';
import {getTrending} from '../src/index';

describe('Trending function', () => {
  test('it should send trending tiktok', async () => {
    const data = await getTrending();

    expect(data.itemList).toBeDefined();
    expect(data.hasMore).toBeDefined();
  });
});
