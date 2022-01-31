import React from 'react';
import {img_large_URL } from '../requests';
import styled from 'styled-components';
import {Title, Overview, trim } from './Banner';

const MoviePopup = ({movie, handler, playTrailer}) => {

    return (
        <Popup>
            <div>
                <div>
                    <Title>{movie.name ? trim(movie.name, 15) : trim(movie.original_title, 15)}</Title>
                    <Overview>{trim(movie.overview, 90)}</Overview>
                    <PlayBtn onClick={()=> playTrailer(movie)}>Play</PlayBtn>
                </div>
            </div>
            <MovieBackdrop bg={`${img_large_URL}${movie.backdrop_path}`}></MovieBackdrop>
            <Close onClick={()=>handler(false)} className='far fa-times-circle'></Close>
        </Popup>
    );
};

const Popup = styled.div`
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;

    & > div{
        height: 100%;
        width: 50%;
        flex-basis: 50;
        flex-shrink: 0;
        flex-grow: 0;
        display: flex;
        align-items: center;
    }
    @media (max-width: 768px){
        height: 150px;
    }
`;
const MovieBackdrop = styled.div`
    background-image: linear-gradient(to right, #111, rgba(0,0,0,0)), url(${props => props.bg});
    background-position: center center;
    background-size: cover;
`;
const PlayBtn = styled.button`
    cursor: pointer;
    outline:none;
    border: none;
    font-weight: 600;
    border-radius: 0.2vw;
    padding: 0.5rem 2rem;
    background-color: rgba(51,51,51,0.7);
    
    &:hover{
        color: black;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
    @media (max-width: 768px){
        &{
            font-size: .7rem;
            padding: .5rem 1.5rem;
        }
    }
    @media (max-width: 520px){
        &{
            font-size: 0.5rem;
            padding: .25rem 1rem;
        }
    }
`;
const Close = styled.i`
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
`;

export default MoviePopup;