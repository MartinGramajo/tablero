import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

// con esta constante inicializamos el tamaño del tablero
const tableroSize = 8;

// función que genera el tablero con las casillas de color rojo y azul alternados
const generarTablero = (size) => {
  const tablero = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const color = (i + j) % 2 === 0 ? "red" : "blue";
      row.push(color);
    }
    tablero.push(row);
  }
  return tablero;
};

function App() {
  // con useState inicializamos el tablero vacío y lo llenamos con las casillas de color rojo y azul alternados con la función generarTablero
  const [tablero, setTablero] = useState([]);

  // con useEffect, cada vez que se renderiza el componente, se llena el tablero con las casillas de color rojo y azul alternados
  useEffect(() => {
    const tableroGenerado = generarTablero(tableroSize);
    setTablero(tableroGenerado);
    console.log(tableroGenerado);
  }, []);

  return (
    <>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${tableroSize}, 50px )`
        }}
      >
        {tablero &&
          tablero.map((row, rowIndex) =>
            row.map((color, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid black"
                }}
              >
                {`${rowIndex}-${colIndex}`}
              </div>
            ))
          )}
      </section>
    </>
  );
}

export default App;
