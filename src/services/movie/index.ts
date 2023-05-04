import { AxiosResponse, AxiosInstance } from 'axios';
import { Movie } from '../../types/movie';
import { Quote } from '../../types/quote';

/**
 * Movie class to expose movie endpoints
 */
export class MovieService {
  private _axiosInstance: AxiosInstance;
  constructor(_axiosInstance: AxiosInstance) {
    this._axiosInstance = _axiosInstance;
  }

  /**
   * List of all movies
   * @returns {Movie[]}
   */
  async getAllMovies(): Promise<Movie[]> {
    try {
      const movies: AxiosResponse = await this._axiosInstance.get(`/movie`);

      return movies.data.docs;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  /**
   * Return a specific movie.
   * @param {string} - movieId
   * @returns {Movie}
   */
  async getMovieById(id: string): Promise<Movie> {
    try {
      const movie: AxiosResponse = await this._axiosInstance.get(`/movie/${id}`);

      return movie.data.docs;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  /**
   * Return all quotes from a specific movie.
   * @param {string} - movieId
   * @returns {Movie}
   */
  async getQuotesByMovieId(id: string): Promise<Quote[]> {
    try {
      const movieQuotes: AxiosResponse = await this._axiosInstance.get(`/movie/${id}/quote`);

      return movieQuotes.data.docs;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

export default MovieService;
