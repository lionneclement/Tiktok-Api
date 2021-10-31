import axios from 'axios';
import {TRENDING_URL} from '../config/Url';
import {TiktokVideo} from '../types/TiktokVideo';
import {getHeaders} from '../utils/requestConfig/Headers';
import {getTrendingParams} from '../utils/requestConfig/Params';

export const getTrendingVideo = async (): Promise<TiktokVideo> => {
  const {data} = await axios(TRENDING_URL, {
    headers: getHeaders(),
    params: getTrendingParams()
  });

  return data;
};
