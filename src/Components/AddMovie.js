import React from "react";
import "./Addmovie.css";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddMovie(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const name = useRef();
  const image = useRef();
  const desc = useRef();
  const rate = useRef();
  const navigate=useNavigate()
  const handelAdd = () => {
    if (
      name.current.value &&
      image.current.value &&
      desc.current.value &&
      rate.current.value
    ) {
      const obj = {
        title: name.current.value,
        description: desc.current.value,
        rating: rate.current.value,
        posterURL: image.current.value,
      };
      // console.log(obj);
      props.fnhandleAddMovie(obj);
      handleClose();
      navigate("/movielist")
    } else {
      alert("check inputs");
    }
   
  };

  return (
    <div className="form-popup">
      <div className="form-container">
        <div className="tagclose">
          <h1>Add Movie</h1>
          <Link to="/movielist">
            {" "}
            <button type="button" class="cancel">
              {" "}
              X{" "}
            </button>{" "}
          </Link>
        </div>

        <label>
          <b>Movie Title</b>
        </label>
        <input
          type="text"
          ref={name}
          placeholder="Enter Movie Title"
          name="title"
          required
        />

        <label>
          <b>Movie Description</b>
        </label>
        <input
          ref={desc}
          type="text"
          placeholder="Enter Movie Description"
          name="description"
          required
        />

        <label>
          <b>Movie Poster</b>
        </label>
        <input
          ref={image}
          type="url"
          placeholder="Enter Movie Poster"
          name="posterUrl"
          required
        />

        <label>
          <b>Movie Rate</b>
        </label>
        <input
          ref={rate}
          type="number"
          placeholder="Enter Movie rate"
          name="rating"
          required
        />

      
          <button type="submit" class="btn" onClick={handelAdd}>
            Add
          </button>{" "}
      
      </div>
    </div>
  );
}

export default AddMovie;
