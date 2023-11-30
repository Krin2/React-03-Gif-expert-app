# Notas sobre React
1. Generalizades:
    - Cada componente debe ser lo mas simple posible.
    - cada componente debe hacer una sola cosa.
    - si el componente tiene mucho codigo seguramente se puede refactorizar, crear nuevos componentes o helpers.
    - cuando un componente retorna un html como respuesta, entonces la extension del archivo se usa jsx. Si no retorna un HTML, entonces la extension es js

2. StrictMode:
    - El StrictMode se usa solo en desarrollo y es el culpable de que aparezca repetida la informacion al poner los console.logs en los componentes.
    - En produccion no aparecera el log duplicado

3. Hooks
    - Los hooks son funciones 
4. useEffect:
    - El useEffect se usa para que react ejecute el codigo que esta adentro en ciertos momento y no cada vez que se renderiza el componente.
    - El segundo argumento es un array con las condiciones en las que se ejecutara este codigo.
    - Cuando este array esta vacio, se ejecuta una unica vez al crear el componente.
    - El callback del useEffect no puede ser asincrono.
    - Solo se testean los Hooks personalizados, los demas ya fueron testeados por quien los hizo.
5. Test:
    - Configurar el ambiente de testing incluyendo las dependencias necesarias en desarrollo.
    ```
    yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
    yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
    yarn add --dev whatwg-fetch
    ```
    - Crear el script para testear en el package.json

    ```json
    "scripts": {
        ...
        "test": "jest --watchAll"
    ```
    - Crear un archivo `babel.config.cjs` para la configuracion de babel
    ```js
    module.exports = {
        presets: [
            [ '@babel/preset-env', { targets: { esmodules: true } } ],
            [ '@babel/preset-react', { runtime: 'automatic' } ],
        ],
    };
    ```
    - Crear la configuracion de jest en un archivo `jest.config.cjs`
    ```js
    module.exports = {
        testEnvironment: 'jest-environment-jsdom',
        setupFiles: ['./jest.setup.js']
    }
    ```
    - Crear si es necesario el archivo `jest.setup.js` para la configuracion del fetch API
    ```js
    // En caso de necesitar la implementación del FetchAPI
    import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
    ```
    - Correr los test para verificar que esta bien configurado (deberia ejecutarse y mostrar que no se encontraron test).
    ```
    yarn test
    ```


# Test
Los test siguen el patron AAA, "arrange, act, assert" en el cual primero se prepara el escenario, luego se aplica algun estimulo y finalmente se verifica que el resultado sea el esperado.

## render()
Al importar la libreria de testing de react, se tiene acceso al metodo render().

Este metodo permite simular el renderizado de un componente de react para poder evaluarlo.
```js
import { render } from "@testing-library/react";

test('Debe coincidir con el snapshot', () => {
    const { container } = render(<Componente prop1= { prop1 } />);

    expect(container).toMatchSnapshot();
  });
```

## renderHook()
Los Hooks no se pueden probar directamente con el render ya que no son componentes en si.

Para ello jest tiene un metodo especial que es el `renderHook`, el cual permite ejecutar un hook y analizar el resultado.

Este metodo devuelve 3 valores de los cuales vamos a usar el `result`.
```js
test('Debe regresar el estado inicial', () => { 
    const category = 'test';
    
    const { result } = renderHook(() => useFetchGifs(category) );
    const { images, isLoading } = result.current;

    expect( images.length).toBe(0);
    expect( isLoading ).toBeTruthy();
   });
```

El result es literalmente el resultado de la ejecucion del hook, por lo que en el ejemplo anterior seria el objeto `images`

## waitFor()
El metodo `waitFor` permite esperar el resultado de evaluar un metodo asincrono.

Este metodo tiene 2 argumentos, el primero es un callback que evalua el resultado del metodo asincrono y el segundo es un timeout para salir del test si no hay respuesta.

```js
import { renderHook, waitFor } from "@testing-library/react";

describe('Pruebas en el hook useFetchGifs', () => { 
  ...

   test('Debe...', async() => { 
    ...
    
    const { result } = renderHook(() => useFetchGifs(category) );
    await waitFor(
      () => expect( result.current.images.length).toBeGreaterThan(0),
      { timeout: 1500 }
    );

    ...
   expect(...)
   });
 });
```

## fireEvent
FireEvent es una funcionalidad que permite a jest simular el disparo de eventos.

Se debe seleccionar el elemento para luego disparar un evento asociado al mismo.

```js
...
// selecciono el elemento input
const input = screen.getByRole('textbox');
// escribo 'algo' en el elemento
fireEvent.input( input, { target: { value: 'algo' } } );
...
```