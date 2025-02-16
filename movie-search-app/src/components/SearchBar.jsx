import {useState} from "react";

import { axios } from 'axios';

import { FiSearch } from 'rea';


// eslint-disable-next-line react/prop-types
function SearchBar({setMovies, setLoading}){
   const [query, setQuery] = useState("");

   const fetchMovies = async()=>{
    if(!query.trim()) return;
    setLoading(true);
    const API_KEY = import.meta.env.VITE_OMBD_API_KEY;
    const URL = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;

    try{
        const response = await axios.get(URL);
        setMovies(response.data.Search || []);
    }catch(error){
        console.log("Error fetching movies:",error)
    }
    setLoading(false);

   };


    return(
        <div className="search-bar">
            <input 
            type="text"
            placeholder="Search for a movie...."
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            />
            <button onClick={fetchMovies}>
                <FiSearch />
            </button>

        </div>
    );
};

export default SearchBar;