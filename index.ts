import axios, { AxiosInstance } from 'axios';
import MovieService from './src/services/movie';
import QuoteService from './src/services/quote';

export default class LorSDK {
  private _axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://the-one-api.dev/v2',
  });
  private movieService: MovieService;
  private quoteService: QuoteService;

  constructor(token: string | undefined) {
    if (token !== undefined) {
      this._axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
    }

    this.movieService = new MovieService(this._axiosInstance);
    this.quoteService = new QuoteService(this._axiosInstance);
  }

  getMovies(): MovieService {
    if (this._axiosInstance.defaults.headers.Authorization === undefined) {
      throw new Error('Authorization is required for this object');
    }
    return this.movieService;
  }

  getQuotes(): QuoteService {
    if (this._axiosInstance.defaults.headers.Authorization === undefined) {
      throw new Error('Authorization is required for this object');
    }
    return this.quoteService;
  }
}
