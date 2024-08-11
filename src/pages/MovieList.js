import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';
import { useTitle } from '../hooks/useTitle';

export const MovieList = ({apiPath,title}) => {
  
  const { data:movies }=useFetch(apiPath);

  //eslint-disable-next-line
  const pageTitle=useTitle(`${title}`);
 
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
