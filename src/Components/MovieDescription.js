import React from "react";
import { useParams } from "react-router-dom";

import ReactStars from "react-rating-stars-component";

import "./Description.css";

export default function MovieDescription({ list }) {
  const { idmov } = useParams();
  const movie = list.find((el) => el.id == idmov);
  console.log(movie);
  return (
    <div className="descPage">
      
      <div className="FilmDesc">
        <div className="DescContent">
          <img className="FilmDescImg" src={movie.poster} alt="movie poster " />
          <div className="InformationsColumn">
            <h1>{movie.title}</h1>
            <div className="rate-Type">
              <ReactStars
                count={5}
                value={movie.rate}
                edit={false}
                size={40}
                isHalf={true}
                activeColor="#ffd700"
              />
              
            </div>
            
          </div>
        </div>
        <div className="trailer-Div">
          <h3>Trailer</h3>
          <iframe
            width="560"
            height="315"
            src={movie.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
