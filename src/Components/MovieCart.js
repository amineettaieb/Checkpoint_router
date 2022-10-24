import React from 'react'
import "./btndetails.css"
import { Link } from 'react-router-dom';


function MovieCart(props) {
    console.log(props.movieList,'hello from movieList')
  return (
    <div>
         <div className="card" style={{ width: '18rem' }}>
        <img
          className="card-img-top"
          src={props.movie.poster}
          alt="New movie"
        />
        <div className="card-body">
          <h1>{props.movie.title}</h1>
          <div className='btdetails' style={{display:"flex", justifyContent:"space-around" , padding:5, height:55}}>
            
          

           <Link to={`/details2/${props.movie.id}`}> <button className="big-button">See More</button> </Link>
            
          </div>
         
        </div>
      </div>
      
    </div>
  );
}
export default MovieCart;