import { useState } from "react"

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

    // Verifico que haya contenido para agregar con mas de 1 caracter
    if ( newValue.length <=1) return;

    // agrego la categoria
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(newValue);

    // borro el input para escribir el siguiente valor
    setInputValue('');
  }
  return (
    <form onSubmit={ onSubmit }>
      <input
        type='text' 
        placeholder='Buscar Gif'
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
