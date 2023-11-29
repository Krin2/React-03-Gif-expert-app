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