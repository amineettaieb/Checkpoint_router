import React,{useState} from 'react'
import { ListMovie } from './Data';
import MovieCart from './MovieCart';


function Search() {
    const [searchField, setSearchField] = useState("");
    
const handleChange = e => {
    setSearchField(e.target.value);

};
    

    return (
        <div>
            <div>
                <input  type = "search" placeholder = "Search Movie" onChange = {handleChange}/>
            </div>
            <MovieCart searchField={searchField}/>

        </div>

    )
}

export default Search