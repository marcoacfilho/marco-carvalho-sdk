import LorSDK from '../index';

jest.setTimeout(30000);

const lorSDK = new LorSDK('KJbspQnLnZXdjkcjil97');

describe('Test getQuotes Class', () => {
  const quoteServices = lorSDK.getQuotes();

  describe('Test getAllQuotes()', () => {
    it('should return an array with LOR quotes', async () => {
      const movies = await quoteServices.getAllQuotes();

      expect(movies).not.toBeNull();
      expect(movies[0]._id).not.toBeNull();
      expect(movies[0].character).not.toBeNull();
      expect(movies[0].dialog).not.toBeNull();
      expect(movies[0].id).not.toBeNull();
      expect(movies[0].movie).not.toBeNull();
    });
  });

  describe('Test getQuoteById()', () => {
    it('should return specific quote', async () => {
      const expectedQuote = [
        {
          _id: '5cd96e05de30eff6ebcce84c',
          dialog: "I didn't think it would end this way.",
          movie: '5cd95395de30eff6ebccde5d',
          character: '5cd99d4bde30eff6ebccfe2e',
          id: '5cd96e05de30eff6ebcce84c',
        },
      ];

      const quote = await quoteServices.getQuoteById('5cd96e05de30eff6ebcce84c');

      expect(quote).toEqual(expectedQuote);
    });
  });
});
