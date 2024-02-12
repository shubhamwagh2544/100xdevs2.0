import axios from "axios";

const movieBaseURL = 'https://api.themoviedb.org/3/'
const api_key = 'de17256a9137ca9609241fbcfc0f4e6c'
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=de17256a9137ca9609241fbcfc0f4e6c';

// https://api.themoviedb.org/3/movie/550?api_key=de17256a9137ca9609241fbcfc0f4e6c

const trendingVideos = axios.get(movieBaseURL + 'trending/all/day?api_key=' + api_key)

export const getMoviesByGenreId = (id) => axios.get(movieByGenreBaseURL + "&with_genres=" + id)

export default trendingVideos