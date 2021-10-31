import axios from 'axios';
import {HASHTAG_DESCRIPTION_URL, HASHTAG_URL} from '../config/Url';
import {HashtagDescription} from '../types/Hashtag';
import {TiktokVideo} from '../types/TiktokVideo';
import {getHeaders} from '../utils/requestConfig/Headers';
import {getHashtagParams} from '../utils/requestConfig/Params';

export const getHashtagDescription = async (tag: string): Promise<HashtagDescription> => {
  const {data} = await axios(`${HASHTAG_DESCRIPTION_URL}${tag}`, {
    headers: getHeaders(),
    withCredentials: true
  });

  return data;
};

export const getHashtagVideo = async (tag: string): Promise<TiktokVideo> => {
  const {challengeInfo} = await getHashtagDescription(tag);

  const response = await axios(HASHTAG_URL, {
    headers: getHeaders(),
    params: getHashtagParams(Number(challengeInfo.challenge.id)),
    withCredentials: true
  });

  return response.data;
};
