import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

/* eslint-disable no-undef */
describe('Pruebas en el hook useFetchGifs', () => { 
  test('Debe regresar el estado inicial', () => { 
    const category = 'test';
    
    const { result } = renderHook(() => useFetchGifs(category) );
    const { images, isLoading } = result.current;

    expect( images.length).toBe(0);
    expect( isLoading ).toBeTruthy();
   });

   test('Debe regresar un arreglo de imagenes y el isLoading en false', async() => { 
    const category = 'test';
    
    const { result } = renderHook(() => useFetchGifs(category) ); // ejecuta el hook

    // espera a que el resultado tenga una respuesta
    await waitFor(
      () => expect( result.current.images.length).toBeGreaterThan(0), // espera haya imagenes
      { timeout: 1500 } // timeout, si no se coloca, por defecto es 1 segundo
    );

    // en este punto, las imagenes tienen algun resultado
    const { images, isLoading } = result.current;

    expect( images.length).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
   });
 });