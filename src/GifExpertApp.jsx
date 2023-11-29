import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

	// Hooks
	const [categories, setCategories] = useState(['One Piece']);

	// Funciones
	const onAddCategory = (newCategory) => {
		if ( categories.includes(newCategory) ) return;
		setCategories([newCategory, ...categories])
	}

  return (
		<>
			{/*
				Estructura esperada en la pagina
				- { titulo }
				- { input }
				- { listado de Gif }
				- { Gif Items }
			*/}

			{ /* titulo */}
			<h1>GifExpertApp</h1>
			
			{ /* input */}
			<AddCategory
				// setCategories= { setCategories } // forma de enviar la funcion setCategories directamente al componente hijo
				onNewCategory = { onAddCategory } // forma de enviar al componente hijo, la funcion para agregar la categoria
			/>
			{/* <button onClick={ onAddCategory }>Agregar</button> */}
			
			{ /* listado de gif
				El listado de gif en un principio estaba dentro de una lista ordenada.
				Al crear el componente GifGrid, se elimino porque ya no era necesario
			*/ }
				{ categories.map( category => (
							<GifGrid 
								key= { category } 
								category= { category }
							/>
						)
					)
				}
		</>
  )
}
