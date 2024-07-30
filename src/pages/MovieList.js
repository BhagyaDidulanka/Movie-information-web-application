import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';

export const MovieList = ({apiPath}) => {
  
  const { data:movies }=useFetch(apiPath);
 
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
