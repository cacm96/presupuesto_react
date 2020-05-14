import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Question = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    //definir state
    const [cantidad, guardarCantidad] = useState(0);
    //state de error
    const [error, guardarError] = useState(false);


    //funcion lee presupuesto
    const definirPresupuesto = e => {
        //usualmente lo que se lee del input usualmente viene como string
        guardarCantidad(parseInt(e.target.value, 10));
    }

    //submit para leer el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad) ) {
            guardarError(true);
            return;
        }


        //si se pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
            
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     );
}

Question.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Question;