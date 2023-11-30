import { render } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas en GifGrid', () => {
  
  test('Debe mostrar el loading inicialmente', () => {
    const category = 'categoria de test';

    render(<GifGrid />)
  });

});