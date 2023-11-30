/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas de GifExpertApp', () => { 
  test('Debe ejecutar onAddCategory', () => {
    render(<GifExpertApp />);

    screen.debug()
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('GifExpertApp');
   })
 })