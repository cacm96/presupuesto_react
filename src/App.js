import React, {useState, useEffect} from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';


function App() {

  //crearemos 2 states, uno para el presupuesto y otro para el restante
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  //carga condicional
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);


  //useEffect que actualiza el restante
  useEffect(() => {
    if(creargasto) {

      //agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);


      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);


      //resetear a false
      guardarCrearGasto(false)
    }
  }, [gasto, creargasto, gastos, restante])


  return (
    <div className="container">
      <header>
        <h1>Presupuesto</h1>

        <div className="contenido-principal contenido">

          {mostrarpregunta ? 
            (
              <Question 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
            ) : 
            (
              <div className="row">
                <div className="one-half column">
                  <Form 
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <List 
                    gastos={gastos}
                  />

                  <BudgetControl 
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )
          }
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
