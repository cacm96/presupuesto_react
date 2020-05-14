import React from 'react';
import PropTypes from 'prop-types';

const Spend = ({gasto}) => ( 
    <li className="gastos">
        <p>
            {gasto.nombre}

            <span className="gasto">
                $ {gasto.cantidad}
            </span>
        </p>
    </li>
 );

 Spend.propTypes = {
     gasto: PropTypes.object.isRequired
 }
 
export default Spend;