import React, {Fragment} from 'react';
import {revisarPresupuesto} from '../helpers';
import PropTypes from 'prop-types';

const BudgetControl = ({presupuesto, restante}) => ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
     );

BudgetControl.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default BudgetControl;