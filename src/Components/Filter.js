import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Filter(props) {


  const [caracter, setCaracter] = useState('')

  const searchHandeler = (event) => {
    setCaracter(props.filterList(event.target.value))
  }

  //on fair la recherche dans props.movieList==> le resultat va etre un seul film qui va etre mis dans le setSingleMovie
  //donc

  //table.find((element)=>element.title) --> ça permet de chercher un element dans un simple tableau

  const onSubmit = (event) => {
    event.preventDefault()
    props.filterList(caracter)
    // var searchedElement = props.movieList.find((elementMovie) =>
    //   elementMovie.title.toLowerCase().includes(caracter.toLowerCase()),
    // )

    // setSignleMovie({ ...singleMovie, searchedElement })
  }

 

  return (
    <div style={{ display: 'flex', margin: '3%',justifyContent:"center" }}>
  
        
          <div className="form-outline">
            <input
              type="text"
              id="searchBar"
              className="form-control"
              placeholder="seaech for title or rate"
              value={caracter}
              onChange={searchHandeler}
            />
          </div>
          
        </div>
   

   
  )
}

export default Filter
