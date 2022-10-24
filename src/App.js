import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";

import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import AddMovie from "./Components/AddMovie";
import MovieDescription from "./Components/MovieDescription";

function App() {
  const [movieList, setMovieList] = useState([
    {
      id: "1",
      title: "The Conjuring",
      poster: "https://m.media-amazon.com/images/I/81yAfVk+7UL._AC_SY606_.jpg",
      decription:
        "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      rate: "2",
      details:
        "The Conjuring is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film",
      trailer: "https://www.youtube.com/embed/k10ETZ41q5o",
    },
    {
      id: "2",
      title: "The Grudge",
      poster:
        "https://aws-cf.imdoc.fr/prod/photos/8/6/1/11904861/29176577/big-29176577abb.jpg?v=2",
      decription: "The Ring is a 2002 American supernatural horror film",
      rate: "3",
      details:
        "The Grudge is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film",
      trailer: "https://www.youtube.com/embed/O2NKzO-fxwQ",
    },
    {
      id: "3",
      title: "The Ring",
      poster: "https://m.media-amazon.com/images/I/41CGtdWTDvL._AC_.jpg",
      decription: "The Ring is a 2002 American supernatural horror film",
      rate: "1",
      details:
        "The Ring is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film",
      trailer: "https://www.youtube.com/embed/yzR2GY-ew8I",
    },
    {
      id: "4",
      title: "The Shawshank Redemption",
      poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
      decription: "The Ring is a 2002 American supernatural horror film",
      rate: "3",
      details:
        "The Shawshank is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film",
      trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
    },
    {
      id: "5",
      title: "The Godfather",
      poster:
        "https://ih1.redbubble.net/image.1275475865.6561/pp,504x498-pad,600x600,f8f8f8.jpg",
      decription: "The Ring is a 2002 American supernatural horror film",
      rate: "3",
      details:
        "The Godfather is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film",
      trailer: "https://www.youtube.com/embed/UaVTIH8mujA",
    },

    {
      id: "6",
      title: "The Dark Knight",
      poster: "https://m.media-amazon.com/images/I/51CbCQNMyiL._AC_.jpg",
      decription: "The Ring is a 2002 American supernatural horror film",
      rate: "2",
      details:
        "The Dark Knight is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film",
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
    {
      id: "7",
      title: "12 Angry Men",
      poster: "https://m.media-amazon.com/images/I/81zZhjymV7L._AC_SL1500_.jpg",
      decription: "The Ring is a 2002 American supernatural horror film",
      rate: "3",
      details:
        "Angry Men is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film",
      trailer: "https://www.youtube.com/embed/_13J_9B5jEk",
    },
    {
      id: "8",
      title: "THE GOOD DOCTOR",
      poster:
        "https://occ-0-299-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZD4o7qojurv9t5wyRwEO1alifA9KULIsEom_dCtOTnADHHGgeRQYNy9MLAw3QobU1y4RK669EOaRYGOcpHGDuJU1WhsiYvlHXU.webp?r=1a8",
      description:
        "Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital.",
      rate: 5,
      details:
        'THE GOOD DOCTOR is a 2011 American thriller film directed by Lance Daly, and starring Orlando Bloom as the eponymous "good doctor".',
      trailer: "https://www.youtube.com/embed/fYlZDTru55g",
    },
  ]);
  const [Movie, setMovie] = useState();
  useEffect(() => {
    setMovie(movieList);
  }, []);

  const handleAdd = (obj) => {
    console.log(obj);
    movieList.push(obj);
    setMovie(movieList);
    setHandleShow(false);
  };

  const [filtredList, setFiltredList] = useState("");
  const filterList = (title) => {
    setFiltredList(title);
  };

  // show buton add movie
  const [handleShow, setHandleShow] = useState(false);

  return (
    <Router>
      <div className="App">
        <nav
          style={{
            // display: "flex",
            // justifyContent: "space-around",
            // width: "77%",
            // padding: "1%",
            // marginLeft: "11%",
            // // marginBottom: '5%',
            // marginTop: "2%",
            // borderStyle: "solid",
            // borderColor: "gray",
            // fontSize: "20px",
            padding: 16,
            display: 'flex',
            justifyContent: "space-around",
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            right: 0,
            background: 'white',
            gap: 50,
            zIndex: 999,
            boxShadow: '0 0 7px #00000063',
          }}
        >
          <Link to="/">
            <Button variant="primary"> Home Page </Button>
          </Link>
          <Link to="/movielist">
            <Button variant="primary"> List of Movies </Button>
          </Link>


          <Link to="/AddMovie">
            <Button variant="primary"> Add Movie </Button>
          </Link>
        </nav>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/movielist"
            element={
              <div>
                <Filter filterList={filterList} />
                <MovieList
                  movieList={movieList.filter((elementMovie) =>
                    elementMovie.title
                      .toLowerCase()
                      .includes(filtredList.toLowerCase())
                  )}
                />
              </div>
            }
          />

          <Route
            path="/AddMovie"
            element={<AddMovie fnhandleAddMovie={handleAdd} />}
          />

          {/* <Route path="/MovieDescription/:trailer"
            element = {<MovieDescription movieList={movieList} />} /> */}

          <Route
            path="/details2/:idmov"
            element={<MovieDescription list={movieList} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
