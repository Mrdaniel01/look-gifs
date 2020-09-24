import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
  
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(inputValue.trim().length > 2 ){
      setCategories( cats => [ inputValue, ...cats ])
      setInputValue('');
    } 
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <div className='input__container'>
          <input 
              type='text'
              value={inputValue}
              placeholder='Add Your category'
              onChange={handleInputChange}
            />
        </div>        
      </form>  
    </>
  )
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired 
}

export default AddCategory;
