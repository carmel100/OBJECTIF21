
  
import React, { useState } from 'react';

import Filter from "./Filtre";

import MovieList from "./MovieList";



import initialMovies from "../initialMovie";

 



function Accueil({ moviesList = initialMovies }) {
 // état des films initialisé depuis la prop ou les données par défaut
 const [movies, setMovies] = useState(moviesList);

 // filtres
 const [titleFilter, setTitleFilter] = useState('');
 const [ratingFilter, setRatingFilter] = useState('');

 // états pour ajout
 const [newTitle, setNewTitle] = useState('');
 const [newDesc, setNewDesc] = useState('');
 const [newUrl, setNewUrl] = useState('');
 const [newNote, setNewNote] = useState('');

 // handler pour ajouter un film
 const handleAdd = () => {
   if (!newTitle || !newUrl || !newNote) return;
   const noteNum = parseFloat(newNote);
   const newMovie = {
     title: newTitle,
     description: newDesc,
     posterURL: newUrl,
     note: noteNum
   };
   setMovies(prev => [...prev, newMovie]);

   // réinitialise les champs
   setNewTitle('');
   setNewDesc('');
   setNewUrl('');
   setNewNote('');
 };

 // application des filtres
 const filtered = movies.filter(m =>
   m.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
   (ratingFilter === '' || m.note >= parseFloat(ratingFilter))
 );

 return (

   <>   
   <div className="max-w-2xl mx-auto p-4">
     <h1 className="text-2xl font-bold mb-4">Ma Cinémathèque</h1>

     {/* Formulaire d'ajout */}
     <div className="border rounded-lg p-4 mb-6 ">
       <h2 className="text-xl mb-2">Ajouter un film</h2>
       <input
         type="text"
         placeholder="Titre"
         value={newTitle}
         style={{outline:'none'}}
         onChange={e => setNewTitle(e.target.value)}
         className="border rounded p-2 w-full mb-2 me-3"
       />
       <input
         type="text"
         placeholder="Description"
         value={newDesc}
         style={{outline:"none"}}
         onChange={e => setNewDesc(e.target.value)}
         className="border rounded p-2 w-full mb-2 me-3"
       />
       <input
         type="text"
         placeholder="URL de l'affiche"
         value={newUrl}
         style={{outline:'none'}}
         onChange={e => setNewUrl(e.target.value)}
         className="border rounded p-2 w-full mb-2 me-3"
       />
       <input
         type="number"
         placeholder="Note (0-10)"
         value={newNote}
         onChange={e => setNewNote(e.target.value)}
         style={{width: '120px',outline:'none'}}
         className="border rounded p-2 w-full mb-2 me-3"
       />
       <button
         onClick={handleAdd}
         className="bg-blue-500 text-white px-4 py-2 rounded"
       >
         Ajouter
       </button>
     </div>

     {/* Filtres */}
     <Filter
       titleFilter={titleFilter}
       ratingFilter={ratingFilter}
       onTitleChange={setTitleFilter}
       onRatingChange={setRatingFilter}
     />

     {/* Liste de films */}
     <MovieList movies={filtered} />
   </div>
  



</>
 );
}


export default Accueil
