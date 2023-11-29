// Realiza una busqueda en Giphy

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=frlElJKCYyKb7ubWzH0BfmKndN3KXUmd&q=${ category }&limit=10`;

  const resp = await fetch( url );

  const { data = [] } = await resp.json();

  // Armo la respuesta que necesito en base a los datos devueltos en la busqueda
  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs;
}