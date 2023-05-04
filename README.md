# marco-carvalho-sdk

The Lord of the Rings SDK based on the <https://the-one-api.dev/v2> API

## Getting Started

### Getting an API Key

1. Navigate to <https://the-one-api.dev>
2. Click on the hamburguer menu on the up right side
3. Click on sign up
4. After signing up, enter your details and login
5. You should see your `Access token` below the welcome message

### Installing

NodeJS v10.0.0+ is required.

```sh
npm install -S @marcoacfilho/marco-carvalho-sdk
```

### How to use

```js
import LorSDK from '@marcoacfilho/marco-carvalho-sdk';

const lorSDK = new LorSDK("YOUR_ACCESS_TOKEN_HERE");
const movieServices = lorSDK.getMovies();

const movies = await movieServices.getMovies()
...
```

### Available Services

#### Movies

```js
const movieServices = lorSDK.getMovies();

const movies = await movieServices.getAllMovies()
const movie = await movieServices.getMovieById("MOVIE_ID")
const movieQuotes = await movieServices.getQuotesByMovieId("MOVIE_ID")
```

#### Quotes

```js
const quoteServices = lorSDK.getQuotes();

const quotes = await quoteServices.getAllQuotes()
const quote = await quoteServices.getQuoteById("QUOTE_ID")
```
