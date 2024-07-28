import { useEffect, useState } from 'react';
import { Card } from '../components/Card';

export const MovieList = () => {

  const [movies,setMovies]=useState([]);
  
  useEffect(()=>{
    async function fetchMovies(){
      const response =await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=24c0593b28ac94e7404133a06e81c0d2");
      const data=await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  },[])

  return (
    <main>
          <section className="flex flex-wrap justify-center gap-6 py-9">
            {movies.map((movie)=>(
                <Card key={movie.id} movie={movie} />
            ))}
          </section>
    </main>
  )
}
