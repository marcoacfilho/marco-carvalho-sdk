import LorSDK from '../index';

const lorSDK = new LorSDK("KJbspQnLnZXdjkcjil97");

const getMoviesExample = async () => {
  const movieServices = lorSDK.getMovies();

  const movies = await movieServices.getAllMovies()
  // const movie = await movieServices.getMovieById("5cd95395de30eff6ebccde56")
  // const movieQuotes = await movieServices.getQuotesByMovieId("5cd95395de30eff6ebccde5b")
  console.log(movies)
}

const getQuotesExample = async () => {
  const quoteServices = lorSDK.getQuotes();

  const quotes = await quoteServices.getAllQuotes()
  // const quote = await quoteServices.getQuoteById("5cd96e05de30eff6ebcce84c")
  console.log(quotes)
}

// Uncomment and run ts-nde example/index.ts from the project's root to see movies return object
// getMoviesExample()

// Uncomment and run ts-nde example/index.ts from the project's root to see quotes return object
// getQuotesExample()