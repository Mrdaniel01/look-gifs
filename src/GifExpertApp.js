import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Camaro'])

  return <>
    <h2 className='main__tile'>Looking for a Gif?</h2>
    <AddCategory setCategories={setCategories}/>
    


    <ul>
      { 
        categories.map( category => (
          <GifGrid 
            key={ category }
            category={category} />
        ))
      }
    </ul>
  </>
};

export default GifExpertApp;