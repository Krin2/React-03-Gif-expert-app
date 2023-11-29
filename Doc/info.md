# Notas sobre React
1. Generalizades:
    - Cada componente debe ser lo mas simple posible.
    - cada componente debe hacer una sola cosa.
    - si el componente tiene mucho codigo seguramente se puede refactorizar, crear nuevos componentes o helpers.
2. StrictMode:
    - El StrictMode se usa solo en desarrollo y es el culpable de que aparezca repetida la informacion al poner los console.logs en los componentes.
    - En produccion no aparecera el log duplicado
3. useEffect:
    - El useEffect se usa para que react ejecute el codigo que esta adentro en ciertos momento y no cada vez que se renderiza el componente.
    - El segundo argumento es un array con las condiciones en las que se ejecutara este codigo.
    - Cuando este array esta vacio, se ejecuta una unica vez al crear el componente.
    - El callback del useEffect no puede ser asincrono.
