import { useState } from "react";

function RangeInput( {min = 0, max = 100, ...props} ) {
    const [number, setNumber] = useState( 10 )


    const handleChangeRange = ( {target} ) => {
        setNumber( target.value )
    }

    return (
        <>
        <hr />
            <label>Seleccione un número de {min} a {max}: </label>
            <br />
            <input type="range" value={number} min={ min } max={ max } onChange={handleChangeRange} className={props.class} />
            <p>Numero: {number}</p>
        </>
        
    )

}

export default RangeInput
