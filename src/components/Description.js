

  
// import initialMovies from "../initialMovie"
   
 // import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
//import initialMovies from "../initialMovie";
    

 
    


 const   Description = ({movies})  => {

 // const movieRefs = useRef({initialMovies});

 const { id } = useParams(); // récupère l'ID depuis l'URL
 const movie = movies.find((m) => m.id.toString() === id);

 if (!movie) return <p>Film introuvable</p>;

 return (
   <div>
    <div style={{display: "flex",justifyContent:"center" ,paddingBlock:" 20px" }}> 

      
       <Link  to={'/'} >    {/* button de retour á la page d'accueil */ }
 <button style={{backgroundColor:'blue', color:'white', border:'none' ,paddingBlock:"8px", paddingInline:"18px",borderRadius:"5px"}}>
   Retour 
   </button>
     </Link>
    </div>

    <h1 style={{textAlign:'center'}}> Bande d'annonce du film : <strong> { movie.title} </strong> </h1> 


    <div style={{ display:"flex",justifyContent:"center" ,columnGap:"50px" ,paddingBlockStart:"50px"}}>  
    <iframe
  src={movie.video}
  width="560"
  height="315"
  allow="autoplay; encrypted-media"
  allowFullScreen
  title={movie.title}
/>
       <div style={{width:"400px"}}>
       <h2>{movie.title}</h2>

        <p >{movie.description}</p>
       </div>
       
    </div>
    
   
   
   </div>
 );



 }

 export default Description