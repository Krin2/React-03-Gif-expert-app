import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

  // Hooks
  const [inputValue, setInputValue] = useState('')

  // Funciones
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newValue = inputValue.trim();

    if ( newValue.length <=1) return; // Verifico que haya contenido para agregar con mas de 1 caracter

    // agrego la categoria
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(newValue);

    setInputValue(''); // borro el input para escribir el siguiente valor
  }
  return (
    <form onSubmit={ onSubmit } aria-label='form'>
      <input
        type='text' 
        placeholder='Buscar Gif'
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}