export const API_KEY = '214fdffcfc0c3ee7a5b3f73051651670';
export const img_large_URL = 'https://image.tmdb.org/t/p/original';
export const img_small_URL = 'https://image.tmdb.org/t/p/w500';
export const baseURL = 'https://api.themoviedb.org/3'

const requests = {
    fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchAction: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export async function fetchMovies(url){
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export default requests;
