/*
  Hook personalizado
  NOTA: este archivo tiene extension js y no jsx porque solo tiene codigo javascript y nada de HTML
*/

import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

  // Hooks
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true )

  useEffect( () =>{
    getImages();
  }, [] );
  
  // Funciones
  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages( newImages );
    setIsLoading(false);
  }

  return ({
    images,
    isLoading
  })
}
