/*
  Este componente contiene los Gif para una categoria seleccionada.
  El componente hace:
  - la busqueda de los gif
  - les coloca el titulo
  - los presenta
*/
import { GifItems } from "./GifItems";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

  // Hooks
  const { images, isLoading } = useFetchGifs(category);
  
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
