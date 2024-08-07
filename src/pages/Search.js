import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';
import { useTitle } from '../hooks/useTitle';

export const Search = ({apiPath}) => {
  const [searchParams]=useSearchParams();
  const queryTerm =searchParams.get("q");
  
  const { data:movies }=useFetch(apiPath,queryTerm);
  const pageTitle=useTitle(`Search result for ${queryTerm}`);
  
  
  return (
    <main>
          <section>
            <p className="text-3xl text-gray-700 dark:text-white">{ movies.lenght===0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
          </section>
          <section className="flex flex-wrap justify-center gap-6 py-9">
            {movies.map((movie)=>(
                <Card key={movie.id} movie={movie} />
            ))}
          </section>
    </main>
  )

}
