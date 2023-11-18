
import axios from 'axios';
import './App.css'
import{useEffect, useState} from 'react'



interface Movies{
 id: number;
 title: string;
 poster_path: string;
 release_date:string

}


function App() {
  
  const[movies, setMovies]=useState<Movies[]>([]);

  const apiKey ="ea2c97f8987f8f00df0b2146f24b6619";
  const popular = "https://api.themoviedb.org/3/movie/popular"


  useEffect(()=>{fetchData();},[])
  const fetchData = ()=>{
    axios.get(`${popular}?api_key=${apiKey}`).then((response) =>{
      const result = response.data.results;
      console.log(result)
      setMovies(result);
    }) 
  }
  return (
    <div className='App'>
    {movies.map((items) => (
      <div className='movieContainer' key={items.id}>
        <h2>{items.title}</h2>
        {items.poster_path && (
          <img src={`https://image.tmdb.org/t/p/w200${items.poster_path}`} alt={`${items.title}`} />
        )}
        <p>{items.release_date}</p>
      </div>
    ))}
    </div>
  )
}

export default App
