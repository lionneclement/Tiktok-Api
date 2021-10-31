import {AxiosRequestHeaders} from 'axios';
import {getUserAgent} from './UserAgent';

export const getHeaders = (): AxiosRequestHeaders => getUserAgent();
