import { useState } from "react";

function App() {
  //   Crear un proyecto compuesto de un solo componente y hacer uso de useState y mostrar
  // el state del componente.
  // Se podrá crear un contador de clicks o crear un input que mediante onChange cambie
  // el valor del state. Cualquiera de las dos opciones, son validas para este ejercicio.
  // Se valorará el uso de useState y el uso de la sintaxis de ES6.
  const [state, setState] = useState(0);

  return (
    <div>
      <h2>Contador de clicks</h2>
      <button onClick={() => setState(state + 1)}>Clicks: {state}</button>
    </div>
  );
}
export default App;
