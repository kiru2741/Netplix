import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import requests, { img_large_URL, fetchMovies } from '../requests';

export function trim(text, length){
    if(text.length > length){
        return `${text.slice(0, length-1)}...`
    }else{
        return text
    }
}

const Banner = () => {

    const [movie, setMovie] = useState()

    useEffect(()=>{
        async function fetch(){
            try{
                const data = await fetchMovies(requests.fetchNetflixOriginals)
                setMovie(getRandom(data.results))
            }catch(err){
                alert(err.message)
            }
        }
        fetch()
    },[])

    function getRandom(list){
        const random = Math.floor(Math.random() * list.length)
        return list[random]
    }
    
    if(!movie) return null
    return ( 
        <BannerContainer>
            <img src={`${img_large_URL}${movie?.backdrop_path}`} alt="Movie Banner" />
            <BannerContents>
                <Title>{trim(movie.name, 20)}</Title>
                <Overview>{trim(movie.overview, 110)}</Overview>
            </BannerContents>
            <Fade />
        </BannerContainer>
    );
};

const BannerContainer = styled.div`
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        object-fit: contain;
        opacity: 0.3;
    }
`;
const BannerContents = styled.div`
    margin-left: 30px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
`;
export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    @media (max-width: 768px){
        &{
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
    }
    @media (max-width: 520px){
        &{
            font-size: 1rem;
            margin-bottom: .5rem;
        }
    }
`;
export const Overview = styled.p`
    margin: 1rem 0;
    font-size: 0.8rem;
    max-width: 448px;
    @media (max-width: 768px){
        &{
            font-size: 0.6rem;
            width: 40vw;
            margin: .7rem 0;
        }
    }
    @media (max-width: 520px){
        &{
            font-size: 0.3rem;
            width: 40vw;
            margin: .5rem 0;
        }
    }
`;
const Fade = styled.div`
    height: 30%;
    width: 100%;
    background-image: linear-gradient(to top,#111 10%, rgba(0,0,0,0));
    position: absolute;
    bottom:0;
    left: 0;
`;

export default Banner;