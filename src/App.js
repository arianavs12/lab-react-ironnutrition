import logo from './logo.svg';
import './App.css';

// Se importan los datos del archivo json
import comidas from './foods.json';

// Se importa useState de React
import { useState } from "react"

// Se importan componentes para enviarles los props

// Componente FoodBox 
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

// Funcion principal donde se realiza todo

function App() {

// se crea nuevo estado llamado foods con los valores de la array comidas
const [foods, setFoods] = useState(comidas)

// Funcion para agregar nuevo registro de comida
//                          La info recibida del formulario se guarda en var comida
function agregarNuevaComida(comida) {
  // se crea nueva array con los valores ya existentes del estado foods mas el nuevo que se guardó en comida
  const nuevoArray = [...foods, comida]

  // se modifica el estado de foods con la nueva array
  setFoods(nuevoArray)
}



  return (
    <div>
      {/* Se agrega componente del formulario */}
      <AddFoodForm agregarNuevaComida={agregarNuevaComida}/>
      <h1>Food List</h1>
      {/* Se crea nueva array con la info del json y se guarda en var comida */}
      {comidas.map((comida, index) => {
        // Se regresa al componente FoodBox los props en la var alimento
        //                                Se pone el key para darle identificador unico usando el index
        return <FoodBox alimento={comida} key={index} />

      })}
    </div>
  );
}

export default App;
