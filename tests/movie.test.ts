import LorSDK from '../index';

jest.setTimeout(30000);

const lorSDK = new LorSDK('KJbspQnLnZXdjkcjil97');

describe('Test getMovies Class', () => {
  const movieServices = lorSDK.getMovies();

  describe('Test getAllMovies()', () => {
    it('should return an array with LOR movies', async () => {
      const movies = await movieServices.getAllMovies()

      expect(movies).not.toBeNull();
      expect(movies[0]._id).not.toBeNull();
      expect(movies[0].academyAwardNominations).not.toBeNull();
      expect(movies[0].academyAwardWins).not.toBeNull();
      expect(movies[0].boxOfficeRevenueInMillions).not.toBeNull();
      expect(movies[0].budgetInMillions).not.toBeNull();
      expect(movies[0].name).not.toBeNull();
      expect(movies[0].rottenTomatoesScore).not.toBeNull();
      expect(movies[0].runtimeInMinutes).not.toBeNull();
    });
  });

  describe('Test getMovieById()', () => {
    it('should return specific movie', async () => {
      const expectedMovie = [
        {
          _id: '5cd95395de30eff6ebccde56',
          name: 'The Lord of the Rings Series',
          runtimeInMinutes: 558,
          budgetInMillions: 281,
          boxOfficeRevenueInMillions: 2917,
          academyAwardNominations: 30,
          academyAwardWins: 17,
          rottenTomatoesScore: 94
        }
      ]

      const movie = await movieServices.getMovieById("5cd95395de30eff6ebccde56")

      expect(movie).toEqual(expectedMovie);
    });
  });

  describe('Test getQuotesByMovieId()', () => {
    it('should return an array with LOR quotes from a specific movie', async () => {
      const movieQuotes = await movieServices.getQuotesByMovieId("5cd95395de30eff6ebccde5b")

      expect(movieQuotes).not.toBeNull();
      expect(movieQuotes[0]._id).not.toBeNull();
      expect(movieQuotes[0].character).not.toBeNull();
      expect(movieQuotes[0].dialog).not.toBeNull();
      expect(movieQuotes[0].movie).not.toBeNull();
      expect(movieQuotes[0].id).not.toBeNull();
      expect(movieQuotes[0].movie).toEqual("5cd95395de30eff6ebccde5b");
    });
  });
});
