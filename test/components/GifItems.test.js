import { render, screen } from "@testing-library/react";
import { GifItems } from "../../src/components/GifItems";

describe('Test del componente GifItems', () => {
  const title = 'mi titulo';
  const url = 'https://abc.com/de';

  test('Debe coincidir con el snapshot', () => {
    const { container } = render(<GifItems url= {url} title={ title }/>);

    expect(container).toMatchSnapshot();
  });

  test('Debe recibir la propiedad url en la imagen', () => {
    render(<GifItems url={ url } title={ title }/>);
    const {src, alt} = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Debe recibir la propiedad title', () => {
    render(<GifItems url={ url } title={ title }/>);
    
    expect(screen.getAllByText(title)).toBeTruthy();
  });
})