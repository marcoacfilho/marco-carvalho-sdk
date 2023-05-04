import { AxiosResponse, AxiosInstance } from 'axios';
import { Quote } from '../../types/quote';

/**
 * Quote class to expose quote endpoints.
 */
export class QuoteService {
  private _axiosInstance: AxiosInstance;
  constructor(_axiosInstance: AxiosInstance) {
    this._axiosInstance = _axiosInstance;
  }
  /**
   * List of all quotes.
   * @returns {Quote[]}
   */
  async getAllQuotes(): Promise<Quote[]> {
    try {
      const quotes: AxiosResponse = await this._axiosInstance.get(`/quote`);

      return quotes.data.docs;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  /**
   * Returns specific quote.
   * @param {string} - quoteId
   * @returns {Quote}
   */
  async getQuoteById(id: string): Promise<Quote> {
    try {
      const quote: AxiosResponse = await this._axiosInstance.get(`/quote/${id}`);

      return quote.data.docs;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

export default QuoteService;
