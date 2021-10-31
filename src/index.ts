import axios from 'axios';
import {TRENDING_URL} from './config/Url';
import {Tiktok} from './types/Tiktok';
import {getHeaders} from './utils/requestConfig/Headers';
import {getTrendingParams} from './utils/requestConfig/Params';

export const getTrending = async (): Promise<Tiktok> => {
  const {data} = await axios(TRENDING_URL, {
    headers: getHeaders(),
    params: getTrendingParams()
  });

  return data;
};
