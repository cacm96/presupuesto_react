import React from 'react';
import Spend from './Spend';
import PropTypes from 'prop-types';

const List = ({gastos}) => ( 
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto => (
                <Spend
                    key={gasto.id} 
                    gasto={gasto}
                />
            ))}
        </div>
    );

List.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default List;