import {describe, expect, test} from '@jest/globals';
import {getTrendingVideo} from '../src/index';
import {getHashtagDescription, getHashtagVideo} from '../src/tiktokApi/Hashtag';

describe('trending-video', () => {
  test('it should send trending video', async () => {
    const data = await getTrendingVideo();

    expect(data.itemList).toBeDefined();
    expect(data.hasMore).toBeDefined();
  });
});

describe('hashtag-video', () => {
  test('it should send hashtag video', async () => {
    const data = await getHashtagVideo('meme');

    expect(data.itemList).toBeDefined();
    expect(data.hasMore).toBeDefined();
  });
});

describe('hashtag-description', () => {
  test('it should send hashtag description', async () => {
    const data = await getHashtagDescription('meme');

    expect(data.seoProps).toBeDefined();
    expect(data.challengeInfo.challenge.id).toBeDefined();
  });
});
