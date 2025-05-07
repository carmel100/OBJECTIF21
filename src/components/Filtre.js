  

   const Filter = ({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) => {
   return(
   <>  
<div className="flex space-x-4 mb-4">
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={titleFilter}
        onChange={(e) => onTitleChange(e.target.value)}
        className="border rounded p-2 flex-1"
      />
      <input
        type="number"
        placeholder="Note min"
        value={ratingFilter}
        min="0"
        max="10"
        onChange={(e) => onRatingChange(e.target.value)}
        className="border rounded p-2 w-24"
      />
    </div>
    </>
   )
}



      


   

   export default Filter