/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Test del componente AddCategory', () => {

  test('Debe cambiar el valor de la caja de texto', () => {
    // 1- Inicializaciones
    const valorDeReferencia = 'esto es un test'

    render(<AddCategory onNewCategory={ () => {} }/>); // Renderizo el HTML
    const input = screen.getByRole('textbox'); // Hago referencia al input del formulario

    // 2- Genero la accion a evaluar
    fireEvent.input( input, { target: { value: valorDeReferencia } } ); // Disparo el evento de escritura en la caja de texto

    // 3- Verifico el resultado
    expect( input.value).toBe(valorDeReferencia);
  });

  test('Debe llamar onNewCategory si el input tiene un valor', () => {
    // 1- Inicializaciones
    const inputValue = 'esto es un test'; // valor de entrada para la caja de texto
    const onNewCategory = jest.fn();  // Mock de la funcion onNewCategory

    render(<AddCategory onNewCategory={ onNewCategory }/>); // Renderizo el HTML usando la funcion mockeada

    const input = screen.getByRole('textbox'); // Hago referencia al input del formulario
    const form = screen.getByRole('form'); // Hago referencia al formulario

    // 2- Genero la accion a evaluar
    fireEvent.input( input, { target: { value: inputValue } } ); // Escribo en la caja de texto
    fireEvent.submit( form ); // Hago el submit del formulario

    screen.debug();

    // 3- Verifico los resultados
    expect( input.value).toBe(''); // verifico que se borre el campo de texto al entrar en la onSubmit

    expect( onNewCategory ).toHaveBeenCalled(); // verifica que se haya llamado la funcion mockeada
    expect( onNewCategory ).toHaveBeenCalledTimes(1); // verifica que la funcion se haya llamado 1 vez
    expect( onNewCategory ).toHaveBeenCalledWith(inputValue); // verifica que la funcion se haya llamado con el inputValue

  });

  test('No debe llamar onNewCategory si el input esta vacio', () => {
    // 1- Inicializaciones
    const inputValue = ''; // valor de entrada para la caja de texto
    const onNewCategory = jest.fn();  // Mock de la funcion onNewCategory

    render(<AddCategory onNewCategory={ onNewCategory }/>); // Renderizo el HTML usando la funcion mockeada

    const input = screen.getByRole('textbox'); // Hago referencia al input del formulario
    const form = screen.getByRole('form'); // Hago referencia al formulario

    // 2- Genero la accion a evaluar
    fireEvent.input( input, { target: { value: inputValue } } ); // Escribo en la caja de texto
    fireEvent.submit( form ); // Hago el submit del formulario

    screen.debug();

    // 3- Verifico los resultados
    expect( onNewCategory ).not.toHaveBeenCalled(); // verifica que se haya llamado la funcion mockeada
    
  });
});