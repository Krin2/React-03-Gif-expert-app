/* eslint-disable no-undef */
import { getAllByRole, render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// Preparacion para mockear la respuesta del useFetchGifs.
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
  const category = 'categoria de test';
  
  test('Debe mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      isLoading: true,
      images: []
    })

    render(<GifGrid category={ category }/>);

    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });
  
  test('Debe mostrar items cuando se cargan las imagenes del useFetchGif', () => { 
    
    const gifs = [
      {
        id: '123',
        title: 'test 1',
        url: 'http://dominio/test1.jpg',
      },
      {
        id: '456',
        title: 'test 2',
        url: 'http://dominio/test2.jpg',
      },
    ];

    // Mockeo de la respuesta del useFetchGifs
    useFetchGifs.mockReturnValue({
      isLoading: false,
      images: gifs
    });
    
    render(<GifGrid category={ category }/>);
    screen.debug();

    expect(screen.getAllByRole('img').length).toBe(2);


  })
});