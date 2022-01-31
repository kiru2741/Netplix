import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import {fetchMovies, img_small_URL} from '../requests';
import MoviePopup from './MoviePopup';

const Row = ({request, title, background='backdrop_path', playTrailer}) => {

    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState()
    const [movieClicked, setMovieClicked] = useState(false)
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(()=>{
        async function fetch(){
            try{
                const data = await fetchMovies(request)
                setMovies(data.results)
            }
            catch(err){
                alert(err.message)
            }
        }
        fetch()
    }, [])

    function playTrailer(movie){
        movieTrailer(movie.name || movie.original_name || movie.original_title || '')
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'))
                setMovieClicked(false)
            })
            .catch(err => alert(err.message))

    }

    function handleClick(movie){
        setMovie(movie)
        setMovieClicked(true)
        if(trailerUrl) setTrailerUrl('')
    }

    const options = (background === 'poster') ? {bg:'poster_path', alterBg:'backdrop_path', height: '150px'} : {bg:'backdrop_path', alterBg:'poster_path', height: '100px'}

    const opts = {
        height: '300px',
        width: '100%',
        playerVars : {
            autoplay: 1,
        }
    }

    return (
        <RowContainer>
            <RowTitle>{title}</RowTitle>
            <MoviesContainer>
                {
                movies?.map(movie => (
                    <Movie key={movie.id} onClick={e=>handleClick(movie)} src={`${img_small_URL}${movie[options.bg]}`} height={options.height}/>
                )
                )}
            </MoviesContainer>
            {movieClicked && <MoviePopup playTrailer={playTrailer} movie={movie} handler={setMovieClicked}/>}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </RowContainer>
    );
};

const RowContainer = styled.div`
    padding: 10px 15px;
`;

const RowTitle = styled.p`
    color: white;
    font-weight: 600;
    font-size: 1.5rem;

    @media (max-width: 768px){
        &{
            font-size: 1.2rem;
        } 
    }
    @media (max-width: 520px){
        &{
            font-size: 1rem;
        }
    }
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  overflow-x: auto;
  padding: 10px 0;

  &::-webkit-scrollbar{
    display: none;
  }
`;

const Movie = styled.img`
    height: ${props => props.height};
    object-fit: contain;
    cursor: pointer;
    margin-right: 10px;
    transition: transform 0.2s;
    
    &:last-child{
        margin-right: 0;
    }

    &[alt]{
        color: #888;
        font-size: 14px;
    }

    &:hover{
        transform: scale(1.08);
    }
`;

export default Row;