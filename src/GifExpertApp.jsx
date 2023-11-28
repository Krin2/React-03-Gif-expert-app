import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

	// Hooks
	const [categories, setCategories] = useState(['One Piece']);

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
			<AddCategory setCategories= { setCategories } />
			{/* <button onClick={ onAddCategory }>Agregar</button> */}
			
			{ /* listado de gif */ }
			<ol>
				{ categories.map( category => {
						return <li key={ category }>{ category }</li>;
					})
				}
			</ol>
		</>
  )
}
