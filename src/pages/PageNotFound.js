import { Link } from 'react-router-dom';
import pageNotFound from '../assets/images/pagenotfound.png';
import { Button } from '../components';

export const PageNotFound = () => {
  return (
    <main>
      <section className='flex flex-col items-center justify-center '>
          <div>
            <p className='flex flex-col items-center py-8 text-5xl dark:text-gray-200'>404 Oops!</p>
          </div>
          <div className='max-w-lg'>
            <img className='rounded-md' src={pageNotFound} alt="Page Not Found" />
          </div>
          <div className='flex items-center justify-center py-8'>
            <Link to="/">
            <Button>Back To Home</Button>
            </Link>
          </div>
      </section>
    </main>
  )
}
