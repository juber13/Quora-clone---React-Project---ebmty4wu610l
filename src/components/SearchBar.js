import React,{useState , useEffect} from 'react'

function SearchBar(e) { 
 const [filterItems , setFilterItems]  = useState('');

  useEffect(() => {
    localStorage.setItem('text' , filterItems);
},[filterItems])

  
 return (
   <div className=''>
        <input type="text" value={filterItems} placeholder='search for questions...'  className='form-control' onChange={(e) => setFilterItems(e.target.value)}/>
    </div>
  )
}

export default SearchBar