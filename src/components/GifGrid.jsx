/*
  Este componente contiene los Gif para una categoria seleccionada.
  El componente hace:
  - la busqueda de los gif
  - les coloca el titulo
  - los presenta
*/
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItems } from "./GifItems";


export const GifGrid = ({ category }) => {

  // Hooks
  const [images, setImages] = useState([]);
  useEffect( () =>{
    getImages();
  }, [] );
  
  // Funciones
  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages( newImages );
  }
  
  return (
    <>
      <h3>{ category }</h3>
      <div className={'card-grid'}>
        {
          images.map( (image) => (
            <GifItems 
              key={ image.id }
              {...image} />
          ))
        }
      </div>
    </>
  )
}
