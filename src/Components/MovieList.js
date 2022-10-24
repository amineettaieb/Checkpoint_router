import React from 'react'
import MovieCart from './MovieCart'
import {  Link } from 'react-router-dom'
import "./btndetails.css"


function MovieList(props) {
  
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection:'row',
          justifyContent: 'space-around',
          margin: '15px auto 15px',
          flexWrap: 'wrap',
          width: '80%',
          height: '50%',
        }}
      >
       

        {props.movieList.map((movie) => (
          <div>
            <Link to={`/details2/${movie.idmovie}`}
            style={{textDecoration:'none', color:'black'}}>
            <MovieCart key={movie.id} movie={movie} />
           </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieList
