

     //  import Description from './description';


       import 'bootstrap/dist/css/bootstrap.min.css';

      import { Link  } from 'react-router-dom';

 //      import Filter from './Filtre';

   //    import Card from 'react-bootstrap/Card';


     const  MovieCard = ({ movie }) => {

        return (
            <> 
            <Link to={`/Description/${movie.id}`} style={{width:'300px' , borderRadius:'8px'}} > 
            <div  className="border rounded-lg p-4 shadow-md mb-4" >
              <img src={movie.posterURL} alt={movie.title} className="w-full h-64 object-cover rounded-md" style={{width: '250px',height:'250px'}} />
              <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
              <p className="text-gray-700 mt-1">{movie.description}</p>
              <p className="mt-2">Note: <strong>{movie.note}/10</strong></p>
            </div>
            </Link>
</>
          );

      


     }

     export default MovieCard