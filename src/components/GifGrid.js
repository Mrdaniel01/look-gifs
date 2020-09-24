//import React, { useState, useEffect} from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs( category );

  return (
    <div className='cards__container'>
      <h3>{ category }</h3>

      { loading && 'Loading...' }
      
      <div className='card__container'>
      {
          images.map( (img) => (
            <GifGridItem 
              key={img.id}
              {...img}
            />
          ))
        }
      
      </div>
        
    </div>
  )
}

export default GifGrid;
