import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas del getGifs', () => {
  test('Debe retornar un objeto gif con id, title y url', async() => { 
    const category = 'casa'
    const gifs = await getGifs(category);

    // Este test sirve para asegurar que hay alguna respuesta
    expect(gifs.length).toBeGreaterThan(0)

    // Este test muestra como evaluar que un objeto tenga los campos requeridos sin tener en cuenta el contenido
    // notar  que String esta escrito con mayuscula
    expect(gifs[0]).toEqual({
      id: expect.any( String ), // el id se espera que sea un string cualquiera
      title: expect.any( String ), // el title se espera que sea un string cualquiera
      url: expect.any( String ) // el url se espera que sea un string cualquiera
    });
   })
})